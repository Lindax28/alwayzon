json.cart_items do
  @cart_items.each do |cart_item|
    json.set! cart_item.id do
      json.extract! cart_item, :id, :user_id, :product_id, :quantity
    end
  end
end

json.products do
  @cart_items.each do |cart_item|
    json.set! cart_item.product.id do
      json.extract! cart_item.product, :id, :name, :description, :category, :price, :average_rating
      json.imageUrl url_for(cart_item.product.photo)
      json.reviewIds cart_item.product.reviews.pluck(:id)
    end
  end
end