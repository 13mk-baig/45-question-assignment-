///////QUESTION 42//////////
//Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by 
//adding the phrase the Great to each magician’s name. Call show_magicians() to 
//see that the list has actually been modified.

let magicians_name =["Ali","Shaheer","Zain"];

function show_magicianname(magicians_name:string[]){
   magicians_name.forEach(magician =>
       
           console.log(magician)
       );
}

function make_great(magician_name:string[]){
   return magicians_name.map(magician=>`The great  ${magician}`)
}
let great_magician=make_great(magicians_name);
show_magicianname(great_magician);








