//Greetings: Start with the array you used in Exercise 11,
// but instead of just printing each person’s name, print a message to them. The text of each message should be the same,
//but each message should be personalized with the person’s name.
var Name = ["sara", "soha", "rija", "mahnoor"];
var message = 'lets go for shopping :';
for (var i = 0; i < Name.length; i++) {
    console.log(Name[i] + message);
}
