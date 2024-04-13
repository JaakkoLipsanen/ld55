import * as THREE from "three";
import { GameplayScreen } from "./screens/gameplay-screen";
import { createRenderer } from "./renderer";
import { Screen } from "./screens/screen";
import { LEVELS } from "./model/level";
import { InputState } from "./input";

export interface SetupContext {}
export interface UpdateContext extends SetupContext {
  deltaTime: number;
  totalTime: number;

  input: InputState;

  actions: {
    changeScreen(screen: Screen): void;
  };
}

function createInitialScreen(): Screen {
  return new GameplayScreen(LEVELS[0]);
}

function main() {
  const rootScene = new THREE.Scene();
  rootScene.fog = new THREE.Fog("#DCF3FF", 100, 200);
  const renderer = createRenderer();

  rootScene.background = new THREE.Color("#DCF3FF");

  let currentScreen: Screen;
  let screenChangedDuringUpdate = false;
  function changeScreen(newScreen: Screen) {
    if (currentScreen) {
      currentScreen.teardown();
      rootScene.remove(currentScreen.getScene());
    }

    newScreen.setup({});
    rootScene.add(newScreen.getScene());
    currentScreen = newScreen;
    screenChangedDuringUpdate = true;
  }
  changeScreen(createInitialScreen());

  const clock = new THREE.Clock();
  const input = new InputState();
  let totalTime = 0;
  function animate() {
    requestAnimationFrame(animate);

    const deltaTime = clock.getDelta();
    totalTime += deltaTime;

    const updateContext: UpdateContext = {
      deltaTime,
      totalTime,
      input,
      actions: {
        changeScreen,
      },
    };

    currentScreen.update(updateContext);
    input.postUpdate();

    if (!screenChangedDuringUpdate) {
      renderer.render(rootScene, currentScreen.getCamera());
    }

    screenChangedDuringUpdate = false;
  }

  animate();
}

main();
