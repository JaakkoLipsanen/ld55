import { UpdateContext } from "../main";
import { Map } from "../model/level";
import { Entity } from "./entity";
import { EntityCollection } from "./entity-collection";

export class MapEntity extends Entity {
  constructor(entityCollection: EntityCollection, map: Map) {
    super(entityCollection);
  }
  setup(): void {}

  update(ctx: UpdateContext): void {}
}
