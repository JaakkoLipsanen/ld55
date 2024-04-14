import * as THREE from "three";

import { UpdateContext } from "../main";
import { Entity } from "./entity";
import { EntityCollection } from "./entity-collection";
import { loadPixelArtTexture } from "../helpers/texture";
import { CatEntity } from "./cat";
import { MapEntity } from "./map";
import { Tile } from "../model/level";
import { CameraEntity } from "./camera";

const MOVEMENT_SPEED = 1.5;
const UNDERFOOT_AREA_SIZE = 0.25;
const RENDER_UNDERFOOT_DEBUG = false;

export class PlayerEntity extends Entity {
  private isFalling = false;
  private isSummoning = false;
  private isLevelFinished = false;
  private fallingVelocity = 0;
  private pivot: THREE.Group;
  private lastDirection: THREE.Vector2;

  constructor(
    entityCollection: EntityCollection,
    private readonly initialPosition: THREE.Vector3
  ) {
    super(entityCollection);
  }

  getIsFalling() {
    return this.isFalling;
  }

  setLevelFinished() {
    this.isLevelFinished = true;
  }

  setup(): void {
    const texture = loadPixelArtTexture("nipsu_1.png");

    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      depthWrite: false,
    });

    const spritePlane = new THREE.PlaneGeometry(1, 1);
    const spriteMesh = new THREE.Mesh(spritePlane, material);
    spriteMesh.position.z = 0.1;
    spriteMesh.position.x = 0;
    spriteMesh.position.y = 0.5;
    spriteMesh.renderOrder = 1000;

    if (RENDER_UNDERFOOT_DEBUG) {
      const underfootAreaBox = new THREE.BoxGeometry(1, 1, 1);
      const underfootAreaMesh = new THREE.Mesh(
        underfootAreaBox,
        new THREE.MeshBasicMaterial({ color: "red" })
      );
      underfootAreaMesh.scale.set(
        UNDERFOOT_AREA_SIZE,
        UNDERFOOT_AREA_SIZE,
        0.1
      );
      underfootAreaMesh.position.set(0, 0, 0.1);
      this.group.add(underfootAreaMesh);
    }

    this.pivot = new THREE.Group();
    this.pivot.add(spriteMesh);

    this.group.add(this.pivot);

    this.group.position.x = this.initialPosition.x;
    this.group.position.y = this.initialPosition.y;
    this.group.position.z = this.initialPosition.z;
  }

  update(ctx: UpdateContext): void {
    this.handleInput(ctx);
    this.updateSummoning(ctx);
    this.updateIsFalling(ctx);

    this.pivot.up.set(0, 0, 1);
    this.pivot.lookAt(
      this.entityCollection.findOne(CameraEntity).getCamera().position
    );
  }

  private updateSummoning(ctx: UpdateContext) {
    const cats = this.entityCollection.findAll(CatEntity);
    if (this.isSummoning && !this.isLevelFinished) {
      cats.forEach((cat) => cat.startSummoning(this));
    } else {
      cats.forEach((cat) => cat.stopSummoning());
    }
  }

  private handleInput(ctx: UpdateContext): void {
    if (!this.isFalling) {
      this.handleMovementInput(ctx);
      this.handleSummoningInput(ctx);
    }
  }

  private handleMovementInput(ctx: UpdateContext): void {
    const direction = new THREE.Vector2(0, 0);
    if (ctx.input.isKeyDown("W")) {
      direction.y += 1;
    }
    if (ctx.input.isKeyDown("S")) {
      direction.y -= 1;
    }
    if (ctx.input.isKeyDown("A")) {
      direction.x -= 1;
    }
    if (ctx.input.isKeyDown("D")) {
      direction.x += 1;
    }

    this.lastDirection = direction;
    this.group.position.x += direction.x * MOVEMENT_SPEED * ctx.deltaTime;
    this.group.position.y += direction.y * MOVEMENT_SPEED * ctx.deltaTime;
  }

  private handleSummoningInput(ctx: UpdateContext) {
    this.isSummoning = ctx.input.isKeyDown(" ");
  }

  private updateIsFalling(ctx: UpdateContext) {
    if (!this.isFalling) {
      const map = this.entityCollection.findOne(MapEntity).getMap();

      const underfootAreaLeft = this.group.position.x - UNDERFOOT_AREA_SIZE / 2;
      const underfootAreaRight =
        this.group.position.x + UNDERFOOT_AREA_SIZE / 2;
      const underfootAreaTop = this.group.position.y + UNDERFOOT_AREA_SIZE / 2;
      const underfootAreaBottom =
        this.group.position.y - UNDERFOOT_AREA_SIZE / 2;

      const tileIndices = [
        [underfootAreaLeft, underfootAreaTop],
        [underfootAreaLeft, underfootAreaBottom],
        [underfootAreaRight, underfootAreaTop],
        [underfootAreaRight, underfootAreaBottom],
      ].map(([x, y]) => [Math.floor(x), Math.floor(y)]);

      if (tileIndices.every(([x, y]) => map.at(x, y, 0) === Tile.Gap)) {
        this.isFalling = true;
      }
    } else {
      const GRAVITY = 9.81;
      this.fallingVelocity += GRAVITY * ctx.deltaTime;
      this.group.position.z -= ctx.deltaTime * this.fallingVelocity;
      this.group.position.add(
        new THREE.Vector3(
          this.lastDirection.x,
          this.lastDirection.y,
          0
        ).multiplyScalar(MOVEMENT_SPEED * ctx.deltaTime)
      );
    }
  }

  teardown(): void {}
}
