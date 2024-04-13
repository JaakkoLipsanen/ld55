import { Entity } from "./entity";

export type ConstructorOf<T extends abstract new (...args: any) => any> = {
  new (...params: ConstructorParameters<T>): InstanceType<T>;
};

export class EntityCollection {
  private entities: Entity[] = [];

  add(entity: Entity): void {
    if (this.entities.includes(entity)) {
      throw new Error(`Duplicate entity: ${entity}`);
    }

    this.entities.push(entity);
  }

  remove(entity: Entity): void {
    const index = this.entities.indexOf(entity);
    if (index < 0) {
      throw new Error("Entity not found for removal");
    }

    this.entities.splice(index, 1);
  }

  findOne<T extends Entity>(type: any) {
    return this.entities.find((entity) => entity instanceof type) as T;
  }

  findAll<T extends Entity>(type: any) {
    return this.entities.filter((entity) => entity instanceof type) as T[];
  }
}
