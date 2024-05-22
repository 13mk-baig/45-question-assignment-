/////QUESTION 32/////
///Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used. If it has, print a message 
//that the person will need to enter a new username. If a username has not been used,
// print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
//creating array of current user name  
var current_users = ["maryam", "mira", "mehak", "zainab", "sara"];
//creating an array of new user name 
var new_users = ["zoya", "ahmed", "ayesha", "sara", "maryam"];
//loop through array for checking user name 
new_users.forEach(function (one_user) {
    if (current_users.some(function (current_username) { return current_username.toLowerCase() === one_user.toLowerCase(); })) {
        console.log("".concat(one_user, ",will need to enter a new username"));
    }
    else {
        console.log("".concat(one_user, ",is availabe"));
    }
});
