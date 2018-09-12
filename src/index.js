class Sorter {
  constructor() {
    this.ar = [];
  }

  add(element) {
    this.ar.push(element);
  }

  at(index) {
    return this.ar[index];
  }

  get length() {
    return this.ar.length;
  }

  toArray() {
    return this.ar;
  }

  sort(indices) {
    return  indices.sort();
  }

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;