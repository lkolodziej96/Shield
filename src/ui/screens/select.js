/**
 * S1 — Scenario Selection (Step 01 / 03)
 * Mode toggle + adversary selection + globe preview.
 */

import { STATES, transition } from '../stateMachine.js';
import { COUNTRIES } from '../../config/countries.js';
import {
  initGlobe, startAnimation, setupInteraction,
  getGlobeGroup, getScene, rotateToCountry,
} from '../globe/globeCore.js';
import {
  createCountriesLayer, setHighlightedCountries, getCountryCenter,
} from '../globe/countriesLayer.js';
import { createHudOverlay } from '../globe/hudOverlay.js';

let el = null;
let selectedRed = null;
let selectedMode = 'citizen';

const ADVERSARY_META = {
  DPRK: {
    flag: '🇰🇵',
    threat: 'Rogue State',
    threatClass: 'threat-rogue',
    badges: [
      { label: 'ICBMs', value: '~20', note: 'Hwasong-17/18' },
    ],
    summary: 'North Korea has a small but growing ICBM force capable of reaching CONUS. Limited countermeasures.',
    globeKey: 'DPRK',
  },
  China: {
    flag: '🇨🇳',
    threat: 'Near-Peer',
    threatClass: 'threat-major',
    badges: [
      { label: 'ICBMs',  value: '400',  note: 'DF-41 class' },
      { label: 'SLBMs',  value: '72',   note: 'JL-3 class' },
      { label: 'HGVs',   value: '600',  note: 'DF-17 class' },
    ],
    summary: "China is expanding its nuclear forces faster than any other state. Significant ASAT and hypersonic capability.",
    globeKey: 'China',
  },
  Russia: {
    flag: '🇷🇺',
    threat: 'Peer',
    threatClass: 'threat-peer',
    badges: [
      { label: 'ICBMs',  value: '350',  note: 'Yars / Sarmat' },
      { label: 'SLBMs',  value: '192',  note: 'Bulava class' },
      { label: 'HGVs',   value: '~250', note: 'Avangard' },
    ],
    summary: "Russia retains the world's largest nuclear arsenal with nuclear-capable ASAT weapons and operational HGVs.",
    globeKey: 'Russia',
  },
};

function buildAdversaryCard(key) {
  const data = COUNTRIES.red[key];
  const meta = ADVERSARY_META[key];
  const badges = meta.badges.map(b =>
    `<div class="threat-badge">
      <span class="threat-badge-value">${b.value}</span>
      <span class="threat-badge-label">${b.label}</span>
      <span class="threat-badge-note">${b.note}</span>
    </div>`
  ).join('');

  return `
    <div class="adversary-card" data-key="${key}">
      <div class="adversary-card-header">
        <span class="adversary-flag">${meta.flag}</span>
        <div class="adversary-name-block">
          <div class="adversary-name">${data.label}</div>
          <div class="adversary-threat-tag ${meta.threatClass}">${meta.threat}</div>
        </div>
      </div>
      <div class="adversary-badges">${badges}</div>
      <div class="adversary-summary">${meta.summary}</div>
      <div class="adversary-select-indicator">
        <span class="select-dot"></span>SELECT
      </div>
    </div>
  `;
}

function updateGlobe() {
  const highlights = ['US'];
  if (selectedRed) highlights.push(selectedRed);
  setHighlightedCountries(highlights);
  if (selectedRed) {
    const center = getCountryCenter(selectedRed);
    if (center) rotateToCountry(center);
  }
}

function updateNextButton() {
  const btn = el.querySelector('.wizard-next');
  if (btn) btn.disabled = !selectedRed;
}

function handleCardClick(e) {
  const card = e.target.closest('.adversary-card');
  if (!card) return;
  const key = card.dataset.key;
  selectedRed = key;

  el.querySelectorAll('.adversary-card').forEach(c => c.classList.remove('selected'));
  card.classList.add('selected');

  updateGlobe();
  updateNextButton();
}

function handleModeToggle(e) {
  const btn = e.target.closest('.mode-btn');
  if (!btn) return;
  selectedMode = btn.dataset.mode;
  el.querySelectorAll('.mode-btn').forEach(b => b.classList.toggle('active', b.dataset.mode === selectedMode));
}

function handleNext() {
  if (!selectedRed) return;
  transition(STATES.CONFIGURE_BLUE, {
    blueKey: 'US',
    redKey: selectedRed,
    mode: selectedMode,
  });
}

export function renderSelect(container) {
  selectedRed = null;
  selectedMode = 'citizen';

  el = document.createElement('div');
  el.className = 'wizard-screen';

  el.innerHTML = `
    <div class="wizard-left">
      <div class="wizard-step-counter">01 <span class="step-sep">/</span> 03</div>

      <div class="wizard-header">
        <div class="wizard-title">SELECT SCENARIO</div>
        <div class="wizard-subtitle">Choose an adversary threat and analysis mode to begin modeling your Golden Dome architecture.</div>
      </div>

      <div class="wizard-section-label">ANALYSIS MODE</div>
      <div class="mode-toggle">
        <button class="mode-btn active" data-mode="citizen">
          <div class="mode-btn-name">Citizen</div>
          <div class="mode-btn-desc">Guided · Plain language</div>
        </button>
        <button class="mode-btn" data-mode="researcher">
          <div class="mode-btn-name">Researcher</div>
          <div class="mode-btn-desc">Full parameters · CSV export</div>
        </button>
      </div>

      <div class="wizard-section-label">DEFENDER <span class="section-label-fixed">(FIXED)</span></div>
      <div class="defender-display">
        <span class="defender-flag">🇺🇸</span>
        <div class="defender-info">
          <div class="defender-name">United States</div>
          <div class="defender-caption">Golden Dome Multi-Layer Defense</div>
        </div>
        <div class="defender-check">✓</div>
      </div>

      <div class="wizard-section-label">ADVERSARY</div>
      <div class="adversary-cards">
        ${Object.keys(ADVERSARY_META).map(buildAdversaryCard).join('')}
      </div>

      <div class="wizard-source-note">
        Threat data: DIA, May 2025 (via AEI Working Paper 2025-20)
      </div>

      <div class="wizard-nav">
        <div></div>
        <button class="wizard-next" disabled>NEXT →</button>
      </div>
    </div>

    <div class="wizard-right">
      <div class="globe-container-select" id="globe-select"></div>
      <div class="globe-label-overlay">
        <div class="globe-label-primary">STRATEGIC THREAT MAP</div>
        <div class="globe-label-secondary">Select an adversary to highlight launch origins</div>
      </div>
    </div>
  `;

  container.appendChild(el);

  const globeContainer = el.querySelector('#globe-select');
  initGlobe(globeContainer);
  createCountriesLayer(getGlobeGroup());
  createHudOverlay(getScene());
  startAnimation();
  setupInteraction(globeContainer);
  setHighlightedCountries(['US']);

  el.addEventListener('click', (e) => {
    if (e.target.closest('.adversary-card')) handleCardClick(e);
    if (e.target.closest('.mode-btn')) handleModeToggle(e);
    if (e.target.closest('.wizard-next')) handleNext();
  });

  requestAnimationFrame(() => el.classList.add('active'));
}

export function removeSelect() {
  if (el) { el.remove(); el = null; }
}
