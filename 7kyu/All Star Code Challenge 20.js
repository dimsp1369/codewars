// https://www.codewars.com/kata/5865a75da5f19147370000c7/train/javascript
//
//     This Kata is intended as a small challenge for my students
//
// All Star Code Challenge #20
//
// Create a function called addArrays() that combines two arrays of equal length, summing each element of the first
// with the corresponding element in the second, returning the "combined" summed array.
//     Raise an error if input arguments are not of equal length.
//
// addArrays([1,2],[4,5]); // => [5,7]
// addArrays([1,2,3],[4,5]); // => Error
// Note:
//     Expect array input to either contain numbers or strings only
// The function should also allow for concatenating string
//
// addArrays(["a"],["b"]) // => ["ab"]

function addArrays(a1, a2) {
    let sum = []
    if (a1.length !== a2.length) throw Error("Error");
    for (let i = 0, j = 0; i < a1.length, j < a2.length; i++, j++) {
        sum.push(a1[i] + a2[j])
    }
    return sum
}