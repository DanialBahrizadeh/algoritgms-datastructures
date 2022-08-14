// function resursiveBinarySearch(arr, target) {
//   while (true) {
//     let midpoint = Math.floor(arr.length / 2);

//     if (arr[midpoint] === target) return true;

//     if (arr[midpoint] < target) {
//       arr.reverse();
//       arr.length -= midpoint;
//       arr.reverse();
//     } else {
//       arr.length -= midpoint;
//     }
//     if (arr.length <= 1) return false;
//   }
// }

/**
 *
 * @param {boolean} result
 */

function verify(result) {
  console.log(`The Target found: ${result}`);
}

/**
 *
 * @param {number[]} arr
 * @param {number} target
 */

const resursiveBinarySearch = (arr, target) => {
  if (arr.length === 0) return false;

  const midpoint = Math.floor(arr.length / 2);

  if (arr[midpoint] === target) return true;

  if (arr[midpoint] < target) {
    return resursiveBinarySearch(arr.slice(midpoint + 1), target);
  } else {
    return resursiveBinarySearch(arr.slice(0, midpoint), target);
  }
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = resursiveBinarySearch(numbers, 12);
verify(result);
result = resursiveBinarySearch(numbers, 9);
verify(result);
