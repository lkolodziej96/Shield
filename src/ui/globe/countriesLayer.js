/**
 * Countries layer — renders world country borders on a Canvas2D texture
 * projected onto a Three.js sphere. Fetches real Natural Earth TopoJSON data
 * for accurate boundaries.
 */

import * as THREE from 'three';
import { loadGeoData, getAllCountries, getCountryByKey } from './geoData.js';

const TEX_W = 2048;
const TEX_H = 1024;
const GLOBE_RADIUS = 180;

let canvas, ctx, texture, sphereMesh;
let highlightedCountries = new Set();
let dataReady = false;

function toPixel(lng, lat) {
  const x = ((lng + 180) / 360) * TEX_W;
  const y = ((90 - lat) / 180) * TEX_H;
  return [x, y];
}

function drawPolygon(points, opts = {}) {
  if (!points || points.length < 3) return;

  let prevX = null;
  ctx.beginPath();
  for (let i = 0; i < points.length; i++) {
    const [x, y] = toPixel(points[i][0], points[i][1]);
    if (i > 0 && prevX !== null && Math.abs(x - prevX) > TEX_W * 0.5) {
      if (opts.stroke) ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x, y);
    } else if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
    prevX = x;
  }

  if (opts.fill) {
    ctx.closePath();
    ctx.fillStyle = opts.fill;
    ctx.fill();
  }
  if (opts.stroke) {
    ctx.strokeStyle = opts.stroke;
    ctx.lineWidth = opts.lineWidth || 1;
    ctx.stroke();
  }
}

function renderTexture() {
  if (!ctx) return;

  ctx.fillStyle = '#080810';
  ctx.fillRect(0, 0, TEX_W, TEX_H);

  ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
  for (let x = 0; x < TEX_W; x += 32) {
    for (let y = 0; y < TEX_H; y += 32) {
      ctx.fillRect(x, y, 1, 1);
    }
  }

  ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
  ctx.lineWidth = 0.5;
  for (let lat = -60; lat <= 60; lat += 30) {
    ctx.beginPath();
    const y = ((90 - lat) / 180) * TEX_H;
    ctx.moveTo(0, y);
    ctx.lineTo(TEX_W, y);
    ctx.stroke();
  }
  for (let lng = -150; lng <= 180; lng += 30) {
    ctx.beginPath();
    const x = ((lng + 180) / 360) * TEX_W;
    ctx.moveTo(x, 0);
    ctx.lineTo(x, TEX_H);
    ctx.stroke();
  }

  if (!dataReady) {
    if (texture) texture.needsUpdate = true;
    return;
  }

  const countries = getAllCountries();

  for (const country of countries) {
    const isHighlighted = highlightedCountries.has(country.key);

    for (const poly of country.polygons) {
      if (isHighlighted) {
        const [r, g, b] = country.color;
        drawPolygon(poly, {
          fill: `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, 0.25)`,
          stroke: `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, 0.85)`,
          lineWidth: 2,
        });
      } else {
        drawPolygon(poly, {
          fill: 'rgba(200, 220, 255, 0.03)',
          stroke: 'rgba(200, 220, 255, 0.18)',
          lineWidth: 0.8,
        });
      }
    }
  }

  if (texture) texture.needsUpdate = true;
}

export function createCountriesLayer(globeGroup) {
  canvas = document.createElement('canvas');
  canvas.width = TEX_W;
  canvas.height = TEX_H;
  ctx = canvas.getContext('2d');

  texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;

  const geometry = new THREE.SphereGeometry(GLOBE_RADIUS, 64, 48);
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    opacity: 0.95,
  });

  sphereMesh = new THREE.Mesh(geometry, material);
  globeGroup.add(sphereMesh);

  const atmGeometry = new THREE.SphereGeometry(GLOBE_RADIUS * 1.05, 64, 48);
  const atmMaterial = new THREE.MeshBasicMaterial({
    color: 0x003366,
    side: THREE.BackSide,
    transparent: true,
    opacity: 0.35,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const atmMesh = new THREE.Mesh(atmGeometry, atmMaterial);
  globeGroup.add(atmMesh);

  renderTexture();

  loadGeoData().then(() => {
    dataReady = true;
    renderTexture();
  });

  return sphereMesh;
}

export function setHighlightedCountries(keys) {
  highlightedCountries = new Set(keys);
  renderTexture();
}

export function highlightCountry(countryKey) {
  highlightedCountries.add(countryKey);
  renderTexture();
}

export function unhighlightCountry(countryKey) {
  highlightedCountries.delete(countryKey);
  renderTexture();
}

export function clearHighlights() {
  highlightedCountries.clear();
  renderTexture();
}

export function getCountryCenter(key) {
  const data = getCountryByKey(key);
  if (!data || !data.polygons.length) return 0;
  const poly = data.polygons[0];
  let sumLng = 0;
  for (const [lng] of poly) sumLng += lng;
  return sumLng / poly.length;
}
