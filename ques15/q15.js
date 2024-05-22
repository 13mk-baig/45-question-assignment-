//Changing Guest List: You just heard that one of your guests can’t make the dinner,
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program
// stating the name of the guest who can’t make it./• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
//////////////////////////////////////////////////
//creating list using array 
var glist = ["aleesha", "muzna", "afifa", "umia"];
var guestdontcome = glist[0];
console.log(guestdontcome, "unable to attend");
glist.splice(0, 1, "areeba"); // remove the guest name from the array and add new one 
glist.forEach(function (gelist) { return console.log("".concat(glist, " ,come and join us on 17 april 2024 at 8 pm ")); });
