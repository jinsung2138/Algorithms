function solution(numbers) {
let result = numbers.reduce(function add(sum, currValue) {
  return sum + currValue;
}, 0);

const average = result / numbers.length;

    return average;
}