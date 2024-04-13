import * as THREE from "three";

export enum Tile {
  Ground = "X",
  Gap = " ",
}

export interface Map {
  readonly width: number;
  readonly height: number;
  readonly depth: number;
  at(x: number, y: number): Tile;
}

export interface Level {
  index: number;
  map: Map;
  playerStartLocation: THREE.Vector2;
  catStartLocations: THREE.Vector2[];
  goalLocation: THREE.Vector2;
}

function createLevel(index: number, levelDefinitions: string[]): Level {
  const levelDefinition = levelDefinitions[levelDefinitions.length - 1];

  const rawRows = levelDefinition
    .split("\n")
    .filter((row) => row.trim().length > 0)
    .map((row) => row.split(""))
    .reverse();

  const minFirstNonEmpty = Math.min(
    ...rawRows.map((row) => row.findIndex((val) => val !== " "))
  );
  const maxLastNonEmpty = Math.max(
    ...rawRows.map(
      (row) => row.length - [...row].reverse().findIndex((val) => val !== " ")
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
  let goalLocation: THREE.Vector2 | undefined;
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
          playerStartLocation = new THREE.Vector2(columnIndex, rowIndex);
          return Tile.Ground;
        }
        case "C":
          catStartLocations.push(new THREE.Vector2(columnIndex, rowIndex));
          return Tile.Ground;
        case "G":
          if (goalLocation) {
            throw new Error("Level contains more than one goal location");
          }
          goalLocation = new THREE.Vector2(columnIndex, rowIndex);
          return Tile.Ground;
        default:
          throw new Error(`Unrecognized tile: ${tileDefinition}`);
      }
    });
  });

  if (!playerStartLocation) {
    throw new Error("No level start location");
  }

  if (!goalLocation) {
    throw new Error("No goal location");
  }

  return {
    index,
    map: {
      width: levelWidth,
      height: levelHeight,
      depth: 1,
      at(x, y) {
        if (x < 0 || y < 0 || x >= levelWidth || y >= levelHeight) {
          return Tile.Gap;
        }

        return tiles[y][x];
      },
      ...{ tiles },
    },
    playerStartLocation,
    catStartLocations,
    goalLocation,
  };
}

export const LEVELS: Level[] = [
  createLevel(0, [
    `
        XXXXXXXXXXXXX
        XXXXXXXXXXXXX
        XXGXPXXXXCXXX
        XXXXXXXXXXXXX
        XXXXXXXXXXXXX
    `,
  ]),
  createLevel(1, [
    `
        XXXXX   XXXXX
        XXXXXXXXXXCXX
        XXPXX   XXXXX
        XXXXX     X  
        XXGXX   XXXXX
        XXXXXXXXXXCXX
        XXXXX   XXXXX
    `,
  ]),
];
