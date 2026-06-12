function pseudoRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function makeSparkles(count, seedOffset = 0) {
  return Array.from({ length: count }, (_, i) => {
    const s = i + 1 + seedOffset;
    return {
      x: `${Math.floor(pseudoRandom(s * 13) * 100)}%`,
      y: `${Math.floor(pseudoRandom(s * 17) * 100)}%`,
      size: `${2 + Math.floor(pseudoRandom(s * 23) * 3)}px`,
      duration: `${3 + Math.floor(pseudoRandom(s * 29) * 5)}s`,
      delay: `${Math.floor(pseudoRandom(s * 31) * 4)}s`,
      peak: +(0.5 + pseudoRandom(s * 37) * 0.4).toFixed(2),
    };
  });
}
