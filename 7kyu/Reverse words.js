// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
//
//     Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    return str.split(' ').map(el => el.split('').reverse().join('')).join(' ')
}

//TESTS

Test.describe('Sample Tests', _ => {
    Test.it('Should pass Sample tests', _ => {
        Test.assertEquals(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
        Test.assertEquals(reverseWords('apple'), 'elppa');
        Test.assertEquals(reverseWords('a b c d'), 'a b c d');
        Test.assertEquals(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');
    });
});
