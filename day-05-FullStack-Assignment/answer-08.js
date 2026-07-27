function createCounter(initialValue = 0) {
  let count = initialValue; // Private variable trapped inside closure

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getValue() {
      return count;
    },
    reset() {
      count = initialValue;
      return count;
    }
  };
}

