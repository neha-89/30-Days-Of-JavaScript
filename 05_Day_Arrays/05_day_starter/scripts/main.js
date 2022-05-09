
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
  
//   const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]
//   ```
  
//   1. Declare an _empty_ array;
     let array = [];
//   2. Declare an array with more than 5 number of elements
     let  array1 = ['apple','pineapple','custardapple','orange','lemon','carrot']
//   3. Find the length of your array
     console.log(array1.length);
//   4. Get the first item, the middle item and the last item of the array
     console.log(array1.pop());
     console.log(array1.shift());
     console.log(array1.slice(1,2));
//   5. Declare an array called _mixedDataTypes_, put different data types in the array and find the length of the array. The array size should  be greater than 5
    let mixedDataTypes = ['apple','pineapple','custardapple',1,2,3,4,5,true,false]
    console.log(mixedDataTypes.length);
//   6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
    let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM',' Oracle' , 'Amazon']    

//   7. Print the array using _console.log()_
    console.log(itCompanies)
//   8. Print the number of companies in the array
    console.log(itCompanies.length)    
//   9. Print the first company, middle and last company
    // console.log(itCompanies.shift());
    // console.log(itCompanies.pop());
    // console.log(itCompanies.slice(1,5));

//   10. Print out each company
    for(i=0;i<itCompanies.length;i++){
        console.log(itCompanies[i]);
    }
//   11. Change each company name  to uppercase one by one and print them out
    for(i=0;i<itCompanies.length;i++){
        
        console.log(itCompanies[i].toUpperCase());
    }
//   12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
    console.log(`${itCompanies.slice(0,6)} and ${itCompanies[i-1]} are big IT companies`);
//   13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is _not found_
//     function findCompany(company){
//         for(i=0;i<itCompanies.length;i++){
//             if(company == itCompanies[i]){
//                 return company;
//             }
//          }
         
// }  
// findCompany("Facebook") ;
// const result = itCompanies.filter(company => company == itCompanies[i]);
// console.log(result);
// //   14. Filter out companies which have more than one 'o' without the filter method
    // function filterOut(company){
    //     let arr1 =[];
    //     for(i=0;i<itCompanies.length;i++){
    //         if(company == itCompanies[i]. ){
    //         arr1.push(company);
    //         }
    //      }
    // }
//   15. Sort the array using _sort()_ method
let it = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM',' Oracle' , 'Amazon']    

    console.log(it.sort());
//   16. Reverse the array using _reverse()_ method
    console.log(it.reverse());
//   17. Slice out the first 3 companies from the array
    console.log(it.slice(0,3));
//   18. Slice out the last 3 companies from the array
    console.log(it.slice(-3));
//   19. Slice out the middle IT company or companies from the array
//   20. Remove the first IT company from the array
//   21. Remove the middle IT company or companies from the array
//   22. Remove the last IT company from the array
//  23. Remove all IT companies
