/**
 * S2 — Configure Defense (Step 02 / 03)
 * Constellation tier selection, cost ticker, researcher overrides.
 */

import { STATES, transition, getStateData } from '../stateMachine.js';
import {
  computeConstellationCost, formatCostB, formatPerAmerican, TIER_COSTS,
} from '../../utils/costCalc.js';
import {
  initGlobe, startAnimation, setupInteraction,
  getGlobeGroup, getScene,
} from '../globe/globeCore.js';
import { createCountriesLayer, setHighlightedCountries } from '../globe/countriesLayer.js';
import { createHudOverlay } from '../globe/hudOverlay.js';

let el = null;
let selectedTier = 'small';
let customCount = 4990;
let researcherOverrides = {
  sbiPk: 0.50,
  gbiPk: 0.56,
  pDetectTrack: 0.85,
  pClassifyWarhead: 0.80,
  pSystemUp: 0.90,
};

const TIER_DISPLAY = {
  small: {
    key: 'small',
    name: 'Small',
    arch: 'Accelerated Homeland Defense',
    sbiCount: '4,990',
    onStation: '10',
    salvoCapacity: '5 missiles',
    costLabel: '$271B',
    costNote: '20-year total',
    perAmerican: '$809',
    note: 'Sized against North Korea or Iran. Insufficient against China or Russia.',
    tag: 'Rogue State Threat',
    tagClass: 'tier-tag-rogue',
  },
  medium: {
    key: 'medium',
    name: 'Medium',
    arch: 'Balanced All-Threat Defense',
    sbiCount: '49,900',
    onStation: '100',
    salvoCapacity: '50 missiles',
    costLabel: '$1.65T',
    costNote: '20-year total',
    perAmerican: '$4,925',
    note: 'Defends against a limited Chinese or Russian demonstrative strike.',
    tag: 'Near-Peer Strike',
    tagClass: 'tier-tag-major',
  },
  large: {
    key: 'large',
    name: 'Large',
    arch: 'Space-Centric Strategic Defense',
    sbiCount: '249,500',
    onStation: '500',
    salvoCapacity: '250 missiles',
    costLabel: '$6.05T',
    costNote: '20-year total',
    perAmerican: '$18,056',
    note: 'Covers a large Chinese or limited Russian salvo. Still cannot defeat a full Russian strategic launch.',
    tag: 'Major Power Salvo',
    tagClass: 'tier-tag-peer',
  },
};

function buildTierCard(key) {
  const d = TIER_DISPLAY[key];
  return `
    <div class="tier-card ${key === selectedTier ? 'selected' : ''}" data-tier="${key}">
      <div class="tier-card-header">
        <div class="tier-card-name">${d.name}</div>
        <div class="tier-card-tag ${d.tagClass}">${d.tag}</div>
      </div>
      <div class="tier-card-cost">
        <span class="tier-cost-value">${d.costLabel}</span>
        <span class="tier-cost-note">${d.costNote}</span>
      </div>
      <div class="tier-card-stats">
        <div class="tier-stat">
          <span class="tier-stat-label">SBIs in orbit</span>
          <span class="tier-stat-value">${d.sbiCount}</span>
        </div>
        <div class="tier-stat">
          <span class="tier-stat-label">On-station</span>
          <span class="tier-stat-value">${d.onStation}</span>
        </div>
        <div class="tier-stat">
          <span class="tier-stat-label">Salvo capacity</span>
          <span class="tier-stat-value">${d.salvoCapacity}</span>
        </div>
      </div>
      <div class="tier-card-note">${d.note}</div>
      <div class="tier-arch-label">${d.arch}</div>
    </div>
  `;
}

function buildAbsenteeismCallout() {
  return `
    <div class="absenteeism-callout">
      <div class="callout-title">THE ABSENTEEISM PROBLEM</div>
      <div class="callout-body">
        Because interceptors orbit continuously, only a tiny fraction cover any launch
        point at any moment. At 300 km orbit, the ratio is <strong>499 : 1</strong> —
        4,990 total SBIs yields just 10 on-station over China or Russia at any given time.
      </div>
      <div class="callout-source">Source: AEI Working Paper 2025-20, Appendix B</div>
    </div>
  `;
}

