export class InputState {
  private previouslyPressedDownKeys = new Set<string>();
  private pressedDownKeys = new Set<string>();

  constructor() {
    window.addEventListener("keydown", (e) => {
      this.pressedDownKeys.add(e.key.toUpperCase());
    });
    window.addEventListener("keyup", (e) =>
      this.pressedDownKeys.delete(e.key.toUpperCase())
    );
  }

  isKeyDown(key: string): boolean {
    return this.pressedDownKeys.has(key);
  }

  isNewKeyDown(key: string): boolean {
    return (
      this.pressedDownKeys.has(key) && !this.previouslyPressedDownKeys.has(key)
    );
  }

  isNewKeyRelease(key: string): boolean {
    return (
      this.previouslyPressedDownKeys.has(key) && !this.pressedDownKeys.has(key)
    );
  }

  postUpdate() {
    this.previouslyPressedDownKeys = this.pressedDownKeys;
  }
}
