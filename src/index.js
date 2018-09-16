class Sorter {
  constructor() {
    this.storage = [];
  }
 
   add(element) {
    this.storage.push(element);
  }

   at(index) {
     return this.storage[index];
  }

   get length() {
     return this.storage.length;
  }

   toArray() {
    return this.storage;
  }

   sort(indices) {
    indices.sort((a, b) => a < b ? -1 : (a > b ? 1 : 0)); 
    let length = indices.length;
    for(let j = 0; j < length - 1; j++){
        for (let i = 1; i < length - j; i++){
            if(this.storage[indices[i - 1]] > this.storage[indices[i]]){
                let temp = this.storage[indices[i - 1]];
                this.storage[indices[i - 1]] = this.storage[indices[i]];
                this.storage[indices[i]] = temp;
            }
        }
    }
    return  this.storage;
  }

  setComparator(compareFunction) {
    // return b.this.storage - a.this.storage;
  }
}

module.exports = Sorter;