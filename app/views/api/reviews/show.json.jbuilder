json.review do
  json.extract! @review, :id, :user_id, :product_id, :rating, :title, :body
end