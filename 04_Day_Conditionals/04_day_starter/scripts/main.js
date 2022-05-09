// this is your main.js script

//alert('Open the browser console whenever you work on JavaScript')
//1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to  wait for the number of years he neds to turn 18.


// function findAge(age){
//     if(age > 18){
//         alert(`you are old enough to drive`);
//     }
//     else{
//         let age1 = 18 - age;
//         alert(`wait for ${age1} years to turn on`)
//     }
// }
// //findAge(30);
// findAge(15);

//If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

// let a = 4
// let b = 3

// function findGreater(){
//     let a = 4
//     let b = 3

//     if(a > b){
//         console.log(`${a} is less than ${b}`);
//     }
//     else{
//         console.log(`${a} is less than ${b}`);
//     }
// }
// findGreater();
let a = 4
let b = 3
console.log(a>b ? `${a} is less than ${b}` :`${a} is less than ${b}`)

//Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

// function findEven(a){
//     if(a % 2 === 0){
//         console.log(`${a} is even number`);
//     }
//     else{
//         console.log(`${a} is an odd number`)
//     }
// }
// findEven(4);



// 1. Write a code which  can give grades to students according to theirs scores:
//    - 80-100, A
//    - 70-89, B
//    - 60-69, C
//    - 50-59, D
//    - 0-49, F

// function findGrades(per){
   
// switch (true) {
//   case (per <= 100 && per >= 80) :
//     console.log('A')
//     break
//   case (per <= 89 && per >= 70):
//     console.log('B')
//     break
//   case (per <= 69 && per >= 60):
//     console.log('C')
//     break
//     case (per <= 59 && per >= 50):
//     console.log('D')
//     break
//     case(per <= 49 && per >= 0):
//     console.log('F')
//   default:
//     console.log('enter correct per')
// }
// }
// findGrades(88);
// 1. Check if the season is Autumn, Winter, Spring or Summer.
//    If the user input is :
//    - September, October or November, the season is Autumn.
//    - December, January or February, the season is Winter.
//    - March, April or May, the season is Spring
//    - June, July or August, the season is Summer

function findSeason(month){
   
    let arr1 = ['September','October','November'];
    let arr2 = ['December','January','February'];
    let arr3 = ['March','April','May']
    let arr4 = ['June','July','August']

    for(let i = 0;i<=arr1.length;i++){
        if(month == arr1[i]){
            console.log('Autumn')
        }
    }
    for(let j = 0;j<=arr2.length;j++){
        if(month == arr2[j]){
            console.log('Winter')
        }
    }
    for(let k = 0;k<=arr3.length;k++){
        if(month == arr3[k]){
            console.log('Spring')
        }
    }
    for(let l = 0;l<=arr4.length;l++){
        if(month == arr4[l]){
            console.log('Summer')
        }
    }
    
}
findSeason("July");
// 1. Check if a day is weekend day or a working day. Your script will take day as an input.

// ```sh
//     What is the day  today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.
//   ```

// function findWeekDay(day){
//     if(day == 'Saturday' && day == 'Sunday'){
//         console.log("Day is a weekend");
//     }
//     else{
//         console.log("It's a working day");
//     }
// }
// findWeekDay('Monday');
// ### Exercises: Level 3

// 1. Write a program which tells the number of days in a month.

//   ```sh
//     Enter a month: January
//     January has 31 days.

//     Enter a month: JANUARY
//     January has 31 day

//     Enter a month: February
//     February has 28 days.

//     Enter a month: FEbruary
//     February has 28 days.
//   ```
// function findDays(month){
//     let arr1 = ["January","March","May",'July',"August","October","December"];
//     let arr2 = ['April','June','September','November'];
    
//     for(let i =0;i< arr1.length;i++){
//         if(month == arr1[i]){
//             console.log(`${month} has 31 days`);
//         }
//     }
//     for(let j =0;j< arr2.length;j++){
//         if(month == arr2[j]){
//             console.log(`${month} has 30 days`);
//         }
//     }
//     if(month == 'February'){
//         console.log(`${month} has 28 days`)
//     }
    
// }
// findDays('July');
// 1. Write a program which tells the number of days in a month, now consider leap year.