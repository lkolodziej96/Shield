/**
 * Calculating — Monte Carlo progress screen.
 * Shows scenario label, animated progress bar, and rotating status messages.
 */

let el = null;
let rafId = null;
let timeoutId = null;

const STATUS_MESSAGES = [
  'Initializing constellation geometry…',
  'Mapping orbital coverage windows…',
  'Applying absenteeism model (499:1 ratio)…',
  'Sampling boost-phase engagement opportunities…',
  'Simulating midcourse discrimination…',
  'Evaluating terminal defense layers…',
  'Running countermeasure analysis…',
  'Aggregating intercept outcomes across trials…',
  'Computing confidence intervals…',
  'Finalizing results…',
];

export function renderCalculating(container, scenarioLabel, onComplete) {
  el = document.createElement('div');
  el.className = 'calculating-screen';

  el.innerHTML = `
    <div class="calculating-inner">
      <div class="calculating-title">RUNNING SIMULATION</div>
      <div class="calculating-scenario">${scenarioLabel ?? 'Modeling attack scenario…'}</div>

      <div class="calculating-progress-wrap">
        <div class="calculating-progress-bar">
          <div class="calculating-progress-fill" id="calc-fill"></div>
        </div>
        <div class="calculating-pct" id="calc-pct">0%</div>
      </div>

      <div class="calculating-status" id="calc-status">${STATUS_MESSAGES[0]}</div>

      <div class="calculating-footnote">
        Monte Carlo simulation · 1,000–2,000 trials · AEI/DIA parameters
      </div>
    </div>
  `;

  container.appendChild(el);

  let msgIdx = 0;
  let pct = 0;
  const fill = el.querySelector('#calc-fill');
  const pctEl = el.querySelector('#calc-pct');
  const statusEl = el.querySelector('#calc-status');

  const DURATION_MS = 1800;
  const start = performance.now();

  function tick(now) {
    const elapsed = now - start;
    pct = Math.min(95, (elapsed / DURATION_MS) * 100);
    if (fill) fill.style.width = `${pct}%`;
    if (pctEl) pctEl.textContent = `${Math.round(pct)}%`;

    const newMsgIdx = Math.min(STATUS_MESSAGES.length - 1, Math.floor((elapsed / DURATION_MS) * STATUS_MESSAGES.length));
    if (newMsgIdx !== msgIdx) {
      msgIdx = newMsgIdx;
      if (statusEl) statusEl.textContent = STATUS_MESSAGES[msgIdx];
    }

    if (pct < 95) {
      rafId = requestAnimationFrame(tick);
    }
  }

  rafId = requestAnimationFrame(tick);

  timeoutId = setTimeout(() => {
    cancelAnimationFrame(rafId);
    if (fill) fill.style.width = '100%';
    if (pctEl) pctEl.textContent = '100%';
    if (statusEl) statusEl.textContent = 'Simulation complete.';
    onComplete();
  }, DURATION_MS + 100);

  requestAnimationFrame(() => el.classList.add('active'));
}

export function removeCalculating() {
  if (rafId) cancelAnimationFrame(rafId);
  if (timeoutId) clearTimeout(timeoutId);
  if (el) { el.remove(); el = null; }
}
