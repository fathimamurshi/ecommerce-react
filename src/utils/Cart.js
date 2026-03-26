export const getCart = () => {
    return JSON.parse(localStorage.getItem("cart")) || [];
};

export const addToCart = (product) => {
    const cart = getCart();

    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
        exists.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
};

// export const removeFromCart = (id) => {
//     const cart = getCart().filter((item) => item.id !== id);
//     localStorage.setItem("cart", JSON.stringify(cart));
// };
export const removeFromCart = (id) => {
  const cart = getCart().filter((item) => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  window.dispatchEvent(new Event("cartUpdated"));
};