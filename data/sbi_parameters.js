/**
 * Space-Based Interceptor (SBI) constellation parameters and the
 * "absenteeism problem" — the core physical constraint driving why
 * hundreds of interceptors visible to Congress translates to very few
 * actually covering any given launch point at any given moment.
 *
 * Source: AEI Foreign & Defense Policy Working Paper 2025-20, September 2025
 *         "Build Your Own Golden Dome" by Todd Harrison — Appendix B
 *
 * All costs in FY2026 dollars.
 */

/**
 * The Absenteeism Problem
 *
 * Because interceptors orbit continuously, only a fraction are
 * positioned over any adversary launch area at any given time.
 * For a 300 km LEO orbit:
 *   - 10 interceptors must be within range to intercept a single
 *     5-missile salvo (2 shots per missile)
 *   - To keep 10 in range at all times requires ~4,990 in the
 *     constellation → absenteeism ratio ≈ 499:1
 *
 * This ratio scales linearly with salvo size:
 *   - 50-missile salvo → ~49,900 total SBIs
 *   - 250-missile salvo → ~249,500 total SBIs
 */
export const ABSENTEEISM = {
  shotsPerMissile:             2,
  interceptorsRequiredPerSalvo: {
    5:   10,
    50:  100,
    250: 500,
  },
  constellationMultiplier:     499,
  description: "Ratio of total SBIs in constellation to interceptors available over any launch point at a given moment. Driven by orbital geometry at 300 km altitude.",
  source: "AEI Working Paper 2025-20, Appendix B",
};

/**
 * Physical parameters for each SBI type.
 * Governs engagement feasibility, altitude coverage, and orbital lifespan.
 */
export const SBI_PHYSICAL_PARAMS = {
  boost: {
    label:              "Boost-Phase SBI",
    orbitalAltitudeKm:  300,
    flyoutTimeSec:      120,
    deltaV_kms:         6,
    acceleration_g:     15,
    massKg:             1900,
    lifeYears:          5,
    note: "Short flyout window; must intercept while ICBM engine is still burning (~150–300 sec). Atmospheric drag at 300 km requires replacement every 5 years.",
  },
  glide: {
    label:              "Glide-Phase SBI",
    orbitalAltitudeKm:  300,
    flyoutTimeSec:      600,
    deltaV_kms:         4,
    acceleration_g:     15,
    massKg:             3600,
    lifeYears:          5,
    note: "Targets hypersonic glide vehicles after boost burnout. Heavier heat shield increases mass by ~90% vs boost-phase SBI. Same 5-yr orbital lifespan.",
  },
  midcourse: {
    label:              "Midcourse-Phase SBI",
    orbitalAltitudeKm:  1500,
    flyoutTimeSec:      900,
    deltaV_kms:         6,
    acceleration_g:     15,
    massKg:             1900,
    lifeYears:          10,
    note: "Higher altitude reduces atmospheric drag; 10-year orbital life. Longer engagement window but must discriminate between warheads and decoys in space.",
  },
};

/**
 * Constellation sizing by interceptor type and salvo capacity tier.
 * Each tier defines:
 *   - constellationSize: total SBIs in orbit
 *   - onStationCount: interceptors over a given launch point at any time
 *   - salvoCapacity: maximum simultaneous missiles that can be engaged
 */
export const CONSTELLATION_TIERS = {
  boost: {
    basic: {
      constellationSize: 4990,
      onStationCount:    10,
      salvoCapacity:     5,
      label:             "Basic Boost (5-missile salvo)",
    },
    moderate: {
      constellationSize: 49900,
      onStationCount:    100,
      salvoCapacity:     50,
      label:             "Moderate Boost (50-missile salvo)",
    },
    robust: {
      constellationSize: 249500,
      onStationCount:    500,
      salvoCapacity:     250,
      label:             "Robust Boost (250-missile salvo)",
    },
  },
  glide: {
    basic: {
      constellationSize: 310,
      onStationCount:    10,
      salvoCapacity:     5,
      label:             "Basic Glide (5-missile salvo)",
    },
    moderate: {
      constellationSize: 3100,
      onStationCount:    100,
      salvoCapacity:     50,
      label:             "Moderate Glide (50-missile salvo)",
    },
    robust: {
      constellationSize: 15500,
      onStationCount:    500,
      salvoCapacity:     250,
      label:             "Robust Glide (250-missile salvo)",
    },
  },
  midcourse: {
    basic: {
      constellationSize: 2000,
      onStationCount:    10,
      salvoCapacity:     5,
      label:             "Basic Midcourse (5-missile salvo)",
    },
    moderate: {
      constellationSize: 20000,
      onStationCount:    100,
      salvoCapacity:     50,
      label:             "Moderate Midcourse (50-missile salvo)",
    },
    robust: {
      constellationSize: 100000,
      onStationCount:    500,
      salvoCapacity:     250,
      label:             "Robust Midcourse (250-missile salvo)",
    },
  },
};

/**
 * Replenishment cost structure.
 * LEO orbits at 300 km experience significant atmospheric drag,
 * requiring full constellation replacement every ~5 years.
 * MEO at 1,500 km has far less drag; replacement every ~10 years.
 *
 * Over a 20-year program:
 *   - 300 km orbit → 3 replenishment cycles (initial + 3 replacements)
 *   - 1,500 km orbit → 1 replenishment cycle (initial + 1 replacement)
 *
 * This makes replenishment costs 2–3× the initial procurement cost
 * for boost and glide SBIs — the dominant 20-year cost driver.
 */
export const REPLENISHMENT_STRUCTURE = {
  leo_300km: {
    cyclesOver20yr:   3,
    reason: "Atmospheric drag at 300 km requires constellation replacement approximately every 5 years.",
  },
  meo_1500km: {
    cyclesOver20yr:   1,
    reason: "Reduced drag at 1,500 km extends satellite lifespan to approximately 10 years.",
  },
};
