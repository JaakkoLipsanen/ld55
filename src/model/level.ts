import * as THREE from "three";

export enum Tile {
  Ground = "X",
  Gap = " ",
}

export interface Map {
  readonly width: number;
  readonly height: number;
  at(x: number, y: number): Tile;
}

export interface Level {
  map: Map;
  playerStartLocation: THREE.Vector2;
  catStartLocations: THREE.Vector2[];
}

function createLevel(levelDefinition: string): Level {
  const rawRows = levelDefinition
    .split("\n")
    .filter((row) => row.trim().length > 0)
    .map((row) => row.split(""));

  const minFirstNonEmpty = Math.min(
    ...rawRows.map((row) => row.findIndex((val) => val !== " "))
  );
  const maxLastNonEmpty = Math.max(
    ...rawRows.map(
      (row) =>
        row.length - 1 - [...row].reverse().findIndex((val) => val !== " ")
    )
  );

  const trimmedRows = rawRows.map((row) =>
    row.slice(minFirstNonEmpty, maxLastNonEmpty)
  );

  const levelWidth = trimmedRows[0].length;
  const levelHeight = trimmedRows.length;
  if (trimmedRows.some((row) => row.length !== levelWidth)) {
    throw new Error("Inconsistent row length");
  }

  let playerStartLocation: THREE.Vector2 | undefined;
  const catStartLocations: THREE.Vector2[] = [];

  const tiles = trimmedRows.map((rowDefinition, rowIndex) => {
    return rowDefinition.map((tileDefinition, columnIndex) => {
      switch (tileDefinition) {
        case "X":
          return Tile.Ground;
        case " ":
          return Tile.Gap;
        case "P": {
          if (playerStartLocation) {
            throw new Error(
              "Level contains more than one player start location"
            );
          }
          playerStartLocation = new THREE.Vector2(rowIndex, columnIndex);
          return Tile.Ground;
        }
        case "C":
          catStartLocations.push(new THREE.Vector2(rowIndex, columnIndex));
          return Tile.Ground;
        default:
          throw new Error(`Unrecognized tile: ${tileDefinition}`);
      }
    });
  });

  if (!playerStartLocation) {
    throw new Error("No level start location");
  }

  return {
    map: {
      width: levelWidth,
      height: levelHeight,
      at(x, y) {
        return tiles[y][x];
      },
      ...{ tiles },
    },
    playerStartLocation,
    catStartLocations,
  };
}

export const LEVELS: Level[] = [
  createLevel(
    `
        XXXXXXXXXXXXX
        XXXXXX XXXXXX
        XXPXX   XXCXX
        XXXXXX XXXXXX
        XXXXXXXXXXXXX
    `
  ),
];
