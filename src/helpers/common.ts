import { smootherstep } from "three/src/math/MathUtils";

export function range(from: number, to: number): number[] {
  if (from > to) throw new Error(`Invalid from-to: ${from}, ${to}`);

  const count = to - from + 1;
  return new Array(count).fill(0).map((_, index) => index + from);
}

export function random(from: number, to: number): number {
  if (from > to) throw new Error(`Invalid from-to: ${from}, ${to}`);

  return Math.random() * (to - from) + from;
}

export function smoothPingPong(time: number) {
  let t;
  if (time % 2 < 1) {
    t = time % 2;
  } else {
    t = 2 - (time % 2);
  }

  return smootherstep(t, 0, 1);
}

export function slerp(time: number, from: number, to: number) {
  const progress = smootherstep(time, 0, 1);
  return from + (to - from) * progress;
}
