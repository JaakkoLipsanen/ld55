import * as THREE from "three";
import { Screen } from "./screen";
import { UpdateContext } from "../main";
import { LEVELS, Level } from "../model/level";
import { EntityCollection } from "../entities/entity-collection";
import { MapEntity } from "../entities/map";
import { CameraEntity } from "../entities/camera";
import { PlayerEntity } from "../entities/player";
import { CatEntity } from "../entities/cat";
import { GoalEntity } from "../entities/goal";
import { vec3ToVec2 } from "../helpers/vector";
import { clamp } from "three/src/math/MathUtils";
import { slerp } from "../helpers/common";
import { OverlayText } from "../entities/overlay-text";

export class GameplayScreen extends Screen {
  private level: Level;
  private entityCollection: EntityCollection;
  private timeSinceScreenLoad = 0;
  private timeSinceFinish = 0;
  private timeSinceFail = 0;
  private wasLevelFinished = false;
  private wasLevelFailed = false;
  private topText: OverlayText;
  private bottomText: OverlayText;

  constructor(level: Level) {
    super();
    this.level = level;
    this.entityCollection = new EntityCollection(this.scene);
  }

  isLevelFinished(): boolean {
    const player = this.entityCollection.findOne(PlayerEntity);
    const cats = this.entityCollection.findAll(CatEntity);
    const goal = this.entityCollection.findOne(GoalEntity);

    if (
      cats.every(
        (cat) =>
          vec3ToVec2(cat.getGroup().position).distanceTo(
            vec3ToVec2(goal.getGroup().position)
          ) < 1
      )
    ) {
      return true;
    }

    return false;
  }

  isLevelFailed(): boolean {
    const player = this.entityCollection.findOne(PlayerEntity);
    const cats = this.entityCollection.findAll(CatEntity);

    return cats.some((cat) => cat.getIsFalling()) || player.getIsFalling();
  }

  setup(): void {
    this.entityCollection.add(
      new MapEntity(this.entityCollection, this.level.map)
    );

    this.entityCollection.add(
      new GoalEntity(this.entityCollection, this.level.goalLocation)
    );

    this.entityCollection.add(new CameraEntity(this.entityCollection));
    this.entityCollection.add(
      new PlayerEntity(this.entityCollection, this.level.playerStartLocation)
    );

    for (const catLocation of this.level.catStartLocations) {
      this.entityCollection.add(
        new CatEntity(this.entityCollection, catLocation)
      );
    }

    this.entityCollection.add(
      (this.topText = new OverlayText(
        this.entityCollection,
        this.level.map,
        true
      ))
    );

    this.entityCollection.add(
      (this.bottomText = new OverlayText(
        this.entityCollection,
        this.level.map,
        false
      ))
    );

    this.topText.showStartText();
    this.bottomText.showControlsText(this.level);
  }

  getCamera(): THREE.Camera {
    return this.entityCollection.findOne(CameraEntity).getCamera();
  }

  update(ctx: UpdateContext): void {
    this.wasLevelFinished = this.isLevelFinished();
    this.wasLevelFailed = this.isLevelFailed();

    this.entityCollection.update(ctx);
    this.timeSinceScreenLoad += ctx.deltaTime;

    this.scene.position.z = -slerp(
      clamp(this.timeSinceScreenLoad / 4 + 0.25, 0, 1),
      -20,
      0
    );

    if (this.isLevelFinished()) {
      this.timeSinceFinish += ctx.deltaTime;
      const isGameFinished = this.level.index === LEVELS.length - 1;
      if (!isGameFinished) {
        this.topText.showLevelFinishedText();
      } else {
        this.topText.showGameFinishedText();
      }

      this.entityCollection.findOne(PlayerEntity).setLevelFinished();

      if (!isGameFinished) {
        if (this.timeSinceFinish > 3) {
          this.scene.position.z = -slerp(
            clamp((this.timeSinceFinish - 3) / 2, 0, 1),
            0,
            40
          );
        }

        if (this.timeSinceFinish > 5) {
          ctx.actions.changeScreen(
            new GameplayScreen(LEVELS[this.level.index + 1])
          );
        }
      }
    }

    if (this.isLevelFailed()) {
      this.timeSinceFail += ctx.deltaTime;
      if (this.timeSinceFail > 2) {
        this.topText.showLevelFailedText();
      }

      this.entityCollection.findOne(PlayerEntity).setLevelFinished();

      if (this.timeSinceFail > 4) {
        this.scene.position.z = -slerp(
          clamp((this.timeSinceFail - 4) / 2, 0, 1),
          0,
          40
        );
      }

      if (this.timeSinceFail > 6) {
        ctx.actions.changeScreen(new GameplayScreen(LEVELS[this.level.index]));
      }
    }
  }

  teardown(): void {}
}
