import * as THREE from "three";

import { UpdateContext } from "../main";
import { Entity } from "./entity";
import { EntityCollection } from "./entity-collection";
import { MapEntity } from "./map";
import { ASPECT_RATIO } from "../renderer";

export class CameraEntity extends Entity {
  private readonly camera: THREE.Camera;
  constructor(entityCollection: EntityCollection) {
    super(entityCollection);
    this.camera =
      //new THREE.OrthographicCamera(-15, 30, 30, -15);
      new THREE.PerspectiveCamera(15, ASPECT_RATIO, 0.1, 1000);
  }

  setup(): void {
    const map = this.entityCollection.findOne(MapEntity).getMap();

    this.camera.position.x = map.width / 2;
    this.camera.position.y = -map.height * 4;
    this.camera.position.z = 40;

    this.camera.up = new THREE.Vector3(0, 0, 1);
    this.camera.lookAt(new THREE.Vector3(map.width / 2, map.height / 2, 0));
  }

  getCamera() {
    return this.camera;
  }

  update(ctx: UpdateContext): void {
    // this.camera.position.x += ctx.deltaTime;
  }
  teardown(): void {}
}
