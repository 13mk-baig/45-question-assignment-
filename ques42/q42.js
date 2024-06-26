///////QUESTION 42//////////
//Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by 
//adding the phrase the Great to each magician’s name. Call show_magicians() to 
//see that the list has actually been modified.
var magicians_name = ["Ali", "Shaheer", "Zain"];
function show_magicianname(magicians_name) {
    magicians_name.forEach(function (magician) {
        return console.log(magician);
    });
}
function make_great(magician_name) {
    return magicians_name.map(function (magician) { return "The great  ".concat(magician); });
}
var great_magician = make_great(magicians_name);
show_magicianname(great_magician);
