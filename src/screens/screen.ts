import * as THREE from "three";
import { SetupContext, UpdateContext } from "../main";

export abstract class Screen {
  protected readonly scene: THREE.Scene;

  constructor() {
    this.scene = new THREE.Scene();
  }

  getScene(): THREE.Scene {
    return this.scene;
  }

  abstract getCamera(): THREE.Camera;
  abstract setup(ctx: SetupContext): void;
  abstract teardown(): void;
  abstract update(ctx: UpdateContext): void;
}
