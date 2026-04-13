/**
 * Six architecture options for U.S. homeland missile defense.
 * All costs are 20-year total program costs in FY2026 dollars.
 *
 * Source: AEI Foreign & Defense Policy Working Paper 2025-20, September 2025
 *         "Build Your Own Golden Dome: A Framework for Understanding Costs,
 *          Choices, and Tradeoffs" by Todd Harrison
 *
 * Architectures range from a minimal tactical upgrade ($252B) to a
 * robust all-threat defense ($3.6T). Each reflects a distinct set of
 * policy choices about what threats to defend against and how.
 */

export const ARCHITECTURE_BENCHMARKS = [
  {
    id:               "limited_tactical",
    rank:             1,
    label:            "Limited Tactical Defense",
    total20yr_B:      252,
    perAmerican:      Math.round(252e9 / 335e6),
    description:      "Upgrades existing ground-based systems and adds limited Aegis Ashore sites. Defends against rogue-state ICBMs (North Korea, Iran) but not major nuclear powers. No space-based interceptors.",
    keyCapabilities: [
      "Expanded GMD (Ground-Based Midcourse Defense)",
      "Additional Aegis Ashore sites",
      "Enhanced missile warning and tracking",
    ],
    threatsCovered:  ["North Korea ICBM", "Iran ICBM (projected)"],
    threatsExcluded: ["Chinese ICBM salvo", "Russian ICBM salvo", "Hypersonic glide vehicles", "FOBS"],
    sbiBoostTier:    null,
    sbiGlideTier:    null,
    sbiMidcourseTier: null,
  },
  {
    id:               "ground_centric",
    rank:             2,
    label:            "Ground-Centric Strategic Defense",
    total20yr_B:      406,
    perAmerican:      Math.round(406e9 / 335e6),
    description:      "Substantially expanded ground-based interceptor inventory with improved discrimination and battle management. Relies on proven technology but faces inherent geographic constraints on coverage.",
    keyCapabilities: [
      "Large GMD expansion",
      "Multiple Aegis Ashore sites globally",
      "Upgraded THAAD batteries",
      "Advanced discrimination radars",
    ],
    threatsCovered:  ["North Korea", "Iran", "Limited Chinese salvo"],
    threatsExcluded: ["Full Russian ICBM salvo", "Hypersonic glide vehicles at scale", "FOBS"],
    sbiBoostTier:    null,
    sbiGlideTier:    null,
    sbiMidcourseTier: null,
  },
  {
    id:               "accelerated_homeland",
    rank:             3,
    label:            "Accelerated Homeland Defense",
    total20yr_B:      471,
    perAmerican:      Math.round(471e9 / 335e6),
    description:      "Combines a basic space-based interceptor constellation with ground-based systems. Provides boost-phase intercept capability against small-to-medium ICBM salvos. Closest to the White House 'Golden Dome' concept at realistic cost.",
    keyCapabilities: [
      "Basic SBI constellation (~4,990 boost-phase interceptors)",
      "Expanded GMD",
      "Aegis Ashore sites",
      "Resilient missile warning (LEO)",
    ],
    threatsCovered:  ["North Korea full salvo", "Iran projected ICBM force", "Limited Chinese salvo (5-missile)"],
    threatsExcluded: ["Large Chinese or Russian salvo (>5 missiles)", "FOBS", "Hypersonic at scale"],
    sbiBoostTier:    "basic",
    sbiGlideTier:    null,
    sbiMidcourseTier: null,
    note: "Comparable in cost to White House $175B claim when only initial procurement is counted; 20-year total is $471B.",
  },
  {
    id:               "balanced_all_threat",
    rank:             4,
    label:            "Balanced All-Threat Defense",
    total20yr_B:      1000,
    perAmerican:      Math.round(1000e9 / 335e6),
    description:      "Moderate SBI constellation across all three intercept phases plus robust ground-based layer. Provides meaningful (though incomplete) coverage against Chinese and Russian limited strikes. Requires approximately $1 trillion over 20 years.",
    keyCapabilities: [
      "Moderate boost-phase SBI (~49,900 interceptors)",
      "Basic glide-phase SBI (~310 interceptors)",
      "Basic midcourse SBI (~2,000 interceptors)",
      "Full ground-based layer",
      "Advanced battle management C2",
    ],
    threatsCovered:  ["North Korea", "Iran", "China limited salvo (50-missile)", "Russia limited strike"],
    threatsExcluded: ["Full Russian or Chinese strategic salvo (250+ missiles)"],
    sbiBoostTier:    "moderate",
    sbiGlideTier:    "basic",
    sbiMidcourseTier: "basic",
  },
  {
    id:               "space_centric",
    rank:             5,
    label:            "Space-Centric Strategic Defense",
    total20yr_B:      2400,
    perAmerican:      Math.round(2400e9 / 335e6),
    description:      "Massive space-based interceptor constellation emphasizing boost and midcourse phases with reduced ground layer. Provides broad coverage but at extreme cost. Represents $2.4 trillion over 20 years.",
    keyCapabilities: [
      "Robust boost-phase SBI (~249,500 interceptors)",
      "Moderate midcourse SBI",
      "Reduced ground-based layer",
      "Comprehensive missile warning constellation",
    ],
    threatsCovered:  ["North Korea", "Iran", "China large salvo (250-missile)", "Russia limited salvo"],
    threatsExcluded: ["Full Russian strategic launch (388+ ICBMs + SLBMs)"],
    sbiBoostTier:    "robust",
    sbiGlideTier:    "moderate",
    sbiMidcourseTier: "moderate",
  },
  {
    id:               "robust_all_threat",
    rank:             6,
    label:            "Robust All-Threat Defense",
    total20yr_B:      3600,
    perAmerican:      Math.round(3600e9 / 335e6),
    description:      "Maximum-effort defense against all adversary categories including large Russian and Chinese salvos, hypersonic glide vehicles, and FOBS. Requires ~$3.6 trillion over 20 years — roughly equal to the entire current U.S. national debt accumulated over 4 years.",
    keyCapabilities: [
      "Robust boost-phase SBI (~249,500 interceptors)",
      "Robust glide-phase SBI (~15,500 interceptors)",
      "Robust midcourse SBI (~100,000 interceptors)",
      "Full ground-based layer",
      "Full missile warning constellation",
      "Advanced discrimination and battle management",
    ],
    threatsCovered:  ["All identified threats through 2035", "North Korea", "Iran", "China full salvo", "Russia large salvo", "Hypersonic glide vehicles", "FOBS (limited)"],
    threatsExcluded: ["Russian full strategic first strike at maximum scale"],
    sbiBoostTier:    "robust",
    sbiGlideTier:    "robust",
    sbiMidcourseTier: "robust",
  },
];

/**
 * White House budget claim for comparison context.
 * The administration's $175B figure represents initial procurement only
 * and does not include replenishment, O&S, or full 20-year program costs.
 */
export const WHITEHOUSE_CLAIM = {
  label:            "White House Golden Dome Estimate",
  total_B:          175,
  perAmerican:      Math.round(175e9 / 335e6),
  caveat: "Initial procurement cost only. Excludes replenishment (3× over 20 yr for LEO systems), operations & sustainment, and enabling infrastructure. AEI estimates the comparable full 20-year cost at $471B (Accelerated Homeland) to $3.6T (Robust All-Threat).",
  source: "White House FY2026 budget request; AEI Working Paper 2025-20 for context",
};

export const US_POPULATION = 335_000_000;
