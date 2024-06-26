//////////QUESTION 38/////////
//Cities: Write a function called describe_city() that accepts the name of a city and its country.
//The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a 
//default value.Call your function for three different cities, at least one of which is not in the default country.
function describe_city(name, country) {
    if (name === void 0) { name = "karachi"; }
    if (country === void 0) { country = "pakistan"; }
    console.log("".concat(name, " is in ").concat(country));
}
describe_city(); // karachi
describe_city("lahore");
describe_city("islamabad");