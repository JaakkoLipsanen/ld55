import * as THREE from "three";
import { Screen } from "./screen";
import { random, range } from "../helpers";
import { UpdateContext } from "../main";
import { ASPECT_RATIO } from "../renderer";
import { Level, Tile } from "../model/level";

function createTileMaterials() {
  const top = new THREE.MeshBasicMaterial({
    color: new THREE.Color(
      0.1 + random(-0.05, 0.05),
      1 + random(-0.1, 0),
      0.2 + random(-0.05, 0.05)
    ),
  });
  const sides = new THREE.MeshBasicMaterial({
    color: new THREE.Color("#8B4513"),
  });

  return [sides, sides, top, sides, sides, sides];
}

export class GameplayScreen extends Screen {
  private level: Level;
  private cubes: THREE.Object3D[];

  constructor(level: Level) {
    super(new THREE.PerspectiveCamera(50, ASPECT_RATIO, 0.1, 1000));
    this.level = level;
  }

  setup(): void {
    this.camera.position.y = 10;
    this.camera.position.x = this.level.map.width / 2;
    this.camera.position.z = (this.level.map.height / 4) * 8;

    this.camera.lookAt(
      new THREE.Vector3(this.level.map.width / 2, 0, this.level.map.height / 2)
    );

    this.cubes = [];

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    for (const x of range(0, this.level.map.width - 1)) {
      for (const y of range(0, this.level.map.height - 1)) {
        const tile = this.level.map.at(x, y);
        if (tile === Tile.Gap) continue;

        const cube = new THREE.Mesh(geometry, createTileMaterials());

        cube.position.x = x;
        cube.position.z = y;
        this.scene.add(cube);
        this.cubes.push(cube);
      }
    }
  }
  update(ctx: UpdateContext): void {}
  teardown(): void {}
}
