/**
 * well return the true or false but will change the array so be carrful
 *
 * @param {any[]} arr
 * @param {number} target
 * @returns {boolean}
 */
function resursiveBinarySearch(arr, target) {
  while (true) {
    let midpoint = Math.floor(arr.length / 2);

    if (arr[midpoint] === target) return true;

    if (arr[midpoint] < target) {
      arr.reverse();
      arr.length -= midpoint;
      arr.reverse();
    } else {
      arr.length -= midpoint;
    }
    if (arr.length <= 1) return false;
  }
}

/**
 *
 * @param {boolean} result
 */

function verify(result) {
  console.log(`The Target found: ${result}`);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = resursiveBinarySearch(numbers, 10);
verify(result);
