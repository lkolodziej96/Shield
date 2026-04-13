/**
 * S3 — Configure Threat (Step 03 / 03)
 * Salvo tier selection + adversary DIA context + researcher overrides.
 */

import { STATES, transition, getStateData } from '../stateMachine.js';
import { buildSimParams } from '../../model/paramsBuilder.js';
import {
  initGlobe, startAnimation, setupInteraction,
  getGlobeGroup, getScene, rotateToCountry,
} from '../globe/globeCore.js';
import {
  createCountriesLayer, setHighlightedCountries, getCountryCenter,
} from '../globe/countriesLayer.js';
import { createHudOverlay } from '../globe/hudOverlay.js';

let el = null;
let selectedSalvo = 'small';
let customSalvoCount = 20;

const SALVO_DISPLAY = {
  small: {
    key: 'small',
    name: 'Small',
    missiles: '5',
    label: 'Limited / Rogue Strike',
    description: 'A limited strike from a rogue state. Represents North Korea\'s likely first-strike capacity or an Iranian ICBM scenario.',
    tag: 'DPRK / Iran',
    tagClass: 'tier-tag-rogue',
    adversaries: ['North Korea (current)', 'Iran (projected 2035)'],
  },
  medium: {
    key: 'medium',
    name: 'Medium',
    missiles: '50',
    label: 'Demonstrative / Near-Peer',
    description: 'A demonstrative or coercive strike from a near-peer adversary. Represents a fraction of China\'s or Russia\'s ICBM force.',
    tag: 'China / Russia (limited)',
    tagClass: 'tier-tag-major',
    adversaries: ['China limited strike', 'Russia demonstrative strike'],
  },
  large: {
    key: 'large',
    name: 'Large',
    missiles: '250',
    label: 'Large Coordinated Salvo',
    description: 'Approaches the size of China\'s projected 2035 ICBM force. Cannot represent a full Russian strategic launch (388+ ICBMs + SLBMs).',
    tag: 'China 2035 / Russia limited',
    tagClass: 'tier-tag-peer',
    adversaries: ['China 2035 ICBM force', 'Russia limited exchange'],
  },
};

const ADVERSARY_DIA_CONTEXT = {
  DPRK: {
    headline: 'North Korea — DIA Assessment (May 2025)',
    stats: [
      { label: 'Operational ICBMs', value: '~20', note: 'Hwasong-17/18 class' },
      { label: 'ASAT Capability', value: 'None', note: 'No confirmed ASAT capability' },
      { label: '2035 Projection', value: '~50 ICBMs', note: 'AEI/DIA upper estimate' },
    ],
    assessment: 'North Korea\'s ICBM program is advancing rapidly but remains small relative to China or Russia. The 5-missile "Small" scenario represents a plausible first strike with surviving Hwasong-17 or -18 missiles.',
  },
  China: {
    headline: 'China — DIA Assessment (May 2025)',
    stats: [
      { label: 'Deployed ICBMs', value: '400', note: 'DF-41 class (MIRVed)' },
      { label: 'Deployed SLBMs', value: '72', note: 'JL-3 class' },
      { label: 'HGVs', value: '600', note: 'DF-17 class (operational)' },
      { label: 'ASAT', value: 'Conventional', note: 'DN-3 operational' },
      { label: '2035 ICBM Proj.', value: '640', note: 'DIA central estimate' },
    ],
    assessment: 'China is undergoing the fastest nuclear expansion of any state. A "Medium" 50-missile scenario represents a demonstrative or coercive strike using less than 15% of its current ICBM inventory.',
  },
  Russia: {
    headline: 'Russia — DIA Assessment (May 2025)',
    stats: [
      { label: 'Deployed ICBMs', value: '350', note: 'Yars + Sarmat' },
      { label: 'Deployed SLBMs', value: '192', note: 'Bulava class' },
      { label: 'HGVs', value: '200–300', note: 'Avangard (operational 2019)' },
      { label: 'ASAT', value: 'Nuclear-capable', note: 'Highest threat to SBIs' },
      { label: 'Warheads (deployed)', value: '1,588', note: 'FAS estimate, 2025' },
    ],
    assessment: 'Russia retains the world\'s largest operational nuclear arsenal. A "Large" 250-missile scenario represents a limited exchange — Russia\'s full strategic launch would involve 500+ warheads, beyond any current defense architecture.',
  },
};

function buildSalvoCard(key) {
  const d = SALVO_DISPLAY[key];
  return `
    <div class="tier-card ${key === selectedSalvo ? 'selected' : ''}" data-salvo="${key}">
      <div class="tier-card-header">
        <div class="tier-card-name">${d.name}</div>
        <div class="tier-card-tag ${d.tagClass}">${d.tag}</div>
      </div>
      <div class="tier-card-cost">
        <span class="tier-cost-value">${d.missiles}</span>
        <span class="tier-cost-note">missiles</span>
      </div>
      <div class="tier-card-note">${d.description}</div>
    </div>
  `;
}

