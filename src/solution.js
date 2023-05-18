/*
  Write each function according to the instructions.
  
  When a function's parameters reference `cart`, it references an object that looks like the one that follows.
  {
    "Gold Round Sunglasses": { quantity: 1, priceInCents: 1000 },
    "Pink Bucket Hat": { quantity: 2, priceInCents: 1260 }
  }
*/

function calculateCartTotal(cart) {
  let total = 0;
  if (cart.length == 0) {
    return 0;
  }
  for (let item in cart) {
const thing = cart[item];
const quantity = thing.quantity;
const cost = thing.priceInCents
total += (quantity * (cost / 100)).toFixed(2);
  }
  return total;
}

function printCartInventory(cart) {
let result = ""
if (cart.length == 0) {
return result;
}
for (let item in cart) {
  const thing = cart[item];
  const quantity = thing.quantity;
  result += `${quantity}x${item}\n`;
}
return result;
}

module.exports = {
  calculateCartTotal,
  printCartInventory,
};
