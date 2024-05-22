////////////QUESTION 24//////////
/////////Tests for equality 
console.log("TEST FOR EQUALITY WITH STRINGS")
console.log("Memona"== "Memona");
console.log("TEST FOR INEQUALITY WITH STRINGS")
console.log("apple"as string == "Apple");
//// Tests using the lower case function
console.log("TEST LOWERCASE FUNCTION")
console.log("Memona".toLowerCase()=="memona")
///Numerical test
console.log("NUMERICAL TEST")
console.log("equality test with numbers",5==5)
console.log("Inequality test with numbers",5 as number !=6)
console.log("Greater than",8 as number >6)
console.log("less than",5 as number <6)
console.log("Greater than equal to",7 as number >=7)
console.log("less than equal to",7 as number <=8)
///Tests using "and" and "or" operators
console.log("AND OPERATOR TEST",true&& true)
console.log("OR OPERATOR TEST",true|| false)
///// Test whether an item is in a array
let snacks=["sandwitch","samosa","roll","cheesebread"];
console.log("is samosa is in list?")
console.log(snacks.indexOf("samosa") ==1);
///// Test whether an item is not in a array
console.log("is samosa is in list?")
console.log(snacks.indexOf("bread") ==1);