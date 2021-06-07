# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ApplicationRecord.transaction do 

  User.destroy_all
  Product.destroy_all
  Review.destroy_all

  booksmovies = "Books and Movies"
  beautyskincare = "Beauty and Skincare"
  fashionjewelry = "Fashion and Jewelry"
  gamestoys = "Games and Toys"
  homekitchen = "Home and Kitchen"
  schooloffice = "School and Office"
  pet = "Pet Supplies"
  electronics = "Electronics"
  sportsoutdoors = "Sports and Outdoors"

  demo_user = User.create!(first_name: "Demo User", last_name: "Tester", email: "demo-user@email.com", password: "password")
  demo_user2 = User.create!(first_name: "Anna", last_name: "Banana", email: "anna@email.com", password: "password")

  luxury_hand_cream = Product.create!(name: "Luxury hand cream", description: "Luxurious hand cream with a tiny cap to prove it." , category: beautyskincare , price: 12.50, keywords: ['hand', 'cream', 'lotion', 'beauty', 'skin', 'skincare', 'moisturizer'])
  luxury_hand_cream.photo.attach(io: File.open("db/seed_images/mathilde-langevin-2ObVEZxUDlc-unsplash.jpg"), filename: "handlotion.jpg")
  luxury_hand_cream_review = Review.create!(user_id: demo_user.id, product_id: luxury_hand_cream.id, rating: 3, title: "It smells great but tastes horrible", body: "I got it as a gift from my friend. Now, we're no longer friends.")
  luxury_hand_cream_review2 = Review.create!(user_id: demo_user2.id, product_id: luxury_hand_cream.id, rating: 5, title: "This turned my ugly hands to normal ones.", body: "I like it and so will you.")

  airpods = Product.create!(name: "Airpods", description: "Big sound from tiny earbuds.", category: electronics, price: 199.99, keywords: ["music", "headphones", "earbuds", "airpods", "sound", "electronics", "apple", "earphones", "song", "songs"])
  airpods.photo.attach(io: File.open("db/seed_images/insung-yoon-mru38VH7tII-unsplash.jpg"), filename: "airpods.jpg")

  rose_gold_watch = Product.create!(name: "Rose gold watch", description: "Beautiful watch to match rose gold Apple products", category: fashionjewelry, price: 60.50, keywords: ["fashion", "jewelry", "watch", "rose", "gold", "time"])
  rose_gold_watch.photo.attach(io: File.open("db/seed_images/aleksandra-tanasiienko-ZC90ht33avA-unsplash.jpg"), filename: "rosegoldwatch.jpg")
  
  brown_handbag = Product.create!(name: "Brown handbag", description: "Large bag to fit everything you will ever need.", category: fashionjewelry, price: 53.70, keywords: ["handbag", "bag", "purse", "brown", "luxury", "fashion"])
  brown_handbag.photo.attach(io: File.open("db/seed_images/irene-kredenets-tcVH_BwHtrc-unsplash.jpg"), filename: "brownhandbag.jpg")

  nomade_perfume = Product.create!(name: "Nomade perfume", description: "Wonderful fragrance to smell like a nomad.", category: beautyskincare, price: 72.50, keywords: ["perfume", "scent", "fragrance", "beauty", "skincare"])
  nomade_perfume.photo.attach(io: File.open("db/seed_images/karly-jones-WTw-yVFUFO0-unsplash.jpg"), filename: "nomadeperfume.jpg")

  gray_chair = Product.create!(name: "Gray chair", description: "Comfy gray chair for sitting.", category: homekitchen, price: 30.50, keywords: ["furniture", "gray", "chair", "couch", "sofa", "home", "stool", "table"])
  gray_chair.photo.attach(io: File.open("db/seed_images/sam-moqadam-kvmdsTrGOBM-unsplash.jpg"), filename: "graychair.jpg")

  cactus_houseplant = Product.create!(name: "Cactus houseplant", description: "Cute succulent that's easy to take care of.", category: homekitchen, price: 13.50, keywords: ["cactus", "houseplant", "succulent", "plant", "home", "decor", "cute"])
  cactus_houseplant.photo.attach(io: File.open("db/seed_images/annie-spratt-fbAnIjhrOL4-unsplash.jpg"), filename: "cactus.jpg")
  cactus_houseplant_review = Review.create!(user_id: demo_user.id, product_id: cactus_houseplant.id, rating: 4, title: "Spikey guy", body: "Super easy to take care of but pet carefully.")

  gray_backpack = Product.create!(name: "Gray backpack", description: "Medium-sized backpack for school and carrying things.", category: schooloffice, price: 39.20, keywords: ["school", "office", "backpack", "bag", "gray"])
  gray_backpack.photo.attach(io: File.open("db/seed_images/cosiela-borta-08BZDHJ7GOg-unsplash.jpg"), filename: "backpack.jpg")

  nike_air_shoes = Product.create!(name: "Nike Air Shoes", description: "Comfortable and stylish shoes for walking or running.", category: fashionjewelry, price: 98.50, keywords: ["shoes", "shoe", "nike", "clothes", "fashion", "clothing", "athletic", "exercise"])
  nike_air_shoes.photo.attach(io: File.open("db/seed_images/ryan-plomp-PGTO_A0eLt4-unsplash.jpg"), filename: "nikeairshoes.jpg")

  coco_chanel_perfume = Product.create!(name: "Coco Chanel Perfume", description: "Elegant fragrance for elegant people.", category: beautyskincare, price: 92.75, keywords: ["perfume", "fragrance", "beauty", "skincare", "chanel"])
  coco_chanel_perfume.photo.attach(io: File.open("db/seed_images/laura-chouette-zrtov5GAugE-unsplash.jpg"), filename: "cocochanelperfume.jpg")

  red_lipstick = Product.create!(name: "Red Lipstick", description: "Long-lasting, bold red lipstick.", category: beautyskincare, price: 31.00, keywords: ["lipstick", "red", "makeup", "beauty", "skincare"])
  red_lipstick.photo.attach(io: File.open("db/seed_images/laura-chouette-dcbz31jdsHA-unsplash.jpg"), filename: "redlipstick.jpg")

  houseplant = Product.create!(name: "Houseplant", description: "Cute houseplant for home decor.", category: homekitchen, price: 12.00, keywords: ["houseplant", "succulent", "plant", "decor", "home", "cute"])
  houseplant.photo.attach(io: File.open("db/seed_images/laura-chouette-4I6WCknRBbg-unsplash.jpg"), filename: "houseplant.jpg")
end