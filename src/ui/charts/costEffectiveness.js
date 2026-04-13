import { computeConstellationCost, formatCostB } from '../../utils/costCalc.js';

export function buildCostEffectivenessPanel(result, wizardState) {
  const tier = wizardState?.constellation?.tier ?? 'small';
  const costData = computeConstellationCost(tier, wizardState?.constellation?.customCount ?? null);
  const costB = costData.total20yr_B;
  const costM = costB * 1000;

  const intercepted = result.meanIntReal || 0;
  const penetrated = result.meanPenReal || 0;
  const total = result.realWarheads || 0;
  const shotsTotal = result.meanShotsTotal || 0;

  const costPerIntercepted = intercepted > 0 ? costM / intercepted : 0;
  const costPerPrevented = intercepted > 0 ? costB / intercepted : 0;
  const shotsPerKill = intercepted > 0 ? shotsTotal / intercepted : 0;

  const ktDelivered = result.meanKtDelivered || 0;
  const ktPrevented = total > 0 && intercepted > 0
    ? (ktDelivered / (penetrated || 1)) * intercepted
    : 0;
  const costPerKtPrevented = ktPrevented > 0 ? (costB * 1e9) / ktPrevented : 0;

  const metrics = [
    {
      label: 'Cost per warhead intercepted',
      value: intercepted > 0 ? `${formatCostB(costPerPrevented)}` : 'N/A',
      note: intercepted > 0 ? `${formatCostB(costB)} / ${Math.round(intercepted)} warheads` : 'No interceptions',
    },
    {
      label: 'Interceptors fired per kill',
      value: intercepted > 0 ? shotsPerKill.toFixed(1) : 'N/A',
      note: intercepted > 0 ? `${Math.round(shotsTotal).toLocaleString()} shots / ${Math.round(intercepted)} kills` : '',
    },
    {
      label: 'Inventory utilization',
      value: `${Math.round((result.meanInventoryRemaining / (shotsTotal + (result.meanInventoryRemaining || 0))) * 100) || 0}% remaining`,
      note: `${Math.round(result.meanInventoryRemaining || 0).toLocaleString()} interceptors unused`,
    },
  ];

  if (ktPrevented > 0) {
    metrics.push({
      label: 'Cost per kiloton prevented',
      value: costPerKtPrevented > 1e9 ? `$${(costPerKtPrevented / 1e9).toFixed(1)}B/kt` : `$${Math.round(costPerKtPrevented / 1e6).toLocaleString()}M/kt`,
      note: `${Math.round(ktPrevented).toLocaleString()} kt prevented`,
    });
  }

  const rows = metrics.map(m => `
    <div class="ce-metric">
      <div class="ce-metric-label">${m.label}</div>
      <div class="ce-metric-value">${m.value}</div>
      <div class="ce-metric-note">${m.note}</div>
    </div>
  `).join('');

  return `
    <div class="analysis-section">
      <div class="wizard-section-label">COST EFFECTIVENESS</div>
      <div class="ce-metrics-grid">${rows}</div>
    </div>
  `;
}
