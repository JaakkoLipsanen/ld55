export function range(from: number, to: number): number[] {
  if (from > to) throw new Error(`Invalid from-to: ${from}, ${to}`);

  const count = to - from + 1;
  return new Array(count).fill(0).map((_, index) => index + from);
}

export function random(from: number, to: number): number {
  if (from > to) throw new Error(`Invalid from-to: ${from}, ${to}`);

  return Math.random() * (to - from) + from;
}
