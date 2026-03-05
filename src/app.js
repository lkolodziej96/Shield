/**
 * SHIELD — App entry point.
 * Uses state machine to transition: BOOT → SELECT → LOADING → DASHBOARD
 */

import { STATES, transition, onStateChange } from './ui/stateMachine.js';
import { renderBoot } from './ui/screens/boot.js';
import { renderSelect } from './ui/screens/select.js';
import { renderRunLoading, renderResetLoading } from './ui/screens/loading.js';
import { renderDashboard } from './ui/screens/dashboard.js';
import { runMonteCarlo } from './model/monteCarlo.js';

const container = document.getElementById('app');

// Listen for state transitions
onStateChange((newState, prevState, data) => {
  // when leaving dashboard we may need cleanup
  if (prevState === STATES.DASHBOARD && newState !== STATES.DASHBOARD) {
    // make sure any globe resources are released
    import('./ui/screens/dashboard.js').then(mod => {
      if (mod.removeDashboard) mod.removeDashboard();
    });
  }

  container.innerHTML = '';

  switch (newState) {
    case STATES.BOOT:
      renderBoot(container);
      break;
    case STATES.SELECT:
      renderSelect(container);
      break;
    case STATES.LOADING:
      if (data.action === 'run') {
        renderRunLoading(container, data.params?.nTrials ?? 1000, () => {
          const t0 = performance.now();
          const result = runMonteCarlo(data.params);
          const elapsed = ((performance.now() - t0) / 1000).toFixed(2);
          transition(STATES.DASHBOARD, {
            blueKey: data.blueKey,
            redKey: data.redKey,
            runParams: data.params,
            runResult: result,
            runElapsed: elapsed,
          });
        });
      } else if (data.action === 'reset') {
        renderResetLoading(container, () => {
          transition(STATES.SELECT);
        });
      }
      break;
    case STATES.DASHBOARD:
      renderDashboard(container);
      break;
  }
});

// Start the app
transition(STATES.BOOT);
