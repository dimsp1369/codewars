// Given the triangle of consecutive odd numbers:
//
//     1
// 3     5
// 7     9    11
// 13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.:
//
// rowSumOddNumbers(1); // 1
// rowSumOddNumbers(2); // 3 + 5 = 8


// 1
function rowSumOddNumbers(n) {
    let arr = []
    let row = []
    let num = 1
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            row.push(num)
            num +=2
        }
        arr.push(row)
        row = []
    }
    return arr[n - 1].reduce((el, s) => s + el)
}

// 2

function rowSumOddNumbers(n) {
    return Math.pow(n, 3)
}