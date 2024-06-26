///QUESTION 43///////////////
//Unchanged Magicians: Start with your work from Exercise 40.
// Call the function make_great() with a copy of the array of magicians’ names. 
//Because the original array will be unchanged, return the new array and store it in a separate array. 
//Call show_magicians() with each array to show that you have one array of the original names and one array 
//with the Great added to each magician’s name.
var magicians_name = ["Ali", "Shaheer", "Zain"];
function show_magicianname(magicians_name) {
    magicians_name.forEach(function (magician) {
        return console.log(magician);
    });
}
function make_great(magician_name) {
    return magicians_name.map(function (magician) { return "The great  ".concat(magician); });
}
//making copy of array using slice 
var copyofmagician_name = magicians_name.slice();
//making the copy of modified array
var copyofgreatmagician_name = make_great(copyofmagician_name);
var great_magician = make_great(magicians_name);
//original array
show_magicianname(magicians_name);
//copied array
show_magicianname(copyofgreatmagician_name);
