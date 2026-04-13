/**
 * Comparative nuclear arsenal and missile inventory data for
 * contextualizing simulation outputs.
 *
 * Warhead counts:
 *   Sources: Federation of American Scientists (FAS), SIPRI 2024 Yearbook
 *
 * Missile inventories and 2035 projections:
 *   Source: Defense Intelligence Agency, May 2025
 *           (via AEI Working Paper 2025-20, Table 1, September 2025)
 *
 * All figures are estimates. Nuclear inventories are particularly uncertain;
 * declared figures may differ from actual warheads available.
 */

export const ARSENAL_CONTEXT = [
  {
    country:         "United States",
    totalWarheads:   5550,
    deployed:        1744,
    note:            "2024 est. (FAS/SIPRI)",
    source_warheads: "FAS, SIPRI 2024",
    missiles: {
      icbm:     400,
      slbm:     192,
      lacm:     null,
      hgv:      null,
      fobs:     null,
    },
    missiles2035: null,
  },
  {
    country:         "Russia",
    totalWarheads:   6257,
    deployed:        1588,
    note:            "2024 est. (FAS/SIPRI)",
    source_warheads: "FAS, SIPRI 2024",
    missiles: {
      icbm:     350,
      slbm:     192,
      lacm:     { min: 300, max: 600 },
      hgv:      { min: 200, max: 300 },
      fobs:     0,
    },
    missiles2035: {
      icbm:     388,
      slbm:     192,
      lacm:     5000,
      hgv:      1000,
      fobs:     12,
      note:     "2035 DIA projection. FOBS count is maximum estimate (<12).",
    },
    source_missiles: "DIA, May 2025 (via AEI Working Paper 2025-20)",
  },
  {
    country:         "China",
    totalWarheads:   500,
    deployed:        350,
    note:            "2024 est., rapidly expanding (FAS/SIPRI)",
    source_warheads: "FAS, SIPRI 2024",
    missiles: {
      icbm:     400,
      slbm:     72,
      lacm:     1000,
      hgv:      600,
      fobs:     0,
    },
    missiles2035: {
      icbm:     640,
      slbm:     132,
      lacm:     5000,
      hgv:      4000,
      fobs:     60,
      note:     "2035 DIA projection. SLBM count is minimum estimate (>=132). Most rapid modernization of any nuclear state.",
    },
    source_missiles: "DIA, May 2025 (via AEI Working Paper 2025-20)",
  },
  {
    country:         "France",
    totalWarheads:   290,
    deployed:        280,
    note:            "2024 est. (FAS/SIPRI)",
    source_warheads: "FAS, SIPRI 2024",
    missiles: null,
    missiles2035: null,
  },
  {
    country:         "United Kingdom",
    totalWarheads:   225,
    deployed:        120,
    note:            "2024 est. (FAS/SIPRI)",
    source_warheads: "FAS, SIPRI 2024",
    missiles: null,
    missiles2035: null,
  },
  {
    country:         "North Korea",
    totalWarheads:   50,
    deployed:        0,
    note:            "2024 est., uncertain (FAS/SIPRI)",
    source_warheads: "FAS, SIPRI 2024",
    missiles: {
      icbm:     20,
      slbm:     0,
      lacm:     0,
      hgv:      0,
      fobs:     0,
    },
    missiles2035: {
      icbm:     50,
      slbm:     null,
      lacm:     null,
      hgv:      null,
      fobs:     null,
      note:     "2035 DIA projection. No confirmed MIRV capability.",
    },
    source_missiles: "DIA, May 2025 (via AEI Working Paper 2025-20)",
  },
  {
    country:         "India",
    totalWarheads:   172,
    deployed:        0,
    note:            "2024 est. (FAS/SIPRI)",
    source_warheads: "FAS, SIPRI 2024",
    missiles: null,
    missiles2035: null,
  },
  {
    country:         "Pakistan",
    totalWarheads:   170,
    deployed:        0,
    note:            "2024 est. (FAS/SIPRI)",
    source_warheads: "FAS, SIPRI 2024",
    missiles: null,
    missiles2035: null,
  },
  {
    country:         "Israel",
    totalWarheads:   90,
    deployed:        0,
    note:            "2024 est., undeclared policy (FAS/SIPRI)",
    source_warheads: "FAS, SIPRI 2024",
    missiles: null,
    missiles2035: null,
  },
  {
    country:         "Iran",
    totalWarheads:   0,
    deployed:        0,
    note:            "No nuclear weapons as of 2024. ICBM capability is a DIA conditional projection.",
    source_warheads: "FAS, SIPRI 2024",
    missiles: {
      icbm:     0,
      slbm:     0,
      lacm:     0,
      hgv:      0,
      fobs:     0,
      note:     "Iran has extensive IRBM/MRBM forces capable of reaching Europe but not U.S. homeland.",
    },
    missiles2035: {
      icbm:     60,
      note:     "Conditional projection. Requires political decision to pursue ICBM capability. 60 is the DIA upper-bound estimate.",
    },
    source_missiles: "DIA, May 2025 (via AEI Working Paper 2025-20)",
  },
];
