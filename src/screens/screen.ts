import * as THREE from "three";
import { SetupContext, UpdateContext } from "../main";

export abstract class Screen {
  protected readonly scene: THREE.Scene;
  protected readonly camera: THREE.Camera;

  constructor(camera: THREE.Camera) {
    this.scene = new THREE.Scene();
    this.camera = camera;
  }

  getScene(): THREE.Scene {
    return this.scene;
  }

  getCamera(): THREE.Camera {
    return this.camera;
  }

  abstract setup(ctx: SetupContext): void;
  abstract teardown(): void;
  abstract update(ctx: UpdateContext): void;
}
