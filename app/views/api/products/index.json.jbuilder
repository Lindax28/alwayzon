@products.each do |product|
  json.set! product.id do
    json.extract! product, :id, :name, :description, :category, :price
    json.picture_url product.picture_url || url_for(product.photo)
    json.reviewIds []
  end
end