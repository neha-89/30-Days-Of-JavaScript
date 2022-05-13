

//   const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]

//   const mernStack = ['MongoDB', 'Express', 'React', 'Node']
//   ```

// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop
    // for(let i = 0;i<= 10 ;i++){
    //     console.log(i);
    // }
// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop
    // for(let i = 10;i>= 0 ;i--){
    //     console.log(i);
    // }
// 3. Iterate 0 to n using for loop
// 4. Write a loop that makes the following pattern using console.log():

//    ```js
//        #
//        ##
//        ###
//        ####
//        #####
//        ######
//        #######
//    ```
    //   let string = "";
    //   for(let i = 0;i<= 7 ;i++){
    //       for(let j=0;j<=i;j++){
    //         string += "#";
    //       }
    //       string += "\n";
    //     }
    //     // printing the string
    //     console.log(string);
    
// 5. Use loop to print the following pattern:

//    ```sh
//    0 x 0 = 0
//    1 x 1 = 1
//    2 x 2 = 4
//    3 x 3 = 9
//    4 x 4 = 16
//    5 x 5 = 25
//    6 x 6 = 36
//    7 x 7 = 49
//    8 x 8 = 64
//    9 x 9 = 81
//    10 x 10 = 100
//    ```

// 6. Using loop print the following pattern

//    ```sh
//     i    i^2   i^3
//     0    0     0
//     1    1     1
//     2    4     8
//     3    9     27
//     4    16    64
//     5    25    125
//     6    36    216
//     7    49    343
//     8    64    512
//     9    81    729
//     10   100   1000
//    ```

// 7. Use for loop to iterate from 0 to 100 and print only even numbers

// for(let i =0 ;i<= 100;i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }

// 8. Use for loop to iterate from 0 to 100 and print only odd numbers
// for(let i =0 ;i<= 100;i++){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
// }

// 9. Use for loop to iterate from 0 to 100 and print only prime numbers
// for(let i =0 ;i<= 100;i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }

// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.

//     ```sh
//     The sum of all numbers from 0 to 100 is 5050.
// 
  
// for(let i =1 ;i<= 100;i++){
  
//     let sum =+ i;
//     console.log(sum);
// }
// program to display the sum of natural numbers

// take input from the user


// let sum = 0;

// looping from i = 1 to number
// in each iteration, i is increased by 1
// for (let i = 0; i <= 100; i++) {
//     sum += i;
// }

// console.log('The sum of natural numbers:', sum);




// 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
    // program to display the sum of natural numbers

// take input from the user


//let sum = 0;

// looping from i = 1 to number
// in each iteration, i is increased by 1
// for (let i = 1; i <= 100; i++) {
//     if(i % 2 == 0)
//     sum += i;
// }

// console.log('The sum of even numbers:', sum);

//     ```sh
//     The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
//     ```// program to display the sum of natural numbers

// take input from the user

//let sum = 0;

// looping from i = 1 to number
// in each iteration, i is increased by 1
// for (let i = 1; i <= 100; i++) {
//     if(i % 2 !== 0)
//     sum += i;
// }

// console.log('The sum of odd numbers:', sum);

// 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

//     ```sh
//       [2550, 2500]
//     ```

// 13. Develop a small script which generate array of 5 random numbers
// let arr = [];
// for(let i=1;i<=5;i++){
//     let value = Math.floor((Math.random(i)*5)+ 1);
//     arr.push(value);
//     console.log(value);
//    }
//    console.log(arr);


// 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique
   //let arr = [];
//    for(let i=1;i<=5;i++){
//     var add = true;
//     let value = Math.floor((Math.random(i)*5)+ 1);
//    for(let j=0 ; j<= arr.length;i++){
//        if(arr[j] == i){
//         add = false;
//        }
//    }
//    if(add){
//     arr.push(value);
//     console.log(value);
//    }
//    else{
//        i--;
//    }
//    console.log(arr);
//   }
// 15. Develop a small script which generate a six characters random id:
    // const characters = 'abcdefghijklmnopqrstuvwxyz1234567890';
    // for(let i=0 ;i<=5;i++){
    //     let value = characters.charAt(Math.floor((Math.random(i)*36)+1));
    //     console.log(value);
    // }
//     ```sh
//     5j2khz
//     ```

// ### Exercises: Level 2

// 1. Develop a small script which generate any number of characters random id:
        let characters = 'abcdefghjiklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
       
        function randomCharacters(length){
            for(let i= 0;i<=length;i++){
                let value = characters.charAt(Math.floor(Math.random(i)*charactersLength));
                return value;
            }
            return value;
        }
        console.log(randomCharacters(5));
//     ```sh
//       fe3jo1gl124g
//     ```

