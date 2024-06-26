///////////////QUESTION 36////////////////
//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on
//the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it.
// Call the function.
function make_shirt(size, message) {
    if (size === void 0) { size = "small"; }
    if (message === void 0) { message = "code is life"; }
    console.log("making a ".concat(size, " tshirt with message ").concat(message, " printed on it "));
}
make_shirt();
