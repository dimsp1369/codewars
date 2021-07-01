// https://www.codewars.com/kata/56ed20a2c4e5d69155000301/train/javascript
//
// You are given a string of n lines, each substring being n characters long. For example:
//
//     s = "abcd\nefgh\nijkl\nmnop"
//
// We will study the "horizontal" and the "vertical" scaling of this square of strings.
//
//     A k-horizontal scaling of a string consists of replicating k times each character of the string (except '\n').
//
// Example: 2-horizontal scaling of s: => "aabbccdd\neeffgghh\niijjkkll\nmmnnoopp"
// A v-vertical scaling of a string consists of replicating v times each part of the squared string.
//
//     Example: 2-vertical scaling of s: => "abcd\nabcd\nefgh\nefgh\nijkl\nijkl\nmnop\nmnop"
// Function scale(strng, k, v) will perform a k-horizontal scaling and a v-vertical scaling.
//
//     Example: a = "abcd\nefgh\nijkl\nmnop"
// scale(a, 2, 3) --> "aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp"
// Printed:
//
//     abcd   ----->   aabbccdd
// efgh            aabbccdd
// ijkl            aabbccdd
// mnop            eeffgghh
// eeffgghh
// eeffgghh
// iijjkkll
// iijjkkll
// iijjkkll
// mmnnoopp
// mmnnoopp
// mmnnoopp
// Task:
//     Write function scale(strng, k, v) k and v will be positive integers. If strng == "" return "".

function scale(str, k, n) {
    if (str === '') return ''
    let arr = str.split('\n').map(el => (el.split('').map(el => el.repeat(k)).join('') + '\n').repeat(n)).join('').trim()
    return arr
}