//     ```sh
//       xkqci4utda1lmbelpkm03rba
//     ```

// 1. Write a script which generates a random hexadecimal number.

//     ```sh
//     '#ee33df'
//     ```

// 1. Write a script which generates a random rgb color number.

//     ```sh
//     rgb(240,180,80)
//     ```

// 1. Using the above countries array, create the following new array.
// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]
//   let array = [];
//   let array1= [];
//   for(let i = 0 ;i<countries.length;i++){
//       array.push(countries[i].toUpperCase());
//       let value = countries[i].length;
//       array1.push(value);
//       console.log(value);
//     }
//     console.log(array);
//     console.log(array1);
  
//     ```sh
//     ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
//     ```

// 1. Using the above countries array, create an array for countries length'.
// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]
//     let array1 = [];
//     for(let j=0;j<=countries.length;j++){
//         console.log(countries[j]);
//         let value = countries[j].length;
//         array1.push(value);
//     }
//     console.log(array1);
//     ```sh
//     [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
//     ```

// 1. Use the countries array to create the following array of arrays:
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
 


// function checkString(country) {
//   if (country.include('land'))
//     return country;
//   else
//     return false;
// }
// let string = countries.filter(checkString);
// console.log(strings);
    // let arr = [];
    //  for(let i = 0;i<=countries.length;i++){
    //    // let country1 = countries.toString();
    //     let string=countries[i];
    //     console.log(string); 
    //     //let value =string.includes('land')
    //     if( value ===string.includes('land')){
    //         arr.push(string);
            
    //     } 
    //     // let value = country1.includes('land');
    //     // let value1  = country1.match('land');
    //     // console.log(value1);
    //     //console.log(country1.split(','));
       
    //  }
    //  console.log(arr);
     
    
    // let newArr = [];
    
    // for(let i=0; i<= countries.length; i++) {
    
    // for(let j=0; j<=countries[i].length; j++){
    
    // if(countries[i].includes('land') ){
    
    // newArr.push(countries[i]);
    // break;
    
    // } 
    
    
    // }
    
    // } 
    // console.log(newArr);
    


//     ```sh
//       [
//       ['Albania', 'ALB', 7],
//       ['Bolivia', 'BOL', 7],
//       ['Canada', 'CAN', 6],
//       ['Denmark', 'DEN', 7],
//       ['Ethiopia', 'ETH', 8],
//       ['Finland', 'FIN', 7],
//       ['Germany', 'GER', 7],
//       ['Hungary', 'HUN', 7],
//       ['Ireland', 'IRE', 7],
//       ['Japan', 'JAP', 5],
//       ['Kenya', 'KEN', 5]
//     ]
//     ```

// 2. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

//     ```sh
//     ['Finland', 'Iceland']
//     ```

// 3. In above countries array, check if there is  a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

//     ```sh
//     ['Albania', 'Bolivia','Ethiopia']
//     ```

// 4. Using the above countries array, find the country containing the biggest number of characters.

//       ```sh
//       Ethiopia
//       ```

// 5. Using the above countries array, find the country containing only 5 characters.
    let arr2 = []
    for(let i=0;i<= countries.length;i++){
        if(countries[i].length === 5){
            arr2.push(countries[i]);
        }
        console.log(arr2);
    }
//     ```sh
//     ['Japan', 'Kenya']
//     ```

// 6. Find the longest word in the webTechs array
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
   let word = [];
   for(let i=0;i<=webTechs.length;i++){
      let value = webTechs[i].length;
      //console.log(value);
      word.push(value);
      console.log(word);
      word.sort();
      console.log(word.pop());
   }

// 7. Use the webTechs array to create the following array of arrays:

//     ```sh
//     [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
//     ```

// 8. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
// 9. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
// 10. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
// 11. Print all the elements of array as shown below.

//     ```js
//       const fullStack = [
//         ['HTML', 'CSS', 'JS', 'React'],
//         ['Node', 'Express', 'MongoDB']
//       ]
//     ````

//     ```sh
//       HTML
//       CSS
//       JS
//       REACT
//       NODE
//       EXPRESS
//       MONGODB
//     ```

// ### Exercises: Level 3

// 1. Copy countries array(Avoid mutation)
// 1. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
// 1. Sort the webTechs array and mernStack array
// 1. Extract all the countries contain the word 'land' from the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) and print it as array
// 1. Find the country containing the hightest number of characters in the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)
// 1. Extract all the countries contain the word 'land' from the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) and print it as array
// 1. Extract all the countries containing only four characters from the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) and print it as array
// 1. Extract all the countries containing two or more words from the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) and print it as array
// 1. Reverse the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) and capitalize each country and stored it as an array
