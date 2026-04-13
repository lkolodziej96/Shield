export function buildWaterfallChart(result) {
  const total = result.realWarheads || 0;
  if (!total) return '';

  const boostKills = result.meanBoostWarheadsDestroyed || 0;
  const midKills = result.meanMidcourseWarheadsKilled || 0;
  const termKills = result.meanTerminalWarheadsKilled || 0;
  const penetrated = result.meanPenReal || 0;

  const phases = [
    { label: 'Launched', value: total, color: '#e8eaed', type: 'total' },
    { label: 'Boost Intercepts', value: -boostKills, color: '#2196f3', type: 'kill' },
    { label: 'Midcourse Intercepts', value: -midKills, color: '#00bcd4', type: 'kill' },
    { label: 'Terminal Intercepts', value: -termKills, color: '#4caf50', type: 'kill' },
    { label: 'Penetrating', value: penetrated, color: '#ef5350', type: 'total' },
  ];

  const maxVal = total;
  if (maxVal === 0) return '';

  let running = 0;
  const segments = phases.map(p => {
    let left, width;
    if (p.type === 'total') {
      left = 0;
      width = (p.value / maxVal) * 100;
      running = p.value;
    } else {
      const absVal = Math.abs(p.value);
      running -= absVal;
      left = (Math.max(0, running) / maxVal) * 100;
      width = (absVal / maxVal) * 100;
    }
    return { ...p, left, width, displayValue: Math.abs(Math.round(p.value)) };
  });

  const rows = segments.map(s => `
    <div class="waterfall-row">
      <div class="waterfall-label">${s.label}</div>
      <div class="waterfall-bar-track">
        <div class="waterfall-bar-segment" style="left:${s.left.toFixed(1)}%;width:${Math.max(0.5, s.width).toFixed(1)}%;background:${s.color}">
          ${s.width > 8 ? s.displayValue.toLocaleString() : ''}
        </div>
        ${s.width <= 8 ? `<span class="waterfall-bar-label-outside" style="left:${(s.left + s.width + 1).toFixed(1)}%">${s.displayValue.toLocaleString()}</span>` : ''}
      </div>
    </div>
  `).join('');

  const totalIntercepted = Math.round(boostKills + midKills + termKills);
  const boostPct = total > 0 ? Math.round((boostKills / total) * 100) : 0;
  const midPct = total > 0 ? Math.round((midKills / total) * 100) : 0;
  const termPct = total > 0 ? Math.round((termKills / total) * 100) : 0;

  return `
    <div class="analysis-section">
      <div class="wizard-section-label">DEFENSE LAYER BREAKDOWN</div>
      <div class="analysis-subtitle">Mean warhead attrition by phase</div>
      <div class="waterfall-chart">${rows}</div>
      <div class="waterfall-summary">
        <span class="wf-stat"><span class="wf-dot" style="background:#2196f3"></span>Boost: ${boostPct}%</span>
        <span class="wf-stat"><span class="wf-dot" style="background:#00bcd4"></span>Midcourse: ${midPct}%</span>
        <span class="wf-stat"><span class="wf-dot" style="background:#4caf50"></span>Terminal: ${termPct}%</span>
        <span class="wf-stat"><span class="wf-dot" style="background:#ef5350"></span>Penetrating: ${Math.round((penetrated / total) * 100)}%</span>
      </div>
      <div class="analysis-note">
        Total intercepted (mean): <strong>${totalIntercepted.toLocaleString()}</strong> of ${total.toLocaleString()} warheads
      </div>
    </div>
  `;
}
