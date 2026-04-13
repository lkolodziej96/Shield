/**
 * UI State Machine
 * Wizard flow: BOOT → SELECT → CONFIGURE_BLUE → CONFIGURE_RED → CALCULATING → RESULTS
 */

const STATES = {
  BOOT:           'boot',
  SELECT:         'select',
  CONFIGURE_BLUE: 'configure_blue',
  CONFIGURE_RED:  'configure_red',
  CALCULATING:    'calculating',
  RESULTS:        'results',
};

let currentState = null;
let stateData = {};
const listeners = [];

export function getState() { return currentState; }
export function getStateData() { return stateData; }

export function onStateChange(fn) { listeners.push(fn); }

export function transition(newState, data = {}) {
  const prev = currentState;
  currentState = newState;
  stateData = { ...stateData, ...data };
  for (const fn of listeners) fn(newState, prev, stateData);
}

export { STATES };
