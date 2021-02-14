// Some people just have a first name; some people have first and last names and some people have first, middle and last names.
//
//     You task is to initialize the middle names (if there is any).
//
// Examples
// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

function initializeNames(name){
    let arrN = name.split(' ')
    if (arrN.length <= 2) {
        return name
    } else {
        let a = arrN.slice(1, -1).map(el => el[0] + '.')
        return [arrN[0], ...a, arrN[arrN.length - 1]].join(' ')
    }
}

//TESTS

Test.describe('Static tests', function(){
    Test.it('Initialize Names', function(){
        Test.assertEquals(initializeNames('Jack Ryan'), 'Jack Ryan','');
        Test.assertEquals(initializeNames('Lois Mary Lane'), 'Lois M. Lane','');
        Test.assertEquals(initializeNames('Dimitri'), 'Dimitri','');
        Test.assertEquals(initializeNames('Alice Betty Catherine Davis'), 'Alice B. C. Davis','');
    });
})