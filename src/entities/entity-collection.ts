import { UpdateContext } from "../main";
import { CameraEntity } from "./camera";
import { Entity } from "./entity";
import * as THREE from "three";

export type ConstructorOf<T extends Entity> = {
  new (...params: any[]): T;
};

export class EntityCollection {
  private entities: Entity[] = [];

  constructor(private readonly scene: THREE.Scene) {}

  add(entity: Entity): void {
    if (this.entities.includes(entity)) {
      throw new Error(`Duplicate entity: ${entity}`);
    }

    this.entities.push(entity);
    this.scene.add(entity.getGroup());
    entity.setup();
  }

  remove(entity: Entity): void {
    const index = this.entities.indexOf(entity);
    if (index < 0) {
      throw new Error("Entity not found for removal");
    }

    this.entities.splice(index, 1);
    entity.teardown();
    this.scene.remove(entity.getGroup());
  }

  findOne<T extends Entity>(type: ConstructorOf<T>) {
    return this.entities.find((entity) => entity instanceof type) as T;
  }

  findAll<T extends Entity>(type: ConstructorOf<T>) {
    return this.entities.filter((entity) => entity instanceof type) as T[];
  }

  update(ctx: UpdateContext): void {
    for (const entity of this.entities) {
      entity.update(ctx);
    }
  }
}
