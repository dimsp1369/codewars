// A number is a Kaprekar number if its square can be split up into two parts which sum up to the original number. (https://en.wikipedia.org/wiki/Kaprekar_number )
//
// For example, the following are Kaprekar numbers:
//
//     9: 9^2=81 and 8+1=9.
// 45: 45^2=2025 and 20+25=45
// 2223: 2223^2=4941729 and 494+1729=2223
// Create a function that - if the input is a Kaprekar number - outputs the index that splits the square into the two parts
// that sum to the original number. For non-Kaprekar numbers, the output should be -1.
//
// E.g Given an input of 2223, the square will be 4941729. 4941729 has to be split before the 3rd index to get 494 and 1729,
//     which sum to the original number 2223. So for 2223, the function should output 3.
//
// Examples:
//
//     9   -> 1
// 45  -> 2
// 2223   -> 3
// 5050   -> 4
// 5051   -> -1
// Note:
//
//     The function should also work in cases where there are leading zeros. e.g For 99999, its square is 9999800001, which
// can be split into 99998 and 00001 to sum to the original number 99999.
// 1 is a Kaprekar number as 1^2=1 and 0+1=1. Given an input of 1, the desired output is 0.


function kaprekarSplit(n){
    if (n === 1) return 0
    let pow = (n ** 2).toString().split('')
    let value = 0
    let x = 0
    let index = 0
    for (let i = 0; i <= pow.length; i++) {
        let copy = [...pow]
        x = copy.splice(i + 1)
        value = +x.join('') + +copy.join('')
        if (n === value) {
            index = i + 1
            break
        } else {
            index = -1
        }
    }
    return index
}