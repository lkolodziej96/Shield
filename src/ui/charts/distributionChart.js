export function buildDistributionHistogram(rawTrials, result) {
  if (!rawTrials?.penReal || rawTrials.penReal.length === 0) return '';

  const data = rawTrials.penReal;
  const total = result.realWarheads || 1;
  const rates = data.map(v => Math.min(100, Math.round((v / total) * 100)));

  const bucketCount = 20;
  const buckets = new Array(bucketCount).fill(0);
  for (const r of rates) {
    const idx = Math.min(bucketCount - 1, Math.floor(r / (100 / bucketCount)));
    buckets[idx]++;
  }

  const maxBucket = Math.max(...buckets, 1);
  const barWidth = 100 / bucketCount;

  const bars = buckets.map((count, i) => {
    const height = Math.max(1, (count / maxBucket) * 100);
    const pctStart = Math.round(i * (100 / bucketCount));
    const pctEnd = Math.round((i + 1) * (100 / bucketCount));
    return `<div class="hist-bar-wrap" style="width:${barWidth}%">
      <div class="hist-bar" style="height:${height}%" title="${pctStart}-${pctEnd}%: ${count} trials"></div>
    </div>`;
  }).join('');

  const meanRate = Math.round((1 - result.meanPenRateReal) * 100);
  const meanPenRate = Math.round(result.meanPenRateReal * 100);

  return `
    <div class="analysis-section">
      <div class="wizard-section-label">OUTCOME DISTRIBUTION</div>
      <div class="analysis-subtitle">${data.length.toLocaleString()} trials — penetrating warheads as % of total</div>
      <div class="histogram-chart">
        <div class="histogram-bars">${bars}</div>
        <div class="histogram-axis">
          <span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
        </div>
        <div class="histogram-axis-label">Penetration rate</div>
      </div>
      <div class="analysis-note">
        Mean intercept rate: <strong>${meanRate}%</strong> —
        Mean penetration rate: <strong>${meanPenRate}%</strong>
      </div>
    </div>
  `;
}
