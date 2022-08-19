import { performance } from "perf_hooks";

function quickSort(numbers) {
  if (numbers.length <= 1) return numbers;
  const pivot = numbers.shift();
  const lessThenNumbers = [];
  const greaterThanNumbers = [];
  numbers.forEach((num) => {
    return num <= pivot
      ? lessThenNumbers.push(num)
      : greaterThanNumbers.push(num);
  });
  return [
    ...quickSort(lessThenNumbers),
    pivot,
    ...quickSort(greaterThanNumbers),
  ];
}
let arr = [];
for (let i = 0; i < 10000; i++) {
  arr.push(Math.floor(Math.random() * 10000));
}
let perf = performance.now();
arr = quickSort(arr);
console.log(performance.now() - perf);
console.log(arr);
