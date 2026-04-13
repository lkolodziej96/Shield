/**
 * Results screen — plain-English brief, metrics table, cost comparison tab.
 */

import { STATES, transition, getStateData } from '../stateMachine.js';
import { formatCostB, computeConstellationCost } from '../../utils/costCalc.js';
import { ARCHITECTURE_BENCHMARKS, WHITEHOUSE_CLAIM } from '../../../data/architecture_benchmarks.js';
import { buildDistributionHistogram } from '../charts/distributionChart.js';
import { buildWaterfallChart } from '../charts/waterfallChart.js';
import { buildCostEffectivenessPanel } from '../charts/costEffectiveness.js';
import { buildSensitivityAnalysis } from '../charts/sensitivityChart.js';

let el = null;
let activeTab = 'results';

const FEDERAL_SPENDING_REF = [
  { label: 'NASA (annual)',          billions: 25,    note: 'FY2026 appropriation' },
  { label: 'Interstate Highway System (life)',  billions: 114,  note: 'Total inflation-adjusted' },
  { label: 'Annual DoD budget',      billions: 850,   note: 'FY2026 request' },
  { label: 'Apollo Program (total)', billions: 260,   note: '2024 dollars' },
  { label: 'Annual Medicare',        billions: 1000,  note: 'FY2026 estimate' },
  { label: '4 years of US nat\'l debt growth', billions: 3600, note: 'Approx. at recent pace' },
];

function interceptRate(result) {
  return Math.max(0, Math.min(1, 1 - result.meanPenRateReal));
}

function buildPlainEnglishBrief(result, wizardState) {
  const rate = interceptRate(result);
  const pct = Math.round(rate * 100);
  const penetrated = Math.round(result.meanPenReal);
  const realWarheads = result.realWarheads;

  const tier = wizardState?.constellation?.tier ?? 'small';
  const redKey = wizardState?.redKey ?? 'adversary';
  const salvoSize = wizardState?.salvo?.tier === 'custom'
    ? wizardState.salvo.customCount
    : ({ small: 5, medium: 50, large: 250 }[wizardState?.salvo?.tier] ?? 5);

  const costData = computeConstellationCost(tier, wizardState?.constellation?.customCount ?? null);
  const costStr = formatCostB(costData.total20yr_B);

  let outcome;
  if (pct >= 95) outcome = 'near-complete intercept success';
  else if (pct >= 75) outcome = 'strong defense performance';
  else if (pct >= 50) outcome = 'partial intercept success';
  else if (pct >= 25) outcome = 'limited intercept capability';
  else outcome = 'minimal intercept effect';

  const countryLabels = { DPRK: 'North Korean', China: 'Chinese', Russia: 'Russian' };
  const adversaryAdj = countryLabels[redKey] ?? redKey;

  return `
    <div class="plain-english-brief">
      <div class="brief-headline">
        Your Golden Dome intercepted <span class="brief-highlight">${pct}%</span>
        of a ${salvoSize}-missile ${adversaryAdj} salvo —
        <span class="brief-outcome">${outcome}</span>.
      </div>
      <div class="brief-detail">
        Out of ${realWarheads.toLocaleString()} warheads launched, an average of
        <strong>${penetrated.toLocaleString()}</strong> penetrated defenses across
        ${wizardState?.mode === 'researcher' ? '2,000' : '1,000'} simulated trials.
        This ${tier} constellation costs an estimated
        <strong>${costStr}</strong> over 20 years.
      </div>
      ${result.meanKtDelivered > 0 ? `
        <div class="brief-kt-warning">
          Estimated yield delivered: <strong>${Math.round(result.meanKtDelivered).toLocaleString()} kt</strong>
          (median scenario)
        </div>
      ` : ''}
    </div>
  `;
}

