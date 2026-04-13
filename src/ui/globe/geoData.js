/**
 * World country boundary data — fetches Natural Earth 110m TopoJSON at runtime,
 * decodes it, and provides accurate polygon data for all countries.
 */

const TOPOJSON_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const ISO_TO_KEY = {
  '840': 'US',
  '643': 'Russia',
  '156': 'China',
  '408': 'DPRK',
  '410': 'SouthKorea',
  '364': 'Iran',
  '392': 'Japan',
  '356': 'India',
  '826': 'UK',
  '250': 'France',
  '276': 'Germany',
  '380': 'Italy',
  '036': 'Australia',
  '076': 'Brazil',
  '124': 'Canada',
  '484': 'Mexico',
};

const HIGHLIGHT_COLORS = {
  US:     [0, 0.78, 0.83],
  Russia: [0.8, 0.27, 0.27],
  China:  [0.8, 0.27, 0.27],
  DPRK:   [0.8, 0.27, 0.27],
  Iran:   [0.8, 0.27, 0.27],
};

let allCountries = [];
let countryByKey = {};
let loaded = false;
let loadPromise = null;

function decodeArcs(topology) {
  const { scale, translate } = topology.transform;
  return topology.arcs.map(arc => {
    let x = 0, y = 0;
    return arc.map(([dx, dy]) => {
      x += dx;
      y += dy;
      return [x * scale[0] + translate[0], y * scale[1] + translate[1]];
    });
  });
}

function assembleRing(arcIndexes, decodedArcs) {
  const coords = [];
  for (const idx of arcIndexes) {
    const arc = idx >= 0 ? decodedArcs[idx] : decodedArcs[~idx].slice().reverse();
    const start = coords.length === 0 ? 0 : 1;
    for (let i = start; i < arc.length; i++) {
      coords.push(arc[i]);
    }
  }
  return coords;
}

function extractPolygons(geom, decodedArcs) {
  const polygons = [];
  if (geom.type === 'Polygon') {
    for (const ring of geom.arcs) {
      polygons.push(assembleRing(ring, decodedArcs));
    }
  } else if (geom.type === 'MultiPolygon') {
    for (const poly of geom.arcs) {
      for (const ring of poly) {
        polygons.push(assembleRing(ring, decodedArcs));
      }
    }
  }
  return polygons;
}

export function loadGeoData() {
  if (loadPromise) return loadPromise;

  loadPromise = fetch(TOPOJSON_URL)
    .then(r => r.json())
    .then(topology => {
      const decodedArcs = decodeArcs(topology);
      const geometries = topology.objects.countries.geometries;

      allCountries = [];
      countryByKey = {};

      for (const geom of geometries) {
        const id = String(geom.id);
        const key = ISO_TO_KEY[id] || id;
        const polygons = extractPolygons(geom, decodedArcs);

        if (polygons.length === 0) continue;

        const entry = {
          id,
          key,
          label: key,
          color: HIGHLIGHT_COLORS[key] || [0.5, 0.55, 0.6],
          polygons,
        };

        allCountries.push(entry);
        if (ISO_TO_KEY[id]) {
          countryByKey[key] = entry;
        }
      }

      loaded = true;
      return { allCountries, countryByKey };
    })
    .catch(err => {
      console.error('Failed to load world geo data:', err);
      loaded = true;
      return { allCountries: [], countryByKey: {} };
    });

  return loadPromise;
}

export function isGeoDataLoaded() {
  return loaded;
}

export function getAllCountries() {
  return allCountries;
}

export function getCountryByKey(key) {
  return countryByKey[key] || null;
}

export { HIGHLIGHT_COLORS };
