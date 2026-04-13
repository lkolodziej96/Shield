/**
 * Cost calculator for real-time ticker and results display.
 * Uses AEI Working Paper 2025-20 data as primary source.
 */

const US_POPULATION = 335_000_000;

const TIER_COSTS = {
  small:  { constellation: 4_990,   onStation: 10,  total20yr_B: 271,   label: 'Small',  salvoCapacity: 5   },
  medium: { constellation: 49_900,  onStation: 100, total20yr_B: 1_650, label: 'Medium', salvoCapacity: 50  },
  large:  { constellation: 249_500, onStation: 500, total20yr_B: 6_049, label: 'Large',  salvoCapacity: 250 },
};

const LEARNING_CURVE_EXPONENT = Math.log(0.85) / Math.log(2);
const BASE_UNIT_COST_M = 13.4;
const BASE_CONSTELLATION = 4_990;
const REPLENISHMENT_CYCLES = 3;
const OS_COST_B = 9;
const ABSENTEEISM_RATIO = 499;

export function computeConstellationCost(tier, customCount = null) {
  if (tier !== 'custom') {
    const t = TIER_COSTS[tier];
    return {
      tier,
      constellation: t.constellation,
      onStation: t.onStation,
      total20yr_B: t.total20yr_B,
      perAmerican: Math.round((t.total20yr_B * 1e9) / US_POPULATION),
      salvoCapacity: t.salvoCapacity,
    };
  }

  const n = Math.max(1, customCount);
  const unitCost_M = BASE_UNIT_COST_M * Math.pow(n / BASE_CONSTELLATION, LEARNING_CURVE_EXPONENT);
  const initial_B = (unitCost_M * n) / 1000;
  const replenish_B = initial_B * REPLENISHMENT_CYCLES;
  const total20yr_B = Math.round((initial_B + replenish_B + OS_COST_B) * 10) / 10;
  const onStation = Math.max(1, Math.round(n / ABSENTEEISM_RATIO));
  const salvoCapacity = Math.max(1, Math.round(onStation / 2));

  return {
    tier: 'custom',
    constellation: n,
    onStation,
    total20yr_B,
    perAmerican: Math.round((total20yr_B * 1e9) / US_POPULATION),
    salvoCapacity,
  };
}

export function formatCostB(billions) {
  if (billions >= 1000) return `$${(billions / 1000).toFixed(2)}T`;
  return `$${Math.round(billions)}B`;
}

export function formatPerAmerican(dollars) {
  return `$${dollars.toLocaleString()}`;
}

export function getTierMeta(tier) {
  if (tier === 'custom') return null;
  return TIER_COSTS[tier];
}

export { TIER_COSTS, US_POPULATION };
