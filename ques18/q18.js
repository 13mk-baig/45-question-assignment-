var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/////////////QUESTION 18////////////
var placestovisit = ["germany", "canada", "switzerland", "australia", "chicago"];
console.log("original order", placestovisit);
console.log("alphabetical  order", __spreadArray([], placestovisit, true).sort());
console.log(" still in original order", placestovisit);
console.log("reverse alphabetical  order", __spreadArray([], placestovisit, true).sort().reverse());
console.log("original order", placestovisit);
console.log("reverse  order", __spreadArray([], placestovisit, true).reverse());
console.log("again reverse  order", __spreadArray([], placestovisit, true).reverse().reverse());
console.log("its order is changed to alphabetical  order", __spreadArray([], placestovisit, true).sort());
console.log("its order is chamged to reverse alphabetical  order", __spreadArray([], placestovisit, true).sort().reverse());