function buildMetricsTable(result) {
  const rate = interceptRate(result);
  const pct = n => `${Math.round(n * 100)}%`;
  const n1 = n => typeof n === 'number' ? Math.round(n).toLocaleString() : '—';

  const rows = [
    { label: 'Total warheads launched',            value: n1(result.realWarheads),                key: true },
    { label: 'Mean intercepted (real warheads)',    value: n1(result.meanIntReal),                 key: true },
    { label: 'Mean penetrating (real warheads)',    value: n1(result.meanPenReal),                 key: true },
    { label: 'Intercept rate',                      value: pct(rate),                              key: true },
    { label: '10th percentile penetrations',        value: n1(result.p10PenReal),                  key: false },
    { label: 'Median penetrations',                 value: n1(result.medianPenReal),               key: false },
    { label: '90th percentile penetrations',        value: n1(result.p90PenReal),                  key: false },
    { label: 'Boost-phase missiles killed',         value: n1(result.meanBoostMissilesKilled),     key: false },
    { label: 'Boost-phase warheads destroyed',      value: n1(result.meanBoostWarheadsDestroyed),  key: false },
    { label: 'Midcourse warheads killed',           value: n1(result.meanMidcourseWarheadsKilled), key: false },
    { label: 'Terminal warheads killed',            value: n1(result.meanTerminalWarheadsKilled),  key: false },
    { label: 'Mean shots fired (total)',            value: n1(result.meanShotsTotal),              key: false },
    { label: 'Shots at decoys',                     value: n1(result.meanShotsDecoys),             key: false },
    { label: 'System availability (mean)',          value: pct(result.meanSystemUp),               key: false },
  ].filter(r => r.value !== '—' && r.value !== 'NaN%' && r.value !== '0');

  return `
    <div class="metrics-table-wrap">
      <table class="metrics-table">
        <thead><tr><th>Metric</th><th>Value</th></tr></thead>
        <tbody>
          ${rows.map(r => `
            <tr class="${r.key ? 'metrics-row-key' : ''}">
              <td>${r.label}</td>
              <td>${r.value}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function buildConfidenceBand(result) {
  const total = result.realWarheads;
  if (!total) return '';
  const p10 = Math.min(100, Math.round((result.p10PenReal / total) * 100));
  const median = Math.min(100, Math.round((result.medianPenReal / total) * 100));
  const p90 = Math.min(100, Math.round((result.p90PenReal / total) * 100));
  const intercept = Math.round(interceptRate(result) * 100);

  return `
    <div class="confidence-band-section">
      <div class="wizard-section-label">OUTCOME CONFIDENCE BAND</div>
      <div class="confidence-band-chart">
        <div class="confidence-band-track">
          <div class="confidence-band-range" style="left:${p10}%;right:${100-p90}%"></div>
          <div class="confidence-band-median" style="left:${median}%"></div>
        </div>
        <div class="confidence-band-labels">
          <span class="cb-label" style="left:0">0%</span>
          <span class="cb-label" style="left:${p10}%">P10</span>
          <span class="cb-label" style="left:${median}%">Median</span>
          <span class="cb-label" style="left:${p90}%">P90</span>
          <span class="cb-label" style="right:0">100%</span>
        </div>
        <div class="confidence-band-caption">Penetration rate across simulated trials (%)</div>
      </div>
      <div class="confidence-band-summary">
        Best case (P10): <strong>${p10}%</strong> penetration ·
        Median: <strong>${median}%</strong> ·
        Worst case (P90): <strong>${p90}%</strong> ·
        Intercept rate: <strong>${intercept}%</strong>
      </div>
    </div>
  `;
}

function buildCostComparison(wizardState) {
  const tier = wizardState?.constellation?.tier ?? 'small';
  const costData = computeConstellationCost(tier, wizardState?.constellation?.customCount ?? null);
  const userCost = costData.total20yr_B;
  const perAmerican = costData.perAmerican;

  const maxRef = Math.max(userCost, ...FEDERAL_SPENDING_REF.map(r => r.billions), WHITEHOUSE_CLAIM.total_B);

  function bar(billions, colorClass) {
    return `<div class="cost-compare-bar-fill ${colorClass}" style="width:${Math.min(100, (billions / maxRef) * 100).toFixed(1)}%"></div>`;
  }

  const refRows = FEDERAL_SPENDING_REF.map(r => `
    <div class="cost-compare-row">
      <div class="cost-compare-name">${r.label}</div>
      <div class="cost-compare-bar">${bar(r.billions, 'bar-neutral')}</div>
      <div class="cost-compare-val">${formatCostB(r.billions)}</div>
    </div>
  `).join('');

  const archRows = ARCHITECTURE_BENCHMARKS.map(a => {
    const isUser = a.sbiBoostTier === tier || (tier === 'large' && a.sbiBoostTier === 'robust');
    return `
      <div class="cost-compare-row ${isUser ? 'cost-compare-user' : ''}">
        <div class="cost-compare-name">${a.label}${isUser ? ' ← Your scenario' : ''}</div>
        <div class="cost-compare-bar">${bar(a.total20yr_B, isUser ? 'bar-user' : 'bar-aei')}</div>
        <div class="cost-compare-val">${formatCostB(a.total20yr_B)}</div>
      </div>
    `;
  }).join('');

  return `
    <div class="cost-comparison-panel">
      <div class="cost-hero">
        <div class="cost-hero-label">YOUR 20-YEAR PROGRAM COST</div>
        <div class="cost-hero-value">${formatCostB(userCost)}</div>
        <div class="cost-hero-sub">${perAmerican.toLocaleString()} per American taxpayer</div>
      </div>

      <div class="wizard-section-label">COMPARED TO FEDERAL SPENDING</div>
      <div class="cost-compare-chart">${refRows}</div>

      <div class="wizard-section-label">AEI ARCHITECTURE COMPARISON</div>
      <div class="cost-compare-legend">
        <span class="legend-dot bar-user"></span> Your scenario &nbsp;
        <span class="legend-dot bar-aei"></span> AEI architecture &nbsp;
        <span class="legend-dot bar-neutral"></span> Reference spending
      </div>
      <div class="cost-compare-chart">${archRows}</div>

      <div class="whitehouse-callout">
        <div class="wh-label">WHITE HOUSE ESTIMATE: ${formatCostB(WHITEHOUSE_CLAIM.total_B)}</div>
        <div class="wh-caveat">${WHITEHOUSE_CLAIM.caveat}</div>
      </div>

      <div class="cost-source">Source: AEI Working Paper 2025-20 (Harrison, Sept 2025); White House FY2026 budget request</div>
    </div>
  `;
}

function buildConfigSummary(wizardState) {
  const redLabels = { DPRK: 'North Korea', China: 'China', Russia: 'Russia' };
  const salvoSizes = { small: '5', medium: '50', large: '250' };
  const tierNames  = { small: 'Small (4,990 SBIs)', medium: 'Medium (49,900 SBIs)', large: 'Large (249,500 SBIs)' };

  const tier = wizardState?.constellation?.tier ?? 'small';
  const salvo = wizardState?.salvo?.tier ?? 'small';
  const mode = wizardState?.mode ?? 'citizen';

  return `
    <div class="config-summary">
      <div class="config-item"><span class="config-key">Defender</span><span class="config-val">United States (Golden Dome)</span></div>
      <div class="config-item"><span class="config-key">Adversary</span><span class="config-val">${redLabels[wizardState?.redKey] ?? '—'}</span></div>
      <div class="config-item"><span class="config-key">Constellation</span><span class="config-val">${tierNames[tier] ?? tier}</span></div>
      <div class="config-item"><span class="config-key">Salvo size</span><span class="config-val">${salvoSizes[salvo] ?? '—'} missiles</span></div>
      <div class="config-item"><span class="config-key">Mode</span><span class="config-val">${mode === 'researcher' ? 'Researcher' : 'Citizen'}</span></div>
    </div>
  `;
}

function buildCsvExport(result, wizardState) {
  if (wizardState?.mode !== 'researcher') return '';
  return `<button class="csv-export-btn" id="btn-csv">↓ Export CSV</button>`;
}

function downloadCsv(result, wizardState) {
  const rows = [
    ['Metric', 'Value'],
    ['Adversary', wizardState?.redKey],
    ['Constellation tier', wizardState?.constellation?.tier],
    ['Salvo tier', wizardState?.salvo?.tier],
    ['Real warheads', result.realWarheads],
    ['Mean intercepted', result.meanIntReal?.toFixed(2)],
    ['Mean penetrated', result.meanPenReal?.toFixed(2)],
    ['Intercept rate', (interceptRate(result) * 100).toFixed(1) + '%'],
    ['P10 penetrations', result.p10PenReal],
    ['Median penetrations', result.medianPenReal],
    ['P90 penetrations', result.p90PenReal],
    ['Mean boost kills (missiles)', result.meanBoostMissilesKilled?.toFixed(2)],
    ['Mean midcourse kills', result.meanMidcourseWarheadsKilled?.toFixed(2)],
    ['Mean terminal kills', result.meanTerminalWarheadsKilled?.toFixed(2)],
    ['System availability', (result.meanSystemUp * 100).toFixed(1) + '%'],
    ['Mean kt delivered', result.meanKtDelivered?.toFixed(0)],
  ];

  const csv = rows.map(r => r.join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `shield-simulation-${Date.now()}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

function switchTab(tab) {
  activeTab = tab;
  el.querySelectorAll('.wizard-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
  el.querySelectorAll('.results-tab-panel').forEach(p => {
    p.style.display = p.id === `tab-${tab}` ? '' : 'none';
  });
}

export function renderResults(container) {
  const state = getStateData();
  const result = state.result;
  const rawTrials = state.rawTrials;
  const wizardState = state.wizardState;
  const params = state.params;

  el = document.createElement('div');
  el.className = 'results-screen';
  activeTab = 'results';

  if (!result) {
    el.innerHTML = `<div class="results-error">No simulation result available.</div>`;
    container.appendChild(el);
    return;
  }

  el.innerHTML = `
    <div class="results-header">
      <div class="results-title">SIMULATION RESULTS</div>
      <div class="results-tabs">
        <button class="wizard-tab active" data-tab="results">Results</button>
        <button class="wizard-tab" data-tab="analysis">Analysis</button>
        <button class="wizard-tab" data-tab="cost">Cost Comparison</button>
      </div>
      ${buildCsvExport(result, wizardState)}
    </div>

    <div class="results-body">
      <div id="tab-results" class="results-tab-panel">
        ${buildPlainEnglishBrief(result, wizardState)}
        ${buildConfidenceBand(result)}
        ${buildMetricsTable(result)}
        ${buildConfigSummary(wizardState)}
      </div>
      <div id="tab-analysis" class="results-tab-panel" style="display:none">
        ${buildWaterfallChart(result)}
        ${buildDistributionHistogram(rawTrials, result)}
        ${buildCostEffectivenessPanel(result, wizardState)}
        <div id="sensitivity-placeholder" class="sensitivity-loading">
          <div class="wizard-section-label">SENSITIVITY ANALYSIS</div>
          <div class="analysis-subtitle">Computing parameter sweeps...</div>
        </div>
      </div>
      <div id="tab-cost" class="results-tab-panel" style="display:none">
        ${buildCostComparison(wizardState)}
      </div>
    </div>

    <div class="results-nav">
      <button class="wizard-back">← START OVER</button>
      <div class="results-source">
        Simulation: Monte Carlo · Parameters: AEI/DIA 2025 · Model: SHIELD v1
      </div>
    </div>
  `;

  container.appendChild(el);

  let sensitivityLoaded = false;

  el.addEventListener('click', (e) => {
    const tab = e.target.closest('.wizard-tab');
    if (tab) {
      switchTab(tab.dataset.tab);
      if (tab.dataset.tab === 'analysis' && !sensitivityLoaded && params) {
        sensitivityLoaded = true;
        setTimeout(() => {
          const placeholder = el.querySelector('#sensitivity-placeholder');
          if (placeholder) {
            placeholder.outerHTML = buildSensitivityAnalysis(params);
          }
        }, 50);
      }
      return;
    }

    if (e.target.closest('.wizard-back')) {
      transition(STATES.SELECT, {});
      return;
    }

    if (e.target.closest('#btn-csv')) {
      downloadCsv(result, wizardState);
      return;
    }
  });

  requestAnimationFrame(() => el.classList.add('active'));
}

export function removeResults() {
  if (el) { el.remove(); el = null; }
}
