/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  return n
    .toString()
    .split('')
    .reduce((acc, _, index, arr) => {
      const copyArr = [...arr];
      delete copyArr[index];
      const currentValue = Number(copyArr.join(''));
      if (currentValue > acc) {
        return currentValue;
      }
      return acc;
    }, 0);
}

module.exports = deleteDigit;
