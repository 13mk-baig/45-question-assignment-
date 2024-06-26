//////////QUESTION 44/////////
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one
// parameter that collects as many items as the function call provides, and it should print a summary of the sandwich 
//that is being ordered. Call the function three times, using a different number of arguments each time.
function make_sandwich(...items:string[]){
    console.log("making a sandwich using some items \n\n");
    items.forEach(oneitem => console.log(oneitem));
    console.log("\n\n eat your sandwich");

}
make_sandwich("chicken","mayonnaise","cheese");
make_sandwich("cucumber","tomato","ketchup");
make_sandwich("bread","butter","cucumber","mayonnaise");
