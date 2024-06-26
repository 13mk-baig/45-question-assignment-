///////QUESTION 41////////////
//Magicians: Make a array of magician’s names.
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var magicians_name = ["ali", "shaheer", "zain"];
function show_magicianname(magicians_name) {
    magicians_name.forEach(function (magician) {
        return console.log(magician);
    });
}
show_magicianname(magicians_name);
