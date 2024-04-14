import * as THREE from "three";

import { UpdateContext } from "../main";
import { Entity } from "./entity";
import { EntityCollection } from "./entity-collection";
import { loadPixelArtTexture } from "../helpers/texture";

export class GoalEntity extends Entity {
  constructor(
    entityCollection: EntityCollection,
    private readonly location: THREE.Vector3
  ) {
    super(entityCollection);
  }

  setup(): void {
    const texture = loadPixelArtTexture("picnic.png");

    const material = new THREE.MeshBasicMaterial({
      map: texture,
      alphaTest: 0,
      transparent: true,
    });

    const spritePlane = new THREE.PlaneGeometry(1, 1);
    const spriteMesh = new THREE.Mesh(spritePlane, material);
    spriteMesh.position.z = 0.1;
    spriteMesh.position.x = 0;
    spriteMesh.position.y = 0.5;
    spriteMesh.scale.set(1.5, 0.75, 0.75);
    spriteMesh.renderOrder = 0;

    this.group.add(spriteMesh);
    this.group.position.set(
      this.location.x,
      this.location.y,
      this.location.z + 0.001
    );
  }
  update(ctx: UpdateContext): void {}

  teardown(): void {}
}
