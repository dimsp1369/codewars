// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return
// as shown below. Index 0 will be considered even.
//
//     For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
//
//     The input will be a lowercase string with no spaces.
//
//     Good luck!
//
//     If you like this Kata, please try:
//
// Indexed capitalization
//
// Even-odd disparity

function capitalize(s){
    let arr1 = []
    let arr2 = []
    for (let i = 0; i < s.length; i++) {
        if ( i % 2 === 0 ) {
            arr1.push(s[i].toUpperCase())
            arr2.push(s[i])
        } else {
            arr2.push(s[i].toUpperCase())
            arr1.push(s[i])
        }
    }
    return [arr1.join(''), arr2.join('')]
};