function buildDiaContext(redKey) {
  const ctx = ADVERSARY_DIA_CONTEXT[redKey];
  if (!ctx) return '';
  const stats = ctx.stats.map(s => `
    <div class="dia-stat">
      <div class="dia-stat-value">${s.value}</div>
      <div class="dia-stat-label">${s.label}</div>
      <div class="dia-stat-note">${s.note}</div>
    </div>
  `).join('');

  return `
    <div class="dia-context-panel">
      <div class="dia-context-headline">${ctx.headline}</div>
      <div class="dia-stats-grid">${stats}</div>
      <div class="dia-assessment">${ctx.assessment}</div>
      <div class="dia-source">Source: DIA, May 2025 (via AEI Working Paper 2025-20, Table 1)</div>
    </div>
  `;
}

function buildCustomSalvoSlider() {
  return `
    <div class="custom-constellation-row">
      <div class="wizard-section-label">CUSTOM SALVO SIZE</div>
      <div class="slider-row">
        <label class="slider-label">Number of missiles</label>
        <div class="slider-track-wrap">
          <input type="range" class="slider-input" id="sl-salvo-count"
            min="1" max="500" step="1" value="${customSalvoCount}">
          <span class="slider-value" id="sv-salvo-count">${customSalvoCount}</span>
        </div>
      </div>
    </div>
  `;
}

function handleSalvoClick(e) {
  const card = e.target.closest('[data-salvo]');
  if (!card) return;
  selectedSalvo = card.dataset.salvo;
  el.querySelectorAll('[data-salvo]').forEach(c =>
    c.classList.toggle('selected', c.dataset.salvo === selectedSalvo)
  );
}

function handleBack() {
  transition(STATES.CONFIGURE_BLUE, {});
}

function handleNext() {
  const state = getStateData();

  const wizardState = {
    blueKey: state.blueKey ?? 'US',
    redKey: state.redKey,
    constellation: state.constellation,
    salvo: {
      tier: selectedSalvo,
      customCount: selectedSalvo === 'custom' ? customSalvoCount : null,
    },
    mode: state.mode ?? 'citizen',
    researcherOverrides: state.researcherOverrides ?? {},
  };

  const params = buildSimParams(wizardState);
  const salvoTierLabel = selectedSalvo === 'custom'
    ? `${customSalvoCount}-missile`
    : `${SALVO_DISPLAY[selectedSalvo].missiles}-missile`;

  const salvoLabel = `${salvoTierLabel} ${state.redKey ?? ''} salvo`;
  const defenseLabel = `US Golden Dome (${state.constellation?.tier ?? 'small'} constellation)`;

  transition(STATES.CALCULATING, {
    params,
    salvoLabel,
    defenseLabel,
    wizardState,
  });
}

export function renderConfigureRed(container) {
  const state = getStateData();
  const mode = state.mode ?? 'citizen';
  const redKey = state.redKey ?? 'DPRK';

  selectedSalvo = 'small';
  customSalvoCount = 20;

  el = document.createElement('div');
  el.className = 'wizard-screen';

  el.innerHTML = `
    <div class="wizard-left">
      <div class="wizard-step-counter">03 <span class="step-sep">/</span> 03</div>

      <div class="wizard-header">
        <div class="wizard-title">CONFIGURE THREAT</div>
        <div class="wizard-subtitle">Choose the size of the adversary salvo your Golden Dome must intercept.</div>
      </div>

      <div class="wizard-section-label">SALVO SIZE</div>
      <div class="tier-cards">
        ${['small', 'medium', 'large'].map(buildSalvoCard).join('')}
      </div>

      ${mode === 'researcher' ? buildCustomSalvoSlider() : ''}

      ${buildDiaContext(redKey)}

      <div class="wizard-nav">
        <button class="wizard-back">← BACK</button>
        <button class="wizard-next">RUN SIMULATION →</button>
      </div>
    </div>

    <div class="wizard-right">
      <div class="globe-container-red" id="globe-red"></div>
      <div class="globe-label-overlay">
        <div class="globe-label-primary">THREAT ORIGIN</div>
        <div class="globe-label-secondary">Modeled launch corridor</div>
      </div>
    </div>
  `;

  container.appendChild(el);

  const globeContainer = el.querySelector('#globe-red');
  initGlobe(globeContainer);
  createCountriesLayer(getGlobeGroup());
  createHudOverlay(getScene());
  startAnimation();
  setupInteraction(globeContainer);
  setHighlightedCountries(['US', redKey]);

  const center = getCountryCenter(redKey);
  if (center) rotateToCountry(center);

  const customInp = el.querySelector('#sl-salvo-count');
  const customDisp = el.querySelector('#sv-salvo-count');
  if (customInp && customDisp) {
    customInp.addEventListener('input', () => {
      customSalvoCount = parseInt(customInp.value, 10);
      customDisp.textContent = customSalvoCount;
    });
  }

  el.addEventListener('click', (e) => {
    if (e.target.closest('[data-salvo]')) handleSalvoClick(e);
    if (e.target.closest('.wizard-back')) handleBack();
    if (e.target.closest('.wizard-next')) handleNext();
  });

  requestAnimationFrame(() => el.classList.add('active'));
}

export function removeConfigureRed() {
  if (el) { el.remove(); el = null; }
}
