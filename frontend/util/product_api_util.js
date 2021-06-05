export const saveReview = review => (
  $.ajax({
    method: "POST",
    url: "/api/reviews",
    data: { review }
  })
);

export const getProduct = productId => (
  $.ajax({
    method: 'GET',
    url: `/api/products/${productId}`
  })
);

export const getProducts = filters => (
  $.ajax({
    method: 'GET',
    url: '/api/products',
    data: filters
  })
);