function buildResearcherSliders() {
  return `
    <div class="researcher-section">
      <div class="wizard-section-label">ADVANCED PARAMETERS</div>
      <div class="slider-row">
        <label class="slider-label">SBI Kill Probability (Pk)</label>
        <div class="slider-track-wrap">
          <input type="range" class="slider-input" id="sl-sbi-pk"
            min="0.20" max="0.90" step="0.01" value="${researcherOverrides.sbiPk}">
          <span class="slider-value" id="sv-sbi-pk">${Math.round(researcherOverrides.sbiPk * 100)}%</span>
        </div>
      </div>
      <div class="slider-row">
        <label class="slider-label">GBI Kill Probability (Pk)</label>
        <div class="slider-track-wrap">
          <input type="range" class="slider-input" id="sl-gbi-pk"
            min="0.30" max="0.85" step="0.01" value="${researcherOverrides.gbiPk}">
          <span class="slider-value" id="sv-gbi-pk">${Math.round(researcherOverrides.gbiPk * 100)}%</span>
        </div>
      </div>
      <div class="slider-row">
        <label class="slider-label">Detect &amp; Track Probability</label>
        <div class="slider-track-wrap">
          <input type="range" class="slider-input" id="sl-detect"
            min="0.50" max="0.99" step="0.01" value="${researcherOverrides.pDetectTrack}">
          <span class="slider-value" id="sv-detect">${Math.round(researcherOverrides.pDetectTrack * 100)}%</span>
        </div>
      </div>
      <div class="slider-row">
        <label class="slider-label">Warhead Classification</label>
        <div class="slider-track-wrap">
          <input type="range" class="slider-input" id="sl-classify"
            min="0.40" max="0.99" step="0.01" value="${researcherOverrides.pClassifyWarhead}">
          <span class="slider-value" id="sv-classify">${Math.round(researcherOverrides.pClassifyWarhead * 100)}%</span>
        </div>
      </div>
      <div class="slider-row">
        <label class="slider-label">System Availability</label>
        <div class="slider-track-wrap">
          <input type="range" class="slider-input" id="sl-sysup"
            min="0.60" max="0.99" step="0.01" value="${researcherOverrides.pSystemUp}">
          <span class="slider-value" id="sv-sysup">${Math.round(researcherOverrides.pSystemUp * 100)}%</span>
        </div>
      </div>
    </div>
  `;
}

function buildCustomSlider() {
  return `
    <div class="custom-constellation-row">
      <div class="wizard-section-label">CUSTOM CONSTELLATION SIZE</div>
      <div class="slider-row">
        <label class="slider-label">SBIs in orbit</label>
        <div class="slider-track-wrap">
          <input type="range" class="slider-input" id="sl-custom-count"
            min="500" max="300000" step="500" value="${customCount}">
          <span class="slider-value" id="sv-custom-count">${customCount.toLocaleString()}</span>
        </div>
      </div>
      <div class="custom-cost-preview" id="custom-cost-preview"></div>
    </div>
  `;
}

function updateCostTicker() {
  const ticker = el.querySelector('.cost-ticker-value');
  const perPerson = el.querySelector('.cost-ticker-per-person');
  const onStation = el.querySelector('.cost-ticker-on-station');
  const salvoEl = el.querySelector('.cost-ticker-salvo');
  if (!ticker) return;

  const tier = selectedTier === 'custom' ? 'custom' : selectedTier;
  const data = computeConstellationCost(tier, tier === 'custom' ? customCount : null);

  ticker.textContent = formatCostB(data.total20yr_B);
  if (perPerson) perPerson.textContent = `${formatPerAmerican(data.perAmerican)} / American`;
  if (onStation) onStation.textContent = `${data.onStation.toLocaleString()} on-station`;
  if (salvoEl) salvoEl.textContent = `${data.salvoCapacity}-missile salvo capacity`;
}

function updateCustomPreview() {
  const preview = el.querySelector('#custom-cost-preview');
  if (!preview) return;
  const data = computeConstellationCost('custom', customCount);
  preview.innerHTML = `
    <span class="custom-preview-item">${data.onStation.toLocaleString()} on-station</span>
    <span class="custom-preview-sep">·</span>
    <span class="custom-preview-item">${formatCostB(data.total20yr_B)} 20yr cost</span>
    <span class="custom-preview-sep">·</span>
    <span class="custom-preview-item">${formatPerAmerican(data.perAmerican)} / American</span>
  `;
}

function wireSliders() {
  const slMap = {
    'sl-sbi-pk':  { key: 'sbiPk',          display: 'sv-sbi-pk',  fmt: v => `${Math.round(v*100)}%` },
    'sl-gbi-pk':  { key: 'gbiPk',          display: 'sv-gbi-pk',  fmt: v => `${Math.round(v*100)}%` },
    'sl-detect':  { key: 'pDetectTrack',   display: 'sv-detect',  fmt: v => `${Math.round(v*100)}%` },
    'sl-classify':{ key: 'pClassifyWarhead', display: 'sv-classify', fmt: v => `${Math.round(v*100)}%` },
    'sl-sysup':   { key: 'pSystemUp',      display: 'sv-sysup',   fmt: v => `${Math.round(v*100)}%` },
  };

  for (const [id, cfg] of Object.entries(slMap)) {
    const inp = el.querySelector(`#${id}`);
    const disp = el.querySelector(`#${cfg.display}`);
    if (inp && disp) {
      inp.addEventListener('input', () => {
        const v = parseFloat(inp.value);
        researcherOverrides[cfg.key] = v;
        disp.textContent = cfg.fmt(v);
        updateCostTicker();
      });
    }
  }

  const customInp = el.querySelector('#sl-custom-count');
  const customDisp = el.querySelector('#sv-custom-count');
  if (customInp && customDisp) {
    customInp.addEventListener('input', () => {
      customCount = parseInt(customInp.value, 10);
      customDisp.textContent = customCount.toLocaleString();
      updateCustomPreview();
      updateCostTicker();
    });
  }
}

