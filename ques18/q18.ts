/////////////QUESTION 18////////////
let placestovisit : string[]=[ "germany","canada","switzerland","australia","chicago"];
console.log("original order",placestovisit);
console.log("alphabetical  order",[...placestovisit].sort());
console.log(" still in original order",placestovisit);
console.log("reverse alphabetical  order",[...placestovisit].sort().reverse());
console.log("original order",placestovisit);
console.log("reverse  order",[...placestovisit].reverse());
console.log("again reverse  order",[...placestovisit].reverse().reverse());
console.log("its order is changed to alphabetical  order",[...placestovisit].sort());
console.log("its order is chamged to reverse alphabetical  order",[...placestovisit].sort().reverse());