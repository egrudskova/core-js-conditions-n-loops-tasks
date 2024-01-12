/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max;
  if (a > c) {
    if (a > b) {
      max = a;
    } else {
      max = b;
    }
  } else if (b > c) {
    max = b;
  } else {
    max = c;
  }

  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) {
    return true;
  }
  for (let i = -7; i < 8; i += 1) {
    if (
      queen.x + i === king.x &&
      (queen.y + i === king.y || queen.y - i === king.y)
    )
      return true;
  }
  return false;
}
/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  let isIsosceles = false;
  if ((a === b || b === c || a === c) && a + b > c && a + c > b && b + c > a) {
    isIsosceles = true;
  }
  return isIsosceles;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let res = '';
  let n = num;

  while (n >= 0) {
    if (n >= 10) {
      res += 'X';
      n -= 10;
    } else {
      switch (n) {
        case 0:
          res += '';
          break;
        case 1:
          res += 'I';
          break;
        case 2:
          res += 'II';
          break;
        case 3:
          res += 'III';
          break;
        case 4:
          res += 'IV';
          break;
        case 5:
          res += 'V';
          break;
        case 6:
          res += 'VI';
          break;
        case 7:
          res += 'VII';
          break;
        case 8:
          res += 'VIII';
          break;
        case 9:
          res += 'IX';
          break;
        default:
          break;
      }
      break;
    }
  }
  return res;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let res = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    const currentChar = numberStr[i];

    switch (currentChar) {
      case '0':
        res += 'zero ';
        break;

      case '1':
        res += 'one ';
        break;

      case '2':
        res += 'two ';
        break;

      case '3':
        res += 'three ';
        break;

      case '4':
        res += 'four ';
        break;

      case '5':
        res += 'five ';
        break;

      case '6':
        res += 'six ';
        break;

      case '7':
        res += 'seven ';
        break;

      case '8':
        res += 'eight ';
        break;

      case '9':
        res += 'nine ';
        break;

      case '.':
        res += 'point ';
        break;

      case '-':
        res += 'minus ';
        break;

      case ',':
        res += 'point ';
        break;

      default:
        res += currentChar;
    }
  }

  let trimmedRes = '';
  for (let i = 0; i < res.length - 1; i += 1) {
    trimmedRes += res[i];
  }

  return trimmedRes;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < Math.floor(str.length / 2); i += 1) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let idx = -1;

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      idx = i;
    }
  }
  return idx;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let isContained = false;
  let number = num;

  while (number >= 1) {
    if (number % 10 === digit) {
      isContained = true;
    }
    number = Math.floor(number / 10);
  }

  return isContained;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let sumLeft = 0;
    let sumRight = 0;

    for (let j = 0; j < i; j += 1) {
      sumLeft += arr[j];
    }

    for (let k = arr.length - 1; k > i; k -= 1) {
      sumRight += arr[k];
    }

    if (sumLeft === sumRight) {
      return i;
    }
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(/* size */) {
  throw new Error('Not implemented');
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const newMatrix = matrix;
  const len = newMatrix.length;

  for (let i = 0; i < len; i += 1) {
    for (let j = i + 1; j < len; j += 1) {
      const temp = matrix[i][j];
      newMatrix[i][j] = matrix[j][i];
      newMatrix[j][i] = temp;
    }
  }

  for (let i = 0; i < len; i += 1) {
    for (let j = 0; j < Math.floor(len / 2); j += 1) {
      const temp = newMatrix[i][j];
      newMatrix[i][j] = newMatrix[i][len - 1 - j];
      newMatrix[i][len - 1 - j] = temp;
    }
  }

  return newMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */

// Implementation of merge sort
function merge(left, right) {
  const result = new Array(left.length + right.length);
  let leftIndex = 0;
  let rightIndex = 0;
  let resultIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result[resultIndex] = left[leftIndex];
      leftIndex += 1;
    } else {
      result[resultIndex] = right[rightIndex];
      rightIndex += 1;
    }
    resultIndex += 1;
  }

  while (leftIndex < left.length) {
    result[resultIndex] = left[leftIndex];
    leftIndex += 1;
    resultIndex += 1;
  }

  while (rightIndex < right.length) {
    result[resultIndex] = right[rightIndex];
    rightIndex += 1;
    resultIndex += 1;
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = new Array(middle);
  const right = new Array(arr.length - middle);

  for (let i = 0; i < middle; i += 1) {
    left[i] = arr[i];
  }

  for (let i = middle; i < arr.length; i += 1) {
    right[i - middle] = arr[i];
  }
  return merge(mergeSort(left), mergeSort(right));
}

function sortByAsc(arr) {
  const result = arr;
  const sorted = mergeSort(arr);
  for (let i = 0; i < arr.length; i += 1) {
    result[i] = sorted[i];
  }
  return result;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let result = str;
  const arr = [str];

  for (let i = 1; i <= iterations; i += 1) {
    let odd = '';
    let even = '';
    for (let j = 0; j < result.length; j += 1) {
      if (j % 2) {
        odd += result[j];
      } else {
        even += result[j];
      }
    }
    result = `${even}${odd}`;
    arr[i] = result;
    if (result === str) {
      const idx = iterations % i;
      return arr[idx];
    }
  }
  return result;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(/* number */) {
  throw new Error('Not implemented');
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
