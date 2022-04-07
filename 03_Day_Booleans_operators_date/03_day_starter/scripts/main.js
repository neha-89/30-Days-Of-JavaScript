// this is your main.js script// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
// const firstName = "Neha",
// const lastName = "Sontakke",
// const country = "India",
// const city = "Pune",
// age = 33,
// isMarried = true,
// 2. Check if type of '10' is equal to 10
console.log('10' == 10);
// 3. Check if parseInt('9.8') is equal to 10
console.log(parseInt(9.8)==10);
// 4. Boolean value is either true or false.
//    1. Write three JavaScript statement which provide truthy value.
let num = 454;
let num1 = true;
let num3 = -454;
//    2. Write three JavaScript statement which provide falsy value.
//0,null,false

// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
  //  1. 4 > 3 //true
  //  2. 4 >= 3//false
  //  3. 4 < 3//false
  console.log(4 <= 3);
  //  4. 4 <= 3//false
  //  5. 4 == 4 //true
  //  6. 4 === 4//true
  //  7. 4 != 4//false
  //  8. 4 !== 4//false
  //  9. 4 != '4'//false
  //  10. 4 == '4'//true
  //  11. 4 === '4'//false
//    12. Find the length of python and jargon and make a falsy comparison statement.

// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
//    1. 4 > 3 && 10 < 12//true
   console.log(!(4 < 3)) //false
//    3. 4 > 3 || 10 < 12//true
//    4. 4 > 3 || 10 > 12//true
//    5. !(4 > 3)//false
//    6. !(4 < 3)//true
//    7. !(false)//true
//    8. !(4 > 3 && 10 < 12)//false
//    9. !(4 > 3 && 10 > 12)//true
//    10. !(4 === '4')//true
//    11. There is no 'on' in both dragon and python

// 7. Use the Date object to do the following activities
//    1. What is the year today?
let now = new Date();
console.log(now.getFullYear());
//    2. What is the month today as a number?
console.log(now.getMonth());
//    3. What is the date today?
console.log(now.getDate());
//    4. What is the day today as a number?
console.log(now.getDay());
//    5. What is the hours now?
console.log(now.getHours());
//    6. What is the minutes now?
console.log(now.getMinutes());
//    7. Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(now.getTime(1-1-1970));