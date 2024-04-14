import * as THREE from "three";

export enum Tile {
  Ground = "X",
  Gap = " ",
}

export interface Map {
  readonly width: number;
  readonly height: number;
  readonly depth: number;
  at(x: number, y: number, z: number): Tile;
}

export interface Level {
  index: number;
  map: Map;
  playerStartLocation: THREE.Vector3;
  catStartLocations: THREE.Vector3[];
  goalLocation: THREE.Vector3;
}

function createLevel(index: number, levelDefinitionLayers: string[]): Level {
  let playerStartLocation: THREE.Vector3 | undefined;
  let goalLocation: THREE.Vector3 | undefined;
  const catStartLocations: THREE.Vector3[] = [];

  let minXFirstNonEmptyInAllLayers = 1000;
  let maxXLastNonEmptyInAllLayers = 0;
  let minYFirstNonEmptyInAllLayers = 1000;
  let maxYLastNonEmptyInAllLayers = 0;

  levelDefinitionLayers.forEach((layer) => {
    const rawRows = layer.split("\n").map((row) => row.split(""));

    const mapNotFoundToDefault = (val: number, def: number) =>
      val === -1 ? def : val;
    const firstNonEmptyRow = mapNotFoundToDefault(
      rawRows.findIndex((row) => !row.every((tile) => tile === " ")),
      1000
    );
    const lasNonEmptyRow =
      rawRows.length -
      [...rawRows]
        .reverse()
        .findIndex((row) => !row.every((tile) => tile === " "));

    const firstNonEmptyColumn = Math.min(
      ...rawRows.map((row) =>
        mapNotFoundToDefault(
          row.findIndex((tile) => tile !== " "),
          1000
        )
      )
    );
    const lastNonEmptyColumn = Math.max(
      ...rawRows.map(
        (row) =>
          row.length - [...row].reverse().findIndex((tile) => tile !== " ")
      )
    );

    console.log(
      {
        rawRows,
        levelDefinitionLayers,
        firstNonEmptyColumn,
        lastNonEmptyColumn,
        firstNonEmptyRow,
        lasNonEmptyRow,
      },
      "xx",
      rawRows,
      rawRows.map((r) => r.length),
      rawRows.map(
        (row) =>
          row.length - [...row].reverse().findIndex((tile) => tile !== " ")
      )
    );

    if (firstNonEmptyRow >= 0) {
      minYFirstNonEmptyInAllLayers = Math.min(
        Math.max(firstNonEmptyRow, 0),
        minYFirstNonEmptyInAllLayers
      );
    }

    if (lasNonEmptyRow >= 0) {
      maxYLastNonEmptyInAllLayers = Math.max(
        lasNonEmptyRow,
        maxYLastNonEmptyInAllLayers
      );
    }

    if (firstNonEmptyColumn >= 0) {
      minXFirstNonEmptyInAllLayers = Math.min(
        firstNonEmptyColumn,
        minXFirstNonEmptyInAllLayers
      );
    }

    if (lastNonEmptyColumn >= 0) {
      maxXLastNonEmptyInAllLayers = Math.max(
        lastNonEmptyColumn,
        maxXLastNonEmptyInAllLayers
      );
    }
  });

  if (minXFirstNonEmptyInAllLayers === 1000) minXFirstNonEmptyInAllLayers = 0;
  if (minYFirstNonEmptyInAllLayers === 1000) minYFirstNonEmptyInAllLayers = 0;

  console.log({
    minXFirstNonEmptyInAllLayers,
    maxXLastNonEmptyInAllLayers,
    minYFirstNonEmptyInAllLayers,
    maxYLastNonEmptyInAllLayers,
    levelDefinitionLayers,
  });

  const levelDepth = levelDefinitionLayers.length;
  let levelWidth: number =
    maxXLastNonEmptyInAllLayers - minXFirstNonEmptyInAllLayers;
  let levelHeight: number =
    maxYLastNonEmptyInAllLayers - minYFirstNonEmptyInAllLayers;

  const tileLayers = levelDefinitionLayers
    .reverse()
    .map((levelDefinition, depthIndex) => {
      const rawRows = levelDefinition
        .split("\n")
        .map((row) => row.split(""))
        .reverse();

      const trimmedRows = rawRows
        .slice(minYFirstNonEmptyInAllLayers, maxYLastNonEmptyInAllLayers)
        .map((row) =>
          row.slice(minXFirstNonEmptyInAllLayers, maxXLastNonEmptyInAllLayers)
        );

      while (trimmedRows.length < levelHeight) {
        rawRows.push([]);
      }

      for (const row of trimmedRows) {
        while (row.length < levelWidth) {
          row.push(" ");
        }
      }

      for (const row of rawRows) {
      }

      /*  if (trimmedRows.some((row) => row.length !== levelWidth)) {
        throw new Error("Inconsistent row length");
      } */

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
              playerStartLocation = new THREE.Vector3(
                columnIndex,
                rowIndex,
                depthIndex
              );
              return Tile.Ground;
            }
            case "C":
              catStartLocations.push(
                new THREE.Vector3(columnIndex, rowIndex, depthIndex)
              );
              return Tile.Ground;
            case "G":
              if (goalLocation) {
                throw new Error("Level contains more than one goal location");
              }
              goalLocation = new THREE.Vector3(
                columnIndex,
                rowIndex,
                depthIndex
              );
              return Tile.Ground;
            default:
              throw new Error(`Unrecognized tile: ${tileDefinition}`);
          }
        });
      });

      return tiles;
    });

  if (!playerStartLocation) {
    throw new Error("No level start location");
  }

  if (!goalLocation) {
    throw new Error("No goal location");
  }

  if (!levelWidth || !levelHeight) {
    throw new Error("Level width or height not set");
  }

  return {
    index,
    map: {
      width: levelWidth,
      height: levelHeight,
      depth: levelDepth,
      at(x, y, z) {
        if (
          x < 0 ||
          y < 0 ||
          x >= levelWidth ||
          y >= levelHeight ||
          z < 0 ||
          z >= levelDepth
        ) {
          return Tile.Gap;
        }

        return tileLayers[z][y][x];
      },
      ...{ tileLayers },
    },
    playerStartLocation,
    catStartLocations,
    goalLocation,
  };
}

export const LEVELS: Level[] = [
  createLevel(0, [
    `
        X           X
        
                  
        
        X           X
    `,
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

console.log(LEVELS);
