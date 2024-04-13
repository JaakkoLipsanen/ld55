import { UpdateContext } from "../main";
import { EntityCollection } from "./entity-collection";

export abstract class Entity {
  constructor(protected readonly entityCollection: EntityCollection) {}

  abstract setup(): void;
  abstract update(ctx: UpdateContext): void;
}
