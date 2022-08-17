function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let [leftHalf, rightHalf] = spilt(arr);
  let left = mergeSort(leftHalf);
  let right = mergeSort(rightHalf);
  return merge(left, right);
}
function spilt(arr) {
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return [left, right];
}
function merge(left, right) {
  let l = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      l.push(left[i]);
      i++;
    } else {
      l.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    l.push(left[i]);
    i++;
  }
  while (j < right.length) {
    l.push(right[j]);
    j++;
  }
  return l;
}
function verifySort(arr) {
  n = arr.length;
  if (n <= 1) return true;

  return arr[0] < arr[1] && verifySort(arr.slice(1));
}
const unSortedArray = [54, 35, 40, 50, 23, 14, 31, 22, 95, 78];
const sortedArray = mergeSort(unSortedArray);
console.log(sortedArray, `and the array is sorted ${verifySort(sortedArray)}`);
