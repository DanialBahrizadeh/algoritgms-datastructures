import { performance } from "perf_hooks";
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

const unSortedArray = [];
for (let i = 0; i < 10000; i++) {
  unSortedArray.push(Math.floor(Math.random() * 10000));
}
let perf = performance.now();
const sortedArray = mergeSort(unSortedArray);
console.log(performance.now() - perf);
console.log(sortedArray);
