@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :user_id, :product_id, :rating, :title, :body
  end
end