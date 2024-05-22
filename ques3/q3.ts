//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let pname ="memona";
// lower case
console.log(pname.toLowerCase());
// upper case
console.log(pname.toUpperCase());
// title case
console.log(pname.charAt(0).toUpperCase()+ pname.slice(1).toLowerCase());