function handleTierClick(e) {
  const card = e.target.closest('.tier-card');
  if (!card) return;
  selectedTier = card.dataset.tier;
  el.querySelectorAll('.tier-card').forEach(c => c.classList.toggle('selected', c.dataset.tier === selectedTier));
  updateCostTicker();
}

function handleBack() {
  transition(STATES.SELECT, {});
}

function handleNext() {
  const state = getStateData();
  transition(STATES.CONFIGURE_RED, {
    constellation: {
      tier: selectedTier,
      customCount: selectedTier === 'custom' ? customCount : null,
    },
    researcherOverrides: { ...researcherOverrides },
    mode: state.mode,
    blueKey: state.blueKey,
    redKey: state.redKey,
  });
}

export function renderConfigureBlue(container) {
  const state = getStateData();
  const mode = state.mode ?? 'citizen';

  selectedTier = 'small';
  customCount = 4990;
  researcherOverrides = { sbiPk: 0.50, gbiPk: 0.56, pDetectTrack: 0.85, pClassifyWarhead: 0.80, pSystemUp: 0.90 };

  el = document.createElement('div');
  el.className = 'wizard-screen';

  const showCustom = mode === 'researcher';

  el.innerHTML = `
    <div class="wizard-left">
      <div class="wizard-step-counter">02 <span class="step-sep">/</span> 03</div>

      <div class="wizard-header">
        <div class="wizard-title">CONFIGURE DEFENSE</div>
        <div class="wizard-subtitle">Select the size of your space-based interceptor (SBI) constellation. Larger constellations defend against bigger salvos — at exponentially higher cost.</div>
      </div>

      <div class="wizard-section-label">CONSTELLATION TIER</div>
      <div class="tier-cards">
        ${['small', 'medium', 'large'].map(buildTierCard).join('')}
      </div>

      ${mode === 'citizen' ? buildAbsenteeismCallout() : ''}
      ${showCustom ? buildCustomSlider() : ''}
      ${mode === 'researcher' ? buildResearcherSliders() : ''}

      <div class="cost-ticker">
        <div class="cost-ticker-label">ESTIMATED 20-YEAR PROGRAM COST</div>
        <div class="cost-ticker-value">$271B</div>
        <div class="cost-ticker-meta">
          <span class="cost-ticker-per-person">$809 / American</span>
          <span class="cost-ticker-sep">·</span>
          <span class="cost-ticker-on-station">10 on-station</span>
          <span class="cost-ticker-sep">·</span>
          <span class="cost-ticker-salvo">5-missile salvo capacity</span>
        </div>
        <div class="cost-ticker-source">Source: AEI Working Paper 2025-20</div>
      </div>

      <div class="wizard-nav">
        <button class="wizard-back">← BACK</button>
        <button class="wizard-next">NEXT →</button>
      </div>
    </div>

    <div class="wizard-right">
      <div class="globe-container-blue" id="globe-blue"></div>
      <div class="globe-label-overlay">
        <div class="globe-label-primary">CONSTELLATION COVERAGE</div>
        <div class="globe-label-secondary">SBIs orbit at 300 km altitude</div>
      </div>
    </div>
  `;

  container.appendChild(el);

  const globeContainer = el.querySelector('#globe-blue');
  initGlobe(globeContainer);
  createCountriesLayer(getGlobeGroup());
  createHudOverlay(getScene());
  startAnimation();
  setupInteraction(globeContainer);
  setHighlightedCountries(['US']);

  wireSliders();
  updateCostTicker();
  if (showCustom) updateCustomPreview();

  el.addEventListener('click', (e) => {
    if (e.target.closest('.tier-card')) handleTierClick(e);
    if (e.target.closest('.wizard-back')) handleBack();
    if (e.target.closest('.wizard-next')) handleNext();
  });

  requestAnimationFrame(() => el.classList.add('active'));
}

export function removeConfigureBlue() {
  if (el) { el.remove(); el = null; }
}
