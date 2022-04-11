// Only change code below this line
const MILILI = [10, 25, 4];
  // Using mili = [4, 10, 25] would be invalid
function myArr(mili) {
  "use strict";
  MILILI.unshift(MILILI.pop());
  return mili;
}
console.log(myArr(MILILI));
  // Only change code above this line
module.exports = myArr;
