json.review do
  json.extract! @review, :id, :user_id, :product_id, :rating, :title, :body
end

json.user do
  json.extract! @review.user, :id, :first_name, :last_name
end

json.average_rating @review.product.average_rating