import * as THREE from "three";
import { UpdateContext } from "../main";
import { Entity } from "./entity";
import { EntityCollection } from "./entity-collection";
import { loadPixelArtTexture } from "../helpers/texture";
import { PlayerEntity } from "./player";
import { vec2ToVec3, vec3ToVec2 } from "../helpers/vector";
import { CameraEntity } from "./camera";
import { MapEntity } from "./map";
import { Tile } from "../model/level";

const MOVEMENT_SPEED = 0.8;
const UNDERFOOT_AREA_SIZE = 0.25;
const RENDER_UNDERFOOT_DEBUG = false;

export class CatEntity extends Entity {
  private randomOffset = Math.random() * 1000;
  private pivot: THREE.Group;
  private summonTarget: PlayerEntity | undefined;
  private isFalling = false;
  private fallingVelocity = 0;

  constructor(
    entityCollection: EntityCollection,
    private readonly initialPosition: THREE.Vector2
  ) {
    super(entityCollection);
  }

  getIsFalling() {
    return this.isFalling;
  }

  setup(): void {
    const texture = loadPixelArtTexture("kissi_2.png");
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      depthWrite: false,
    });

    const spriteGeometry = new THREE.PlaneGeometry(1, 1);
    const spriteMesh = new THREE.Mesh(spriteGeometry, material);
    spriteMesh.position.z = 0.1;
    spriteMesh.position.x = 0;
    spriteMesh.position.y = 0.5;

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
    this.group.position.z = 0;
  }

  startSummoning(player: PlayerEntity) {
    this.summonTarget = player;
  }

  stopSummoning() {
    this.summonTarget = undefined;
  }

  update(ctx: UpdateContext): void {
    this.updateMovement(ctx);
    this.updateRotation(ctx);
    this.updateIsFalling(ctx);
  }

  teardown(): void {}

  private updateMovement(ctx: UpdateContext) {
    if (
      this.summonTarget &&
      !this.isFalling &&
      !this.summonTarget.getIsFalling()
    ) {
      const direction = vec3ToVec2(this.summonTarget.getGroup().position)
        .sub(vec3ToVec2(this.group.position))
        .normalize();

      this.group.position.add(
        vec2ToVec3(direction.multiplyScalar(MOVEMENT_SPEED * ctx.deltaTime))
      );
    }
  }

  private updateRotation(ctx: UpdateContext) {
    this.pivot.up.set(0, 0, 1);
    this.pivot.lookAt(
      this.entityCollection.findOne(CameraEntity).getCamera().position
    );

    const rotationSpeed = this.summonTarget ? 8 : 2;
    const rotationAmount = this.summonTarget ? 0.1 : 0.05;
    this.pivot.rotateOnAxis(
      new THREE.Vector3(0, 0, 1),
      Math.sin((ctx.totalTime + this.randomOffset) * rotationSpeed) *
        rotationAmount
    );
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

      if (tileIndices.every(([x, y]) => map.at(x, y) === Tile.Gap)) {
        this.isFalling = true;
      }
    } else {
      const GRAVITY = 9.81;
      this.fallingVelocity += GRAVITY * ctx.deltaTime;
      this.group.position.z -= ctx.deltaTime * this.fallingVelocity;
    }
  }
}
