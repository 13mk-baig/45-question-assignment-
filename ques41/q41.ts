///////QUESTION 41////////////
//Magicians: Make a array of magician’s names.
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magicians_name =["ali","shaheer","zain"];

function show_magicianname(magicians_name:string[]){
   magicians_name.forEach(magician =>
       
           console.log(magician)
       );
}
show_magicianname(magicians_name);