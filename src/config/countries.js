/**
 * Country presets for Blue (defender) and Red (attacker).
 *
 * Interceptor unit costs sourced from:
 *   AEI Foreign & Defense Policy Working Paper 2025-20 (September 2025),
 *   "Build Your Own Golden Dome" by Todd Harrison — Tables 2 & 3, Appendix B.
 *   All costs in FY2026 dollars.
 *
 * Red-side missile inventories sourced from:
 *   Defense Intelligence Agency, May 2025 (via AEI Working Paper 2025-20, Table 1).
 *   Counts represent plausible attack scenarios, not full inventories.
 *
 * Pk values are preliminary analytical estimates pending further refinement.
 */

export const COUNTRIES = {
  blue: {
    US: {
      label: "United States",
      interceptors: {
        boost_kinetic: {
          label: "Space-Based Kinetic (Boost Phase)",
          deployed: 100,
          pk: 0.50,
          costPerUnit_M: 13.4,
          phase: "boost",
          source: "AEI Working Paper 2025-20, Table 3 — basic tier SBI, $67B / 4,990 units",
        },
        boost_laser: {
          label: "Space-Based Directed Energy (Boost Phase)",
          deployed: 50,
          pk: 0.40,
          costPerUnit_M: 25.0,
          phase: "boost",
          source: "Analytical estimate; no deployed U.S. system as of 2025",
        },
        midcourse_gbi: {
          label: "Ground-Based Interceptor (GMD)",
          deployed: 44,
          pk: 0.56,
          costPerUnit_M: 109,
          phase: "midcourse",
          source: "AEI Working Paper 2025-20, Table 2 — $4.8B / 44 operational GBIs",
        },
        midcourse_kinetic: {
          label: "Space-Based Kinetic (Midcourse Phase)",
          deployed: 100,
          pk: 0.50,
          costPerUnit_M: 16.0,
          phase: "midcourse",
          source: "AEI Working Paper 2025-20, Table 3 — basic tier midcourse SBI, $32B / 2,000 units",
        },
        midcourse_laser: {
          label: "Space-Based Directed Energy (Midcourse Phase)",
          deployed: 50,
          pk: 0.40,
          costPerUnit_M: 25.0,
          phase: "midcourse",
          source: "Analytical estimate; no deployed U.S. system as of 2025",
        },
        terminal_thaad: {
          label: "Terminal Kinetic — THAAD-class",
          deployed: 150,
          pk: 0.80,
          costPerUnit_M: 12.4,
          phase: "terminal",
          source: "AEI Working Paper 2025-20, Table 2 — THAAD interceptor unit cost",
        },
        terminal_pac3: {
          label: "Terminal Kinetic — PAC-3 MSE",
          deployed: 500,
          pk: 0.75,
          costPerUnit_M: 3.9,
          phase: "terminal",
          source: "AEI Working Paper 2025-20, Table 2 — PAC-3 MSE unit cost",
        },
        terminal_nuclear: {
          label: "Terminal Nuclear-Tipped",
          deployed: 0,
          pk: 0.95,
          costPerUnit_M: 50.0,
          phase: "terminal",
          source: "Analytical estimate; not current U.S. policy",
        },
      },
      pDetectTrack: 0.85,
      pClassifyWarhead: 0.80,
      pFalseAlarmDecoy: 0.20,
      doctrineMode: "sls",
      shotsPerTarget: 2,
      maxShotsPerTarget: 4,
      pReengage: 0.85,
      constellationAltitudeKm: 1000,
      pSystemUp: 0.90,
      detectDegradeFactor: 0.50,
      pkDegradeFactor: 0.70,
    },
  },

  red: {
    DPRK: {
      label: "North Korea",
      source_missiles: "DIA, May 2025 (via AEI Working Paper 2025-20, Table 1)",
      missileClasses: {
        IRBM: {
          label: "Intermediate-Range (Hwasong-12 class)",
          count: 30,
          mirvsPerMissile: 1,
          decoysPerWarhead: 1,
          yieldKt: 20,
          boostEvasion: 0.0,
          note: "30 IRBMs represent a plausible North Korean first-strike allocation.",
        },
        ICBM: {
          label: "Intercontinental (Hwasong-17/18 class)",
          count: 15,
          mirvsPerMissile: 1,
          decoysPerWarhead: 2,
          yieldKt: 150,
          boostEvasion: 0.05,
          note: "DIA estimates ~20 operational ICBMs; 15 used for plausible first-strike scenario.",
        },
      },
      countermeasures: {
        asatType: "none",
        asatDetectPenalty: 0.0,
        asatSpacePkPenalty: 0.0,
      },
      regionalCoverageFactor: 0.9,
    },

    China: {
      label: "China",
      source_missiles: "DIA, May 2025 (via AEI Working Paper 2025-20, Table 1)",
      missileClasses: {
        IRBM: {
          label: "Intermediate-Range (DF-26 class)",
          count: 200,
          mirvsPerMissile: 1,
          decoysPerWarhead: 3,
          yieldKt: 90,
          boostEvasion: 0.10,
          note: "DF-26 is China's primary IRBM. Range includes Guam; may not reach CONUS.",
        },
        ICBM: {
          label: "Intercontinental (DF-41 class)",
          count: 400,
          mirvsPerMissile: 3,
          decoysPerWarhead: 5,
          yieldKt: 500,
          boostEvasion: 0.15,
          note: "DIA estimates 400 deployed ICBMs (2025). DF-41 can carry up to 10 MIRVs; 3 used as a conservative estimate.",
        },
        SLBM: {
          label: "Submarine-Launched (JL-3 class)",
          count: 72,
          mirvsPerMissile: 3,
          decoysPerWarhead: 4,
          yieldKt: 250,
          boostEvasion: 0.10,
          note: "DIA estimate of 72 deployed SLBMs (2025). JL-3 is new-generation SLBM on Type 096 submarines.",
        },
        HGV: {
          label: "Hypersonic Glide Vehicle (DF-17 class)",
          count: 100,
          mirvsPerMissile: 1,
          decoysPerWarhead: 0,
          yieldKt: 50,
          boostEvasion: 0.40,
          note: "DIA estimates 600 HGVs (2025). 100 used for plausible scenario. High evasion factor reflects maneuvering capability.",
        },
      },
      countermeasures: {
        asatType: "conventional",
        asatDetectPenalty: 0.10,
        asatSpacePkPenalty: 0.15,
      },
      regionalCoverageFactor: 0.75,
    },

    Russia: {
      label: "Russia",
      source_missiles: "DIA, May 2025 (via AEI Working Paper 2025-20, Table 1)",
      missileClasses: {
        LACM: {
          label: "Land Attack Cruise Missile (Kalibr / Kh-101 class)",
          count: 400,
          mirvsPerMissile: 1,
          decoysPerWarhead: 0,
          yieldKt: 100,
          boostEvasion: 0.20,
          note: "DIA estimates 300–600 LACMs (2025). 400 used as midpoint estimate.",
        },
        ICBM: {
          label: "Intercontinental (RS-24 Yars / RS-28 Sarmat class)",
          count: 350,
          mirvsPerMissile: 6,
          decoysPerWarhead: 8,
          yieldKt: 800,
          boostEvasion: 0.20,
          note: "DIA estimate of 350 deployed ICBMs (2025). RS-28 Sarmat can carry up to 15 MIRVs; 6 used as conservative estimate.",
        },
        SLBM: {
          label: "Submarine-Launched (R-30 Bulava class)",
          count: 192,
          mirvsPerMissile: 4,
          decoysPerWarhead: 6,
          yieldKt: 500,
          boostEvasion: 0.15,
          note: "DIA estimate of 192 deployed SLBMs (2025). Bulava carries 6–10 MIRVs; 4 used as conservative estimate.",
        },
        HGV: {
          label: "Hypersonic Glide Vehicle (Avangard class)",
          count: 50,
          mirvsPerMissile: 1,
          decoysPerWarhead: 0,
          yieldKt: 2000,
          boostEvasion: 0.45,
          note: "DIA estimates 200–300 HGVs (2025). 50 used for plausible scenario. Avangard declared operational 2019.",
        },
      },
      countermeasures: {
        asatType: "nuclear",
        asatDetectPenalty: 0.25,
        asatSpacePkPenalty: 0.30,
      },
      regionalCoverageFactor: 0.6,
    },
  },
};
