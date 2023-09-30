function replicate(timesToRepeat, val) {
  if (timesToRepeat <= 0) return [];

  return [val, replicate(timesToRepeat - 1, val)].flat();
}

console.log(replicate(10, -6));
