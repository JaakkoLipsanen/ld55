import * as THREE from "three";

export function loadPixelArtTexture(path: string) {
  const texture = new THREE.TextureLoader().load(`${path}`);
  texture.minFilter = THREE.NearestFilter;
  texture.magFilter = THREE.NearestFilter;
  texture.colorSpace = THREE.SRGBColorSpace;

  return texture;
}
