/**
 * Returns the index position of the target if found, else returns None
 *
 * @param {any[]} arr
 * @param {any} target
 *
 * @return {number}
 */

function linearSearch(arr, target) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
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

const result = linearSearch(numbers, 6);

verify(result);
