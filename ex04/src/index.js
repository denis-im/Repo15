// Only change code below this line
const milili = [10, 25, 4];
  // Using mili = [4, 10, 25] would be invalid
function myArr(mili) {
  "use strict";
  milili.unshift(milili.pop());
  return mili;
}
console.log(myArr(milili));
  // Only change code above this line
module.exports = myArr;
