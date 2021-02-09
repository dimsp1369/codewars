// In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.
//
//     For example:
//
//     "This Is A Test" ==> "TIAT"

//Solution 1

function makeString(s){
    let arr = s.split(' ')
    let str = ''
    for (let i = 0; i < arr.length; i++) {
        str += arr[i][0]
    }
    return str
}

//Solution 2

function makeString(s){
    return s.split(' ').map(el => el[0]).join('')
}



Test.assertEquals(makeString("sees eyes xray yoat"), "sexy", "Wrong result for 'sees eyes xray yoat'")
Test.assertEquals(makeString("brown eyes are nice"), "bean", "Wrong result for 'brown eyes are nice'")
Test.assertEquals(makeString("cars are very nice"), "cavn", "Wrong result for 'cars are very nice'")
Test.assertEquals(makeString("kaks de gan has a big head"), "kdghabh", "Wrong result for 'kaks de gan has a big head'")
