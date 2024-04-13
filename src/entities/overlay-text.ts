import * as THREE from "three";

import { UpdateContext } from "../main";
import { Entity } from "./entity";
import { EntityCollection } from "./entity-collection";
import { Text } from "troika-three-text";
import { Level, Map } from "../model/level";
import { slerp } from "../helpers/common";

export class OverlayText extends Entity {
  private primaryText: Text;
  private dropshadowText: Text;
  private fadeTextOutInSeconds = 100000;

  constructor(
    entityCollection: EntityCollection,
    private map: Map,
    private top: boolean
  ) {
    super(entityCollection);
  }

  showStartText() {
    this.primaryText.text = "Summon your friends to enjoy picnic!";
    this.dropshadowText.text = "Summon your friends to enjoy picnic!";

    this.primaryText.sync();
    this.dropshadowText.sync();
    this.fadeTextOutInSeconds = 7.5;
  }

  showControlsText(level: Level) {
    this.primaryText.text = `                                   Level ${
      level.index + 1
    }\n                            WASD to move\nSpace to summon your friends towards you!`;
    this.dropshadowText.text =
      "                            WASD to move\nSpace to summon your friends towards you!";

    this.primaryText.fontSize = 0.5;
    this.dropshadowText.fontSize = 0.5;
    this.primaryText.strokeWidth = 0.01;
    this.dropshadowText.strokeWidth = 0.01;
    this.primaryText.sync();
    this.dropshadowText.sync();
    this.fadeTextOutInSeconds = 99999999999;
  }

  showLevelFinishedText() {
    this.primaryText.text = "Jihuu, picnic can start";
    this.dropshadowText.text = "Jihuu, picnic can start";

    this.primaryText.sync();
    this.dropshadowText.sync();
    this.fadeTextOutInSeconds = 99999999;
  }

  showLevelFailedText() {
    this.primaryText.text = "Oh no, some of us didn't make it to the picnic";
    this.dropshadowText.text = "Oh no, some of us didn't make it to the picnic";

    this.primaryText.sync();
    this.dropshadowText.sync();
    this.fadeTextOutInSeconds = 99999999;
  }

  showGameFinishedText() {
    this.primaryText.text =
      "We have had enough picnics now\n See you next summer!";
    this.dropshadowText.text =
      "We have had enough picnics now, see you next summer!";

    this.primaryText.sync();
    this.dropshadowText.sync();
    this.fadeTextOutInSeconds = 99999999;
  }

  setup(): void {
    this.primaryText = new Text();
    this.dropshadowText = new Text();

    this.primaryText.text = "";
    this.primaryText.fontSize = 1;
    this.primaryText.position.x = this.map.width / 2;
    this.primaryText.position.y = this.top ? this.map.height + 2 : -2;
    this.primaryText.position.z = 0;
    this.primaryText.font = "font.ttf";
    this.primaryText.color = "white";
    this.primaryText.strokeColor = "black";
    this.primaryText.strokeWidth = 0.02;
    this.primaryText.anchorX = "center";

    this.dropshadowText.text = "";
    this.dropshadowText.fontSize = 1;
    this.dropshadowText.position.x = this.map.width / 2;
    this.dropshadowText.position.y = this.top ? this.map.height + 2 : -2;
    this.dropshadowText.position.z = -0.1;
    this.dropshadowText.font = "font.ttf";
    this.dropshadowText.color = "gray";
    this.dropshadowText.anchorX = "center";

    this.primaryText.sync();
    this.dropshadowText.sync();

    this.group.add(this.primaryText);
    // this.group.add(this.dropshadowText);
  }
  update(ctx: UpdateContext): void {
    this.fadeTextOutInSeconds -= ctx.deltaTime;

    const opacity =
      this.fadeTextOutInSeconds < 0
        ? slerp(-this.fadeTextOutInSeconds / 4, 1, 0)
        : 1;
    this.primaryText.fillOpacity = opacity;
    this.primaryText.strokeOpacity = opacity;
    this.dropshadowText.fillOpacity = opacity;
  }

  teardown(): void {}
}
