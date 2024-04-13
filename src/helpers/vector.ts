import * as THREE from "three";

export function vec3ToVec2(vec3: THREE.Vector3): THREE.Vector2 {
  return new THREE.Vector2(vec3.x, vec3.y);
}

export function vec2ToVec3(vec2: THREE.Vector2, z = 0): THREE.Vector3 {
  return new THREE.Vector3(vec2.x, vec2.y, z);
}
