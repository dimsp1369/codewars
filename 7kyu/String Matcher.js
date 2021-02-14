// isMatching checks if a string can be created by combining and rearranging the letters of two other strings (not case sensitive).
//
// !Spaces will be ignored but special characters and numbers won't match the string and return false.
//
// For example:
//     isMatching("email box", "b aIl", "Mo x e") return true
// but
// isMatching("bouh", "0b", "uh") return false
//
// You need to be able to use all the caracters from the two strings so:
//     isMatching("kata", "kt", "aaa") return false


function isMatching(string, str1, str2) {
    let str = (str1 + str2).replace(/['.', ' ']/g, '').split('')
    let strg = string.replace(/ /g,'').split('')
    console.log(str)
    console.log(strg)
    return strg.includes(...str) && strg.length === str.length
}

//TESTS


Test.describe('isMatching', function() {
    it("returns false for 'bouh'", function() {
        Test.assertEquals(isMatching("bouh", "0", "buh"), false);
    });
    it("returns false for 'kitten'", function() {
        Test.assertEquals(isMatching("kitten", "t", "eink"), false);
    });
    it("returns false for 'mentalist'", function() {
        Test.assertEquals(isMatching("mentalist", "l.st", "metan"), false);
    });
    it("returns true for 'impressionistic'", function() {
        Test.assertEquals(isMatching("impressionistic", "isis isi", "precomnt"), true);
    });
    it("returns true for 'email box'", function() {
        Test.assertEquals(isMatching("email box", "bail", "moxe"), true);
    });
    it("returns false for 'detail'", function() {
        Test.assertEquals(isMatching("detail", "tlei", "dai"), false);
    });
});