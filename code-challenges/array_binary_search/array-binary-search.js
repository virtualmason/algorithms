
function array_binary_search(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  let mid;
  // console.log(mid);
  while (start !== end) {
    mid = Math.floor((start + end) / 2);
    if (key === arr[mid]) {
      return mid;
    }
    else if (key < arr[mid]) {
      end = mid - 1;
    }
    else if (key > arr[mid]) {
      start = mid + 1;
    }
  }
};

module.exports = array_binary_search;