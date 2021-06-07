@products.each do |product|
  json.set! product.id do
    json.extract! product, :id, :name, :description, :category, :price
    json.imageUrl url_for(product.photo)
    json.reviewIds []
  end
end