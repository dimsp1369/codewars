// https://www.codewars.com/kata/525f4206b73515bffb000b21/train/javascript
//
//     We need to sum big numbers and we require your help.
//
//     Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.
//
//     Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// Notes
// The input numbers are big.
//     The input is a string of only digits
// The numbers are positives

function add(num1,num2) {
    const [str1, str2] = [num1, num2].map((el) => el.split('').reverse().join(''));
    const len = num1.length > num2.length ? num1.length : num2.length;
    const result = [];
    let rest = 0;
    for (let i = 0; i < len; i++) {
        const sum = (+str1[i] || 0) + (+str2[i] || 0) + rest;
        rest = sum > 9 ? Math.floor(sum / 10) : 0;
        result.push(sum % 10);
    }
    if (rest !== 0) {
        result.push(rest);
    }
    return result.reverse().join('');
};
