/**
 * Adversary missile inventory threat profiles.
 * Current estimates and 2035 projections derived from the
 * Defense Intelligence Agency's May 2025 unclassified threat assessment.
 *
 * Source: AEI Foreign & Defense Policy Working Paper 2025-20, September 2025,
 *         Table 1: "DIA Missile Threat Assessment (2025–2035)"
 *         Original source: Defense Intelligence Agency, May 2025
 *
 * LACM = Land Attack Cruise Missile
 * HGV  = Hypersonic Glide Vehicle
 * ICBM = Intercontinental Ballistic Missile (>5,500 km range)
 * SLBM = Submarine-Launched Ballistic Missile
 * FOBS = Fractional Orbital Bombardment System
 */

export const THREAT_PROFILES = {
  China: {
    label: "People's Republic of China",
    source: "DIA, May 2025 (via AEI Working Paper 2025-20, Table 1)",
    note: "China's nuclear and conventional missile forces are undergoing the most rapid expansion of any nuclear state. Emphasis on survivability, diversity, and defeating U.S. missile defenses.",
    current: {
      year: 2025,
      lacm:       1000,
      hgv:        600,
      icbm:       400,
      slbm:       72,
      fobs:       0,
      totalDeployedWarheads: 350,
    },
    projected2035: {
      year: 2035,
      lacm:       5000,
      hgv:        4000,
      icbm:       640,
      slbm:       132,
      fobs:       60,
      note: "SLBM count is a minimum estimate (>=132). China's DF-41 ICBM carries up to 10 MIRVs. FOBS capability derived from 2021 test.",
    },
    asatCapability: "operational_kinetic",
    keyPlatforms: [
      "DF-5B ICBM (MIRVed, silo-based)",
      "DF-41 ICBM (road-mobile, up to 10 MIRVs)",
      "JL-3 SLBM (submarine-launched)",
      "DF-17 HGV (hypersonic glide vehicle)",
      "DF-27 HGV",
      "CJ-100 LACM",
    ],
  },

  Russia: {
    label: "Russian Federation",
    source: "DIA, May 2025 (via AEI Working Paper 2025-20, Table 1)",
    note: "Russia retains the world's largest nuclear arsenal. LACM and HGV inventories are growing rapidly. FOBS program (Avangard) declared operational in 2019.",
    current: {
      year: 2025,
      lacm:       { min: 300, max: 600, midpoint: 450 },
      hgv:        { min: 200, max: 300, midpoint: 250 },
      icbm:       350,
      slbm:       192,
      fobs:       0,
      totalDeployedWarheads: 1588,
    },
    projected2035: {
      year: 2035,
      lacm:       5000,
      hgv:        1000,
      icbm:       388,
      slbm:       192,
      fobs:       12,
      note: "FOBS count is a maximum estimate (<12). LACM expansion driven by Kalibr and Kh-101 series. Avangard HGV boost-glide system already operational on UR-100N ICBM.",
    },
    asatCapability: "nuclear_capable",
    keyPlatforms: [
      "RS-28 Sarmat ICBM (super-heavy, up to 15 MIRVs)",
      "RS-24 Yars ICBM (road-mobile, 4–6 MIRVs)",
      "R-30 Bulava SLBM (6–10 MIRVs)",
      "Avangard HGV (boost-glide, Mach 20+)",
      "Kinzhal air-launched HGV",
      "Kalibr LACM",
      "Kh-101 LACM",
    ],
  },

  NorthKorea: {
    label: "Democratic People's Republic of Korea",
    source: "DIA, May 2025 (via AEI Working Paper 2025-20, Table 1)",
    note: "North Korea's ICBM program is advancing rapidly. The Hwasong-17 and -18 are operational. MIRV capability is being developed but not confirmed operational.",
    current: {
      year: 2025,
      lacm:       0,
      hgv:        0,
      icbm:       20,
      slbm:       0,
      fobs:       0,
      totalWarheads: 50,
    },
    projected2035: {
      year: 2035,
      icbm:       50,
      note: "AEI/DIA projects up to 50 operational ICBMs by 2035. No confirmed MIRV capability. SLBM development ongoing.",
    },
    asatCapability: "none",
    keyPlatforms: [
      "Hwasong-17 ICBM (road-mobile, single warhead)",
      "Hwasong-18 ICBM (solid-fuel, road-mobile)",
      "Pukguksong-3 SLBM (submarine test only)",
    ],
  },

  Iran: {
    label: "Islamic Republic of Iran",
    source: "DIA, May 2025 (via AEI Working Paper 2025-20, Table 1)",
    note: "Iran currently lacks ICBMs but possesses the world's largest ballistic missile arsenal below ICBM range. DIA projects ICBM capability could emerge by 2035 if strategic decision is made.",
    current: {
      year: 2025,
      lacm:       0,
      hgv:        0,
      icbm:       0,
      slbm:       0,
      fobs:       0,
      irbm_mrbm:  "significant inventory",
      note: "Iran has extensive IRBM/MRBM forces capable of reaching Europe but not U.S. homeland.",
    },
    projected2035: {
      year: 2035,
      icbm:       60,
      note: "Conditional projection. Requires political decision to develop ICBM capability. 60 ICBMs is the upper bound DIA estimate if Iran pursues this capability.",
    },
    asatCapability: "none",
    keyPlatforms: [
      "Shahab-3 MRBM",
      "Khorramshahr IRBM",
      "Emad IRBM (maneuvering)",
      "Fatah-1 hypersonic (short-range, not ICBM-class)",
    ],
  },
};

/**
 * Salvo size thresholds used in constellation sizing calculations.
 * Defines what "basic," "moderate," and "robust" capacity means
 * in terms of the threat environment being designed against.
 */
export const SALVO_THRESHOLDS = {
  basic: {
    missiles:    5,
    label:       "Basic / Rogue State",
    description: "Intercepts a limited strike from a rogue state (North Korea or Iran). Insufficient against China or Russia.",
    adversaries: ["North Korea (current)", "Iran (projected 2035)"],
  },
  moderate: {
    missiles:    50,
    label:       "Moderate / Limited Major Power",
    description: "Intercepts a limited or demonstrative strike from a major nuclear power. Does not defeat a full Chinese or Russian strategic launch.",
    adversaries: ["China limited strike", "Russia demonstrative strike"],
  },
  robust: {
    missiles:    250,
    label:       "Robust / Large-Scale Strike",
    description: "Intercepts a large coordinated salvo. Approaches coverage of China's projected 2035 ICBM force but cannot defeat a full Russian strategic launch.",
    adversaries: ["China 2035 ICBM force", "Russia limited exchange"],
  },
};
