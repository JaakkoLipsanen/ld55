import * as THREE from "three";

import { UpdateContext } from "../main";
import { EntityCollection } from "./entity-collection";

export abstract class Entity {
  protected readonly group: THREE.Group;
  constructor(protected readonly entityCollection: EntityCollection) {
    this.group = new THREE.Group();
  }

  getGroup(): THREE.Group {
    return this.group;
  }

  abstract setup(): void;
  abstract teardown(): void;
  abstract update(ctx: UpdateContext): void;
}
