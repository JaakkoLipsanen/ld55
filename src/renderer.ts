import * as THREE from "three";

export const ASPECT_RATIO = 16 / 10;

function calculateRenderSize(): [number, number] {
  const VERTICAL_MARGIN = 64;

  const height = window.innerHeight - VERTICAL_MARGIN * 2;
  const width = height * ASPECT_RATIO;

  return [width, height];
}

export function createRenderer() {
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(...calculateRenderSize());
  document.body.appendChild(renderer.domElement);

  window.addEventListener("resize", () => {
    renderer.setSize(...calculateRenderSize());
  });

  return renderer;
}
