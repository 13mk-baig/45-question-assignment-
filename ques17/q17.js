//////////QUESTION 17///////////////////////////////
var glist = ["aleesha", "muzna", "afifa", "umia"]; //creating list fo guest using array
var guestdontcome = glist[1]; // here indicatE the index of array to remove thet name
console.log(guestdontcome, "unable to attend"); // here printing the message with person name that will not come 
glist.splice(1, 2, "areeba"); // using splice function to remove the person name 
console.log("good news we have found a bigger table for dinner");
glist.unshift("sara"); // to add new guest name at the beginning using unshift
glist.splice(glist.length / 2, 0, "mona"); //add guest name at he middle of array 
glist.push("zara"); // to add new guest name at the end of the array 
glist.forEach(function (gelist) { return console.log("".concat(glist, "\"would you like to join me on dinner\"")); });
console.log("unfortunately our new dinner table won’t arrive in time for the dinner, and i have space for only two guests");
while (glist.length > 2) // here we used a condition in while loop to remove guest name from the array
 {
    var removeglist = glist.pop(); // make varaible and use pop function  to remove name from the list 
    console.log("sorry ,".concat(removeglist, " i can't invite you to dinner "));
}
glist.forEach(function (twoguest) { return console.log("".concat(twoguest, "\"you are still invited\"")); }); //print message to the two person that are still invited 
glist.splice(0, glist.length); //remove the name from array
console.log("empty list", glist);
