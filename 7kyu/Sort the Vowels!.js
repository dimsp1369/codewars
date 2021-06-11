// Task
// Write a function which takes a input string s and return a string in the following way:
//
//
//     C|                          R|
//     |O                          n|
// D|                          d|
// "Codewars" =>  |E       "Rnd Te5T"  =>      |
// W|                          T|
// |A                          |e
// R|                          5|
// S|                          T|
//
// Notes:
//
// List all the Vowels on the right side of |
// List every character except Vowels on the left side of |
// Case doesn't matter
// Each line is seperated with \n
// Invalid input ( undefined / null / integer ) should return an empty string


function sortVowels(s){
    if (typeof s !== 'string') return ''
    const vowels = 'euioaEUIOA'.split('')
    const arrS = s.split('')
    let res = ''
    for (let i = 0; i < arrS.length; i++) {
        if (vowels.includes(arrS[i])) {
            res += '|' + arrS[i] + '\n'
        } else {
            res += arrS[i] + '|' + '\n'
        }
    }
    return res.split('').slice(0, -1).join('')
}