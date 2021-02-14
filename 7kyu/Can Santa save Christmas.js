// Can Santa save Christmas?
//     Oh no! Santa's little elves are sick this year. He has to distribute the presents on his own.
//
// But he has only 24 hours left. Can he do it?
//
//     Your Task:
// You will get an array as input with time durations as string in the following format: HH:MM:SS. Each duration
// is a present Santa has to distribute. Determine whether he can do it in 24 hours or not.


function determineTime(durations){
    const time = durations.map(el => el.split(':'))
    let HH = time.map(el => +el[0]).reduce((el, s) => el + s, 0) * 3600
    let MM = time.map(el => +el[1]).reduce((el, s) => el + s, 0) * 60
    let SS = time.map(el => +el[2]).reduce((el, s) => el + s, 0)
    return (HH + MM + SS) <= 24 * 3600
}

//TESTS

Test.assertEquals(determineTime(["00:30:00", "02:30:00", "00:15:00"]), true);
Test.assertEquals(determineTime([]), true);
Test.assertEquals(determineTime(["12:00:00", "12:00:00"]), true);
Test.assertEquals(determineTime(["06:00:00","12:00:00","06:30:00"]), false);