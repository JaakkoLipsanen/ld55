import * as THREE from "three";
import { GameplayScreen } from "./screens/gameplay-screen";
import { createRenderer } from "./renderer";
import { Screen } from "./screens/screen";
import { LEVELS } from "./model/level";

export interface SetupContext {}
export interface UpdateContext extends SetupContext {
  deltaTime: number;

  actions: {
    changeScreen(screen: Screen): void;
  };
}

function createInitialScreen(): Screen {
  return new GameplayScreen(LEVELS[0]);
}

function main() {
  const rootScene = new THREE.Scene();
  const renderer = createRenderer();
  rootScene.background = new THREE.Color(THREE.Color.NAMES.aliceblue);

  let currentScreen: Screen;
  function changeScreen(newScreen: Screen) {
    if (currentScreen) {
      currentScreen.teardown();
      rootScene.remove(currentScreen.getScene());
    }

    newScreen.setup({});
    rootScene.add(newScreen.getScene());
    currentScreen = newScreen;
  }

  changeScreen(createInitialScreen());

  const clock = new THREE.Clock();
  function animate() {
    requestAnimationFrame(animate);

    const updateContext: UpdateContext = {
      deltaTime: clock.getDelta(),
      actions: {
        changeScreen,
      },
    };

    currentScreen.update(updateContext);
    renderer.render(rootScene, currentScreen.getCamera());
  }

  animate();
}

main();
