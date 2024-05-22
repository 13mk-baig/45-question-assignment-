///QUESTION 29///
//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
// if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array.
/// If the fruit is in your array, the if block should print a statement, such as You really like bananas!
var favourite_fruit = ["peach", "strawberry", "mango"];
if (favourite_fruit.indexOf("mango") !== -1) {
    console.log("you really like mango");
}
if (favourite_fruit.indexOf("banana")) {
    console.log("the fruit is not present in array");
}
if (favourite_fruit.indexOf("strawberry") !== -1) {
    console.log("you really like strawberry");
}
if (favourite_fruit.indexOf("peach") !== -1) {
    console.log("you really like peach");
}
if (favourite_fruit.indexOf("apple")) {
    console.log("the fruit is not present in an array");
}
