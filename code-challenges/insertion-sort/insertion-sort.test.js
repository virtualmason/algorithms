

var array = [2, 9, 5, 6, 4, 3, 7, 10, 1, 8];

function insertionSort(array) {
  for(var i = 1; i < array.length; i++) {
    var temp = array[i];
    //temp2
    var j = i - 1;

    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
}


describe("Insertion sort", () => {
  it("sort items", ()=> {
    expect(insertionSort([2, 9, 5, 6, 4, 3, 7, 10, 1, 8])).toEqual([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ])
  });
})

