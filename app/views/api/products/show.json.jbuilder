json.product do
  json.extract! @product, :id, :name, :description, :category, :price, :average_rating
  json.imageUrl url_for(@product.photo)
  json.reviewIds @product.reviews.pluck(:id)
end

@product.reviews.includes(:user).each do |review|
  json.reviews do
    json.set! review.id do
      json.extract! review, :id, :user_id, :product_id, :rating, :title, :body
    end
  end

  json.users do
    json.set! review.user.id do
      json.extract! review.user, :id, :first_name, :last_name
    end
  end
end