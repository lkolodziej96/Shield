/**
 * Builds simulation params from wizard selections.
 * Maps: adversary + constellation tier + salvo tier → runMonteCarlo params.
 */

import { COUNTRIES } from '../config/countries.js';
import { computeConstellationCost } from '../utils/costCalc.js';

const SALVO_TARGET_MISSILES = { small: 5, medium: 50, large: 250 };

const CONUS_CAPABLE_CLASSES = {
  DPRK:   ['ICBM'],
  China:  ['ICBM', 'SLBM', 'HGV'],
  Russia: ['ICBM', 'SLBM', 'HGV'],
};

const SBI_UNIT_COSTS = { small: 13.4, medium: 8.4, large: 6.25 };

export function buildSimParams(wizardState) {
  const {
    blueKey = 'US',
    redKey,
    constellation,
    salvo,
    mode = 'citizen',
    researcherOverrides = {},
  } = wizardState;

  const blue = COUNTRIES.blue[blueKey];
  const red  = COUNTRIES.red[redKey];

  const costData = computeConstellationCost(constellation.tier, constellation.customCount);
  const sbiUnitCost_M = constellation.tier === 'custom'
    ? computeSbiUnitCost(constellation.customCount)
    : SBI_UNIT_COSTS[constellation.tier];

  const interceptors = {
    boost_sbi: {
      label:         'Space-Based Interceptor (Boost Phase)',
      deployed:      costData.onStation,
      pk:            researcherOverrides.sbiPk ?? blue.interceptors.boost_kinetic.pk,
      costPerUnit_M: sbiUnitCost_M,
      phase:         'boost',
    },
    midcourse_gbi: {
      ...blue.interceptors.midcourse_gbi,
      pk: researcherOverrides.gbiPk ?? blue.interceptors.midcourse_gbi.pk,
    },
    terminal_thaad: { ...blue.interceptors.terminal_thaad },
    terminal_pac3:  { ...blue.interceptors.terminal_pac3 },
  };

  const targetMissiles = salvo.tier === 'custom'
    ? salvo.customCount
    : SALVO_TARGET_MISSILES[salvo.tier];

  const missileClasses = buildMissileClasses(red, redKey, targetMissiles);

  return {
    interceptors,
    missileClasses,
    countermeasures:        red.countermeasures,
    constellationAltitudeKm: blue.constellationAltitudeKm,
    regionalCoverageFactor:  red.regionalCoverageFactor,
    pDetectTrack:            researcherOverrides.pDetectTrack    ?? blue.pDetectTrack,
    pClassifyWarhead:        researcherOverrides.pClassifyWarhead ?? blue.pClassifyWarhead,
    pFalseAlarmDecoy:        researcherOverrides.pFalseAlarmDecoy ?? blue.pFalseAlarmDecoy,
    doctrineMode:            blue.doctrineMode,
    shotsPerTarget:          blue.shotsPerTarget,
    maxShotsPerTarget:       blue.maxShotsPerTarget,
    pReengage:               blue.pReengage,
    pSystemUp:               researcherOverrides.pSystemUp ?? blue.pSystemUp,
    detectDegradeFactor:     blue.detectDegradeFactor,
    pkDegradeFactor:         blue.pkDegradeFactor,
    pDecoyBurnup:            0.7,
    nTrials:                 mode === 'researcher' ? 2000 : 1000,
    _wizard: {
      costData,
      targetMissiles,
      salvoTier: salvo.tier,
      redKey,
      blueKey,
      mode,
    },
  };
}

function buildMissileClasses(red, redKey, targetTotal) {
  const allowedClasses = CONUS_CAPABLE_CLASSES[redKey] ?? Object.keys(red.missileClasses);

  const filtered = {};
  for (const [type, data] of Object.entries(red.missileClasses)) {
    if (allowedClasses.includes(type)) filtered[type] = data;
  }

  if (Object.keys(filtered).length === 0) return red.missileClasses;

  const existingTotal = Object.values(filtered).reduce((s, c) => s + c.count, 0);
  if (existingTotal === 0) return filtered;

  const scaleFactor = targetTotal / existingTotal;
  const scaled = {};

  for (const [type, data] of Object.entries(filtered)) {
    scaled[type] = { ...data, count: Math.max(1, Math.round(data.count * scaleFactor)) };
  }

  const actualTotal = Object.values(scaled).reduce((s, c) => s + c.count, 0);
  const diff = targetTotal - actualTotal;
  if (diff !== 0) {
    const firstKey = Object.keys(scaled)[0];
    scaled[firstKey].count = Math.max(1, scaled[firstKey].count + diff);
  }

  return scaled;
}

function computeSbiUnitCost(n) {
  const exponent = Math.log(0.85) / Math.log(2);
  return 13.4 * Math.pow(n / 4990, exponent);
}
