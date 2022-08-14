/**
 *
 * @param {any[]} arr
 * @param {any} target
 * @returns {number}
 */

function binarySearch(arr, target) {
  let first = 0;
  let last = arr.length - 1;

  while (first <= last) {
    let midpoint = Math.floor((first + last) / 2);

    if (arr[midpoint] === target) {
      return midpoint;
    } else if (arr[midpoint] < target) {
      first = midpoint + 1;
    } else {
      last = midpoint - 1;
    }
  }

  return -1;
}

/**
 * chack if its found or not
 *
 * @param {number} index
 * @returns {string}
 */

function verify(index) {
  index === -1
    ? console.log("Target not found in list")
    : console.log(`Target fount at index: ${index}`);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = binarySearch(numbers, 6);

verify(result);
