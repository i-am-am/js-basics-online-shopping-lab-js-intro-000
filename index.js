var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var i = new Object({ itemName: item, itemPrice:Math.floor(Math.random() * 100) })
 cart.push(i)
 return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0){
    return "Your shopping cart is empty."
  }
  var scart = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}`
  for (var i = 1; i < cart.length; i++){
    scart += `, `
    if (i === cart.length - 1){
      scart += `and `
    }
    scart += `${cart[i].itemName} at $${cart[i].itemPrice}`
  }
  scart += `.`
  return scart
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
