import * as THREE from "three";

import { UpdateContext } from "../main";
import { Map, Tile } from "../model/level";
import { Entity } from "./entity";
import { EntityCollection } from "./entity-collection";
import { random, range } from "../helpers/common";
import { loadPixelArtTexture } from "../helpers/texture";
import { CustomBoxGeometry } from "../geometries/custom-box-geometry";

function createTileMaterials() {
  const grassTopTexture = loadPixelArtTexture("grass-top.png");
  const grassSideTexture = loadPixelArtTexture("grass-side.png");

  const color = new THREE.Color(
    1 + random(-0.05, 0.05) * 0,
    1 + random(-0.1, 0) * 0,
    1 + random(-0.05, 0.05) * 0
  );
  const top = new THREE.MeshBasicMaterial({
    color,
    map: grassTopTexture,
  });

  const sides = new THREE.MeshBasicMaterial({
    color,
    map: grassSideTexture,
  });

  const sideLeft = new THREE.MeshBasicMaterial({
    color,
    map: grassSideTexture,
  });

  const sideFront = new THREE.MeshBasicMaterial({
    color,
    map: grassSideTexture,
  });

  const backAndBottom = new THREE.MeshBasicMaterial({
    color,
    map: grassSideTexture,
  });

  return [sides, sides, sides, sides, top, sides];
}

export class MapEntity extends Entity {
  private cube: THREE.Mesh;
  constructor(entityCollection: EntityCollection, private readonly map: Map) {
    super(entityCollection);
  }

  getMap() {
    return this.map;
  }

  setup(): void {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const materials = createTileMaterials();
    for (const x of range(0, this.map.width - 1)) {
      for (const y of range(0, this.map.height - 1)) {
        const tile = this.map.at(x, y);
        if (tile === Tile.Gap) continue;

        const cube = new THREE.Mesh(geometry, materials);

        const TALLNESS = 1;
        cube.position.x = x + 0.5;
        cube.position.y = y + 0.5;
        cube.position.z = -TALLNESS / 2;
        cube.scale.set(1, 1, TALLNESS);
        this.group.add(cube);
        if (!this.cube) this.cube = cube;
      }
    }
  }

  update(ctx: UpdateContext): void {
    this.cube.rotateZ(ctx.deltaTime);
  }
  teardown(): void {}
}
