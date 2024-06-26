///////////////QUESTION 37////////
////Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads 
//I love TypeScript .Make a large shirt and a medium shirt with the default message, and a shirt of any size with a 
//different message.
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "i love typescript"; }
    console.log("making a ".concat(size, " tshirt with message ").concat(message, " printed on it "));
}
make_shirt();
make_shirt("medium", "code is my life");
make_shirt("small", "i am a programmer");
