 if (!Array.isArray(arr) || arr.length === 0 || arr.length === 1) return undefined;

  let max = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num < max && num > secondMax) {
      secondMax = num;
    }
  }

  // If secondMax was never updated, it means all elements were the same
  if (secondMax === -Infinity) {
    return max; // Condition 5: return the highest if all are same
  }

  return secondMax;