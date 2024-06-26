///QUESTION 43///////////////
//Unchanged Magicians: Start with your work from Exercise 40.
// Call the function make_great() with a copy of the array of magicians’ names. 
//Because the original array will be unchanged, return the new array and store it in a separate array. 
//Call show_magicians() with each array to show that you have one array of the original names and one array 
//with the Great added to each magician’s name.



let magicians_name =["Ali","Shaheer","Zain"];

function show_magicianname(magicians_name:string[]){
   magicians_name.forEach(magician =>
       
           console.log(magician)
       );
}

function make_great(magician_name:string[]){
   return magicians_name.map(magician=>`The great  ${magician}`)
}
//making copy of array using slice 
let copyofmagician_name=magicians_name.slice();
//making the copy of modified array
let copyofgreatmagician_name= make_great(copyofmagician_name);
let great_magician=make_great(magicians_name);
//original array
show_magicianname(magicians_name);
//copied array
show_magicianname(copyofgreatmagician_name)