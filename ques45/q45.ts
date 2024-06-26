////QUESTION 45//////
///Cars: Write a function that stores information about a car in a Object. 
//The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword 
//arguments. Call the function with the required information and two other name-value pairs, such as a color or an 
//optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function make_car(manufacturer,model,...options){
    let car={
        manufacturer: manufacturer,
        model:model
    };
    //adding additional options to object
    options.forEach(option => {
        let [key,value]=option.split(":");
        car [key]=value;
    });
    return car;
}//calling function
let my_car = make_car("suzuki","waganR","color: white","year:2016")
console.log(my_car);