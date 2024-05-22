//////////QUESTION 31///
//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.
//creating array or removing element in array 
var usernames = [];
// statement for checking the array is empty ?
if (usernames.length === 0) {
    console.log("We need to find some users! because your array is empty");
}
else { // greeting msg with user
    usernames.forEach(function (username) {
        if (username == "admin") {
            console.log("Hello  admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again. "));
        }
    });
}
