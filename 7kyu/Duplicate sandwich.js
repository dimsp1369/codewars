// Task
// In this kata you will be given a list consisting of unique elements except for one thing that appears twice.
//
//     Your task is to output a list of everything inbetween both occurrences of this element in the list.
//
//     Examples:
// [0, 1, 2, 3, 4, 5, 6, 1, 7, 8] => [2, 3, 4, 5, 6]
//     ["None", "Hello", "Example", "hello", "None", "Extra"] => ["Hello", "Example", "hello"]
//     [0, 0] => []
//     [true, false, true] => [false]
// "example" => "xampl"
// Notes
// All elements will be the same datatype.
//     All used elements will be primitive.






//TESTS

const {assert,config} = require("chai"); config.truncateThreshold = 0;

describe("Duplicate sandwich", function() {
    it("example tests", function() {
        assert.deepEqual( duplicateSandwich([0, 1, 2, 3, 4, 5, 6, 1, 7, 8]), [2, 3, 4, 5, 6] );
        assert.deepEqual( duplicateSandwich(["None", "Hello", "Example", "hello", "None", "Extra"]), ["Hello", "Example", "hello"] );
        assert.deepEqual( duplicateSandwich([0, 0]), [] );
        assert.deepEqual( duplicateSandwich( [true, false, true]), [false] );
        assert.deepEqual( duplicateSandwich("example"), "xampl" );
    });
});