import { runMonteCarlo } from '../../model/monteCarlo.js';

export function buildSensitivityAnalysis(baseParams) {
  if (!baseParams) return '';

  const parameters = [
    { key: 'pDetectTrack', label: 'Detection Probability', values: [0.5, 0.6, 0.7, 0.8, 0.9, 0.95] },
    { key: 'pClassifyWarhead', label: 'Classification Accuracy', values: [0.4, 0.55, 0.7, 0.8, 0.9, 0.95] },
    { key: 'pSystemUp', label: 'System Availability', values: [0.6, 0.7, 0.8, 0.9, 0.95, 0.99] },
  ];

  const quickParams = { ...baseParams, nTrials: 200 };
  const results = [];

  for (const param of parameters) {
    const series = [];
    for (const val of param.values) {
      const tweaked = { ...quickParams, [param.key]: val };
      try {
        const mc = runMonteCarlo(tweaked);
        const interceptRate = Math.round((1 - mc.summary.meanPenRateReal) * 100);
        series.push({ x: val, y: interceptRate });
      } catch {
        series.push({ x: val, y: 0 });
      }
    }
    results.push({ ...param, series });
  }

  const charts = results.map(r => {
    const maxY = 100;
    const points = r.series.map((pt, i) => {
      const x = (i / (r.series.length - 1)) * 100;
      const y = 100 - (pt.y / maxY) * 100;
      return `${x},${y}`;
    }).join(' ');

    const dots = r.series.map((pt, i) => {
      const x = (i / (r.series.length - 1)) * 100;
      const y = 100 - (pt.y / maxY) * 100;
      return `<circle cx="${x}" cy="${y}" r="2.5" fill="#00bcd4"/>`;
    }).join('');

    const labels = r.series.map((pt, i) => {
      const x = (i / (r.series.length - 1)) * 100;
      return `<text x="${x}" y="112" text-anchor="middle" fill="#8899aa" font-size="7">${Math.round(pt.x * 100)}%</text>`;
    }).join('');

    const valLabels = r.series.map((pt, i) => {
      const x = (i / (r.series.length - 1)) * 100;
      const y = 100 - (pt.y / maxY) * 100;
      return `<text x="${x}" y="${Math.max(8, y - 6)}" text-anchor="middle" fill="#c8d0d8" font-size="6.5">${pt.y}%</text>`;
    }).join('');

    return `
      <div class="sensitivity-chart-item">
        <div class="sensitivity-chart-title">${r.label}</div>
        <svg viewBox="-5 -5 110 125" class="sensitivity-svg" preserveAspectRatio="none">
          <line x1="0" y1="100" x2="100" y2="100" stroke="#2a3040" stroke-width="0.5"/>
          <line x1="0" y1="50" x2="100" y2="50" stroke="#1a2030" stroke-width="0.3" stroke-dasharray="2,2"/>
          <line x1="0" y1="0" x2="100" y2="0" stroke="#1a2030" stroke-width="0.3" stroke-dasharray="2,2"/>
          <text x="-3" y="103" fill="#667" font-size="6" text-anchor="end">0%</text>
          <text x="-3" y="53" fill="#667" font-size="6" text-anchor="end">50%</text>
          <text x="-3" y="3" fill="#667" font-size="6" text-anchor="end">100%</text>
          <polyline points="${points}" fill="none" stroke="#00bcd4" stroke-width="1.5" stroke-linejoin="round"/>
          ${dots}
          ${labels}
          ${valLabels}
        </svg>
      </div>
    `;
  }).join('');

  return `
    <div class="analysis-section">
      <div class="wizard-section-label">SENSITIVITY ANALYSIS</div>
      <div class="analysis-subtitle">Intercept rate vs. key parameters (200-trial quick sweep)</div>
      <div class="sensitivity-grid">${charts}</div>
      <div class="analysis-note">Each point is an independent 200-trial Monte Carlo run with one parameter varied.</div>
    </div>
  `;
}
