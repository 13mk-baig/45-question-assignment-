//////////QUESTION 16///////////////////////////////
var glist = ["aleesha", "muzna", "afifa", "umia"]; //creating list fo guest using array
var guestdontcome = glist[1]; // here indicatE the index of array to remove thet name
console.log(guestdontcome, "unable to attend"); // here printing the message with person name that will not come 
glist.splice(1, 2, "areeba"); // using splice function to remove the person name 
console.log("good news we have found a bigger table for dinner");
glist.unshift("sara"); // to add new guest name at the beginning using unshift
glist.splice(glist.length / 2, 0, "mona"); //add guest name at he middle of array 
glist.push("zara"); // to add new guest name at the end of the array 
glist.forEach(function (gelist) { return console.log("".concat(glist, "\"would you like to join me on dinner\"")); });
