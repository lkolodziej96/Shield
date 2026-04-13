/**
 * SHIELD — App entry point.
 * Wizard flow: BOOT → SELECT → CONFIGURE_BLUE → CONFIGURE_RED → CALCULATING → RESULTS
 */

import { STATES, transition, onStateChange } from './ui/stateMachine.js';
import { renderBoot } from './ui/screens/boot.js';
import { renderSelect } from './ui/screens/select.js';
import { renderConfigureBlue } from './ui/screens/configureBlue.js';
import { renderConfigureRed } from './ui/screens/configureRed.js';
import { renderCalculating } from './ui/screens/calculating.js';
import { renderResults } from './ui/screens/resultsScreen.js';
import { runMonteCarlo } from './model/monteCarlo.js';
import { disposeGlobe } from './ui/globe/globeCore.js';

const container = document.getElementById('app');

onStateChange((newState, prevState, data) => {
  disposeGlobe();
  container.innerHTML = '';

  switch (newState) {
    case STATES.BOOT:
      renderBoot(container);
      break;

    case STATES.SELECT:
      renderSelect(container);
      break;

    case STATES.CONFIGURE_BLUE:
      renderConfigureBlue(container);
      break;

    case STATES.CONFIGURE_RED:
      renderConfigureRed(container);
      break;

    case STATES.CALCULATING: {
      const label = `Modeling ${data.salvoLabel ?? 'attack scenario'} vs. ${data.defenseLabel ?? 'US defense'}`;
      renderCalculating(container, label, () => {
        const t0 = performance.now();
        const mc = runMonteCarlo(data.params);
        const elapsed = ((performance.now() - t0) / 1000).toFixed(2);
        transition(STATES.RESULTS, {
          result: mc.summary,
          rawTrials: mc,
          elapsed,
        });
      });
      break;
    }

    case STATES.RESULTS:
      renderResults(container);
      break;
  }
});

transition(STATES.BOOT);
