/**
 * Cost assumptions per interceptor type and system component.
 *
 * Sources:
 *   - AEI Foreign & Defense Policy Working Paper 2025-20, September 2025
 *     "Build Your Own Golden Dome: A Framework for Understanding Costs,
 *      Choices, and Tradeoffs" by Todd Harrison
 *   - All figures in FY2026 dollars.
 *
 * SBI unit costs derived from constellation-level cost totals in Table 3
 * and Appendix B. Learning curve applied at 85% per AEI methodology.
 * Replenishment driven by orbital drag (300 km → 5-yr life, 1,500 km → 10-yr life).
 */

export const COST_CURVES = {

  sbi_boost: {
    label: "Space-Based Interceptor (Boost Phase)",
    source: "AEI Working Paper 2025-20, Table 3 & Appendix B",
    orbitalAltitudeKm: 300,
    lifeYears: 5,
    replenishmentCycles_20yr: 3,
    learningCurveRate: 0.85,
    absenteeismRatio: 499,
    tiers: {
      basic: {
        constellation:    4990,
        initialCost_B:    67,
        replenishCost_B:  195,
        osCost_B:         9,
        total20yr_B:      271,
        unitCost_M:       13.4,
        salvoCapacity:    5,
      },
      moderate: {
        constellation:    49900,
        initialCost_B:    421,
        replenishCost_B:  1220,
        osCost_B:         9,
        total20yr_B:      1650,
        unitCost_M:       8.4,
        salvoCapacity:    50,
      },
      robust: {
        constellation:    249500,
        initialCost_B:    1560,
        replenishCost_B:  4480,
        osCost_B:         9,
        total20yr_B:      6049,
        unitCost_M:       6.25,
        salvoCapacity:    250,
      },
    },
    physicalParams: {
      flyoutTimeSec:    120,
      deltaV_kms:       6,
      acceleration_g:   15,
      massKg:           1900,
    },
  },

  sbi_glide: {
    label: "Space-Based Interceptor (Glide Phase)",
    source: "AEI Working Paper 2025-20, Table 3 & Appendix B",
    orbitalAltitudeKm: 300,
    lifeYears: 5,
    replenishmentCycles_20yr: 3,
    learningCurveRate: 0.85,
    note: "Larger mass due to heat shield; intercepts hypersonic glide vehicles in late boost/early glide",
    tiers: {
      basic: {
        constellation:    310,
        initialCost_B:    12,
        replenishCost_B:  34,
        osCost_B:         9,
        total20yr_B:      55,
        unitCost_M:       38.7,
        salvoCapacity:    5,
      },
      moderate: {
        constellation:    3100,
        initialCost_B:    72,
        replenishCost_B:  209,
        osCost_B:         9,
        total20yr_B:      290,
        unitCost_M:       23.2,
        salvoCapacity:    50,
      },
      robust: {
        constellation:    15500,
        initialCost_B:    262,
        replenishCost_B:  758,
        osCost_B:         9,
        total20yr_B:      1029,
        unitCost_M:       16.9,
        salvoCapacity:    250,
      },
    },
    physicalParams: {
      flyoutTimeSec:    600,
      deltaV_kms:       4,
      acceleration_g:   15,
      massKg:           3600,
    },
  },

  sbi_midcourse: {
    label: "Space-Based Interceptor (Midcourse Phase)",
    source: "AEI Working Paper 2025-20, Table 3 & Appendix B",
    orbitalAltitudeKm: 1500,
    lifeYears: 10,
    replenishmentCycles_20yr: 1,
    learningCurveRate: 0.85,
    note: "Higher orbit extends lifespan to 10 yr; replenishment cost equals initial procurement cost",
    tiers: {
      basic: {
        constellation:    2000,
        initialCost_B:    32,
        replenishCost_B:  32,
        osCost_B:         9,
        total20yr_B:      73,
        unitCost_M:       16.0,
        salvoCapacity:    5,
      },
      moderate: {
        constellation:    20000,
        initialCost_B:    202,
        replenishCost_B:  202,
        osCost_B:         9,
        total20yr_B:      413,
        unitCost_M:       10.1,
        salvoCapacity:    50,
      },
      robust: {
        constellation:    100000,
        initialCost_B:    740,
        replenishCost_B:  740,
        osCost_B:         9,
        total20yr_B:      1489,
        unitCost_M:       7.4,
        salvoCapacity:    250,
      },
    },
    physicalParams: {
      flyoutTimeSec:    900,
      deltaV_kms:       6,
      acceleration_g:   15,
      massKg:           1900,
    },
  },

  midcourse_gbi: {
    label: "Ground-Based Interceptor (GMD)",
    source: "AEI Working Paper 2025-20, Table 2",
    unitCost_M:         109,
    siteConstructionCost_B: 3.1,
    missileProcurement_B:   4.8,
    annualOsCost_M:     270,
    deployedCount:      44,
    note: "44 operational GBIs at Fort Greely AK and Vandenberg SFB CA. $109M per missile derived from $4.8B / 44 units.",
  },

  aegis_sm3: {
    label: "Aegis Ashore / SM-3 Block IIA",
    source: "AEI Working Paper 2025-20, Table 2",
    siteCost_B:         3.24,
    annualOsCost_M:     55,
    unitCost_M:         25.4,
    note: "SM-3 Block IIA interceptor. Site construction costs are per Aegis Ashore installation.",
  },

  thaad: {
    label: "THAAD Battery",
    source: "AEI Working Paper 2025-20, Table 2",
    batteryCost_B:      2.73,
    annualOsCost_M:     32.5,
    unitCost_M:         12.4,
    note: "Terminal High Altitude Area Defense. Battery cost includes launcher, radar, and C2.",
  },

  patriot_pac3: {
    label: "Patriot Battery / PAC-3 MSE",
    source: "AEI Working Paper 2025-20, Table 2",
    batteryCost_M:      900,
    annualOsCost_M:     35,
    unitCost_M:         3.9,
    note: "PAC-3 MSE interceptor. Most widely deployed terminal layer.",
  },

  sm6: {
    label: "SM-6 Block IA",
    source: "AEI Working Paper 2025-20, Table 2",
    unitCost_M:         5.3,
    note: "Dual-role interceptor; can engage ballistic targets in terminal phase from Aegis ships.",
  },

  arrow3: {
    label: "Arrow 3 (Israel / US co-developed)",
    source: "AEI Working Paper 2025-20, Table 2",
    unitCost_M:         3.0,
    note: "Exo-atmospheric interceptor. Possible procurement for US layered defense.",
  },

  missile_warning_leo: {
    label: "Resilient Missile Warning Constellation (LEO)",
    source: "AEI Working Paper 2025-20, Table 2",
    satelliteCost_M:    50,
    annualReplenishCost_M: 10,
    replacementCycleYears: 5,
    note: "Required enabling capability for any SBI architecture. Cost per satellite.",
  },

  missile_warning_meo: {
    label: "Resilient Missile Warning Constellation (MEO)",
    source: "AEI Working Paper 2025-20, Table 2",
    satelliteCost_M:    120,
    annualReplenishCost_M: 20,
    replacementCycleYears: 6,
    note: "Higher-orbit missile warning; longer lifespan than LEO but higher upfront cost.",
  },
};

export const US_POPULATION = 335_000_000;

export const COST_PER_AMERICAN = {
  whitehouse_claim_B: 175,
  whitehouse_perPerson: Math.round(175e9 / US_POPULATION),
  architectures: {
    limited_tactical_B:          252,
    accelerated_homeland_B:      471,
    ground_centric_B:            406,
    balanced_all_threat_B:       1000,
    space_centric_B:             2400,
    robust_all_threat_B:         3600,
  },
  source: "AEI Working Paper 2025-20; White House FY2026 budget request",
  note: "All figures in FY2026 dollars over 20-year program. Per-person = total / 335M Americans.",
};
