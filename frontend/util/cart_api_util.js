export const getCart = () => (
  $.ajax({
    method: "GET",
    url: "/api/cart_items"
  })
);

export const removeCartItem = cartId => (
  $.ajax({
    method: "DELETE",
    url: `/api/cart_items/${cartId}`
  })
);

export const addCartItem = cartItem => (
  $.ajax({
    method: "POST",
    url: "/api/cart_items",
    data: { cart_item: cartItem }
  })
);

export const updateQuantity = cartItem => (
  $.ajax({
    method: "PATCH",
    url: `/api/cart_items/${cartItem.id}`,
    data: { cart_item: cartItem }
  })
);