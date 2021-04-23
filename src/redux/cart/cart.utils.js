export const addItemToCart = (cartItems, cartItemToAdd) => {
    // the selected items properties is passed in through the props cartItemToAdd
    // the array list of all our items selected by the buyer is in the cartItems prop
    // we then check to see if the cartItemToAdd has an id the is in our list of cartItems by checking all the ids in there using .find()
    // we then store it in a variable called existingCartItem
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    // we then check to see if existingCartItem has any values, if there is, we then return a mapped out cartItems value checking to see if
    // the cartItem id is EQUAL to the cartItemToAdd id,if it is, then we add 1 to the quantity value of our cartItem state
    // if not, then we just return the cartItem
    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
    }

    // if existingCartItem does not contain anything, then we just return the cartItems with the quantity to 1
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    // we go through the cartItems and check to see if the id that we are planning to remove is in the cartItems
    // we then store that item into the existingCartItem constant
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )

    // next we check if the quantity property of existingCartItem is === 1
    // if it is then we return a filtered version of the cartItems removing the item with the same id as the cartItem id
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    //otherwise we if the existingCartItem quantity value is NOT 1
    // then we just subtract 1 from the value
    return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem);
}

