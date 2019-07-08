// HASH TABLE

const hash = (key, size) => {
  let hashedKey = 0
  for (let i = 0; i < key.length; i++) {
    hashedKey += key.charCodeAt(i)
  }
  return hashedKey % size
}

class repeatword {
  constructor() {
    this.size = 20
    this.buckets = Array(this.size) 

    // populate each bucket with a Map()
    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = new Map()
    }
  }

  insert(key, value) {
    let idx = hash(key, this.size) 
    this.buckets[idx].set(key, value)
  }

  remove(key) {
    let idx = hash(key, this.size)
    let deleted = this.buckets[idx].get(key)
    this.buckets[idx].delete(key)
    return deleted 
  }

  search(key) {
    let idx = hash(key, this.size)
    return this.buckets[idx].get(key)
  }
}

const hashTable = new repeatword()

repeatword.insert('serena', 'moon')
repeatword.insert('amy', 'mercury')
repeatword.insert('rei', 'mars')
repeatword.insert('lita', 'jupiter')
repeatword.insert('mina', 'venus')
repeatword.insert('darien', 'tuxedo mask')

// hashTable.search('rei')
// hashTable.search('lita')
// hashTable.search('serena')

// hashTable.remove('darien')
// hashTable.remove('mina')
console.log(repeatword.insert('serena', 'moon'))

console.log(repeatword)

// Adding a key/value to your hashtable results in the value being in the data structure
// Retrieving based on a key returns the value stored
// Successfully returns null for a key that does not exist in the hashtable
// Successfully handle a collision within the hashtable
// Successfully retrieve a value from a bucket within the hashtable that has a collision
// Successfully hash a key to an in-range value
describe('hashtable',()=>{
  it('it can serch for key', () => {
    expect(repeatword.search('rei')).toBe('mars')
  }) 
});

repeatword =("Once upon a time, there was a brave princess who...");