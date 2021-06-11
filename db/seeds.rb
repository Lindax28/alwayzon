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

  demo_user1 = User.create!(first_name: "Demo User", last_name: "Tester", email: "demo-user@email.com", password: "password")
  demo_user2 = User.create!(first_name: "Sandy", last_name: "Beech", email: "sbeech@email.com", password: "password")
  demo_user3 = User.create!(first_name: "Anna", last_name: "Banana", email: "abanana@email.com", password: "password")
  demo_user4 = User.create!(first_name: "Robin", last_name: "Banks", email: "rbanks@email.com", password: "password")
  demo_user5 = User.create!(first_name: "Al", last_name: "Dente", email: "adente@email.com", password: "password")
  demo_user6 = User.create!(first_name: "Jack", last_name: "Pott", email: "jpott@email.com", password: "password")
  demo_user7 = User.create!(first_name: "Anita", last_name: "Bath", email: "abath@email.com", password: "password")
  demo_user8 = User.create!(first_name: "Justin", last_name: "Thyme", email: "jthyme@email.com", password: "password")
  demo_user9 = User.create!(first_name: "Chris P.", last_name: "Baykin", email: "cbaykin@email.com", password: "password")

  booksmovies = "Books and Movies"

  poetry_book = Product.create!(name: "Milk and Honey by Rupi Kaur", description: "A collection of beautiful poetry and prose in Rupi Kaur's signature writing style.", category: booksmovies, price: 12.20, keywords: ["book", "poetry", "novel", "read", "reading", "books", "paperback", "poem", "poems"])
  poetry_book.photo.attach(io: File.open("db/seed_images/sincerely-media-CXYPfveiuis-unsplash.jpg"), filename: "poetrybook.jpg")

  friends_dvd = Product.create!(name: "10 Seasons of Friends on DVD", description: "All 10 seasons of Friends on DVD. ", category: booksmovies, price: 21.90, keywords: ["dvd", "friends", "tv", "show", "movie", "movies", "sitcom", "cast", "episodes"])
  friends_dvd.photo.attach(io: File.open("db/seed_images/brett-jordan-ydaEsk6WNBw-unsplash.jpg"), filename: "friendsdvd.jpg")

  harry_potter_books = Product.create!(name: "Harry Potter Collector’s Edition", description: "Bundle of all seven books in the Harry Potter series for ‘Sirius’ fans of the Wizarding World.", category: booksmovies, price: 80.99, keywords: ["harry", "potter", "book", "magic", "wizard", "movie", "books", "movies", "series"])
  harry_potter_books.photo.attach(io: File.open("db/seed_images/madalyn-cox-YuUz5uQkaXM-unsplash.jpg"), filename: "harrypotterbooks.jpg")
  harry_potter_books_review = Review.create!(user_id: demo_user5.id, product_id: harry_potter_books.id, rating: 5, title: "Great buy!", body: "I love the HP series but the DVDs were too expensive so I bought the books.")
  harry_potter_books_review2 = Review.create!(user_id: demo_user9.id, product_id: harry_potter_books.id, rating: 1, title: "Old and used!", body: "Too many books. Do not recommend.")

  bread_cookbook= Product.create!(name: "Great Bread!", description: "Nearly a hundred simple, delicious bread recipes to help even the newest baker ‘get that bread’ in the kitchen.", category: booksmovies, price: 22.49, keywords: ["cook", "book", "books", "cookbook", "cookbooks", "bread", "food", "recipes", "recipe", "simple", "easy", "beginner", "cooking", "baking"])
  bread_cookbook.photo.attach(io: File.open("db/seed_images/james-lee-vnoY9lMM8dg-unsplash.jpg"), filename: "breadcookbook.jpg")
  bread_cookbook_review = Review.create!(user_id: demo_user2.id, product_id: bread_cookbook.id, rating: 3, title: "Good gift", body: "Got it as a birthday gift from my first cousin twice removed. Nice book with easy-to-follow recipes.")
  bread_cookbook_review2 = Review.create!(user_id: demo_user6.id, product_id: bread_cookbook.id, rating: 5, title: "Yummy recipes!!", body: "I am a bread enthusiast so you could imagine my excitement when I first stumbled upon this book. And 60 loaves later, still no regrets.")

  beautyskincare = "Beauty and Skincare"

  toner = Product.create!(name: "Mario Badescu Facial Toner", description: "Soothe and hydrate skin with a subtle greenish fragrance.", category: beautyskincare, price: 16.80, keywords: ["skin", "hydrate", "water", "toner", "face", "skincare", "beauty", "skincare"])
  toner.photo.attach(io: File.open("db/seed_images/charisse-kenion-BgbOGZRmeXs-unsplash.jpg"), filename: "toner.jpg")
  toner_review = Review.create!(user_id: demo_user4.id, product_id: toner.id, rating: 4, title: "What's toner?", body: "I think it was good but I don't really know what toner does.")
  toner_review2 = Review.create!(user_id: demo_user5.id, product_id: toner.id, rating: 5, title: "Amazing!", body: "It smells so good that I bought 35 more bottles to bathe in it!")

  jade_face_roller = Product.create!(name: "Jade Face Roller", description: "De-puff and de-stress by rolling this all over your face.", category: beautyskincare, price: 13.99, keywords: ["skin", "roller", "face", "soothe", "skincare", "beauty", "skincare"])
  jade_face_roller.photo.attach(io: File.open("db/seed_images/pexels-tara-winstead-6690915.jpg"), filename: "jadefaceroller.jpg")

  clay_face_mask = Product.create!(name: "Clay Face Mask", description: "Bring the earth to your skin to transform the barren, dry cracks in your ugly face into smooth stretches of silky sands with just half a use.", category: beautyskincare, price: 12.79, keywords: ["skin", "mask", "face", "soothe", "clay", "skincare", "beauty", "skincare", "facial"])
  clay_face_mask.photo.attach(io: File.open("db/seed_images/d-l-samuels-37MZ1-x-csI-unsplash.jpg"), filename: "clayfacemask.jpg")

  luxury_hand_cream = Product.create!(name: "Luxury Hand Cream", description: "Luxurious hand cream with a tiny cap to prove it." , category: beautyskincare , price: 12.50, keywords: ['hand', 'cream', 'lotion', 'beauty', 'skin', 'skincare', 'moisturizer'])
  luxury_hand_cream.photo.attach(io: File.open("db/seed_images/mathilde-langevin-2ObVEZxUDlc-unsplash.jpg"), filename: "handlotion.jpg")
  luxury_hand_cream_review = Review.create!(user_id: demo_user3.id, product_id: luxury_hand_cream.id, rating: 3, title: "It smells great but tastes horrible", body: "I got it as a gift from my friend. Now, we're no longer friends.")
  luxury_hand_cream_review2 = Review.create!(user_id: demo_user2.id, product_id: luxury_hand_cream.id, rating: 5, title: "This turned my ugly hands to normal ones.", body: "I like it and so will you.")

  nomade_perfume = Product.create!(name: "Nomade Perfume", description: "Wonderful fragrance to smell like a nomad.", category: beautyskincare, price: 72.50, keywords: ["perfume", "scent", "fragrance", "beauty", "skincare"])
  nomade_perfume.photo.attach(io: File.open("db/seed_images/karly-jones-WTw-yVFUFO0-unsplash.jpg"), filename: "nomadeperfume.jpg")
  
  coco_chanel_perfume = Product.create!(name: "Coco Chanel Perfume", description: "Elegant fragrance for elegant people.", category: beautyskincare, price: 92.75, keywords: ["perfume", "fragrance", "beauty", "skincare", "chanel"])
  coco_chanel_perfume.photo.attach(io: File.open("db/seed_images/laura-chouette-zrtov5GAugE-unsplash.jpg"), filename: "cocochanelperfume.jpg")

  red_lipstick = Product.create!(name: "Red Lipstick", description: "Long-lasting, bold red lipstick.", category: beautyskincare, price: 31.00, keywords: ["lipstick", "red", "makeup", "beauty", "skincare"])
  red_lipstick.photo.attach(io: File.open("db/seed_images/laura-chouette-dcbz31jdsHA-unsplash.jpg"), filename: "redlipstick.jpg")

  fashionjewelry = "Fashion and Jewelry"

  rose_gold_watch = Product.create!(name: "Rose Gold Watch", description: "Beautiful watch to match rose gold Apple products", category: fashionjewelry, price: 60.50, keywords: ["fashion", "jewelry", "watch", "rose", "gold", "time"])
  rose_gold_watch.photo.attach(io: File.open("db/seed_images/aleksandra-tanasiienko-ZC90ht33avA-unsplash.jpg"), filename: "rosegoldwatch.jpg")

  brown_handbag = Product.create!(name: "Brown Handbag", description: "Large bag to fit everything you will ever need.", category: fashionjewelry, price: 53.70, keywords: ["handbag", "bag", "purse", "brown", "luxury", "fashion"])
  brown_handbag.photo.attach(io: File.open("db/seed_images/irene-kredenets-tcVH_BwHtrc-unsplash.jpg"), filename: "brownhandbag.jpg")

  nike_air_shoes = Product.create!(name: "Nike Air Shoes", description: "Comfortable and stylish shoes for walking or running.", category: fashionjewelry, price: 98.50, keywords: ["shoes", "shoe", "nike", "clothes", "fashion", "clothing", "athletic", "exercise"])
  nike_air_shoes.photo.attach(io: File.open("db/seed_images/ryan-plomp-PGTO_A0eLt4-unsplash.jpg"), filename: "nikeairshoes.jpg")
  nike_air_shoes_review = Review.create!(user_id: demo_user7.id, product_id: nike_air_shoes.id, rating: 2, title: "Did not fit", body: "I learned today that shoes are not one-size-fits-all. Disappointed :(")
  nike_air_shoes_review2 = Review.create!(user_id: demo_user6.id, product_id: nike_air_shoes.id, rating: 3, title: "Just okay", body: "I bought these to use as beds for my hamsters. Hard to clean.")

  star_earrings= Product.create!(name: "Golden Star Earrings", description: "24k gold earrings in the shape of twinkly stars.", category: fashionjewelry, price: 95.97, keywords: ["gold", "earrings", "stars", "dangling", "jewelry", "hanging", "diamonds"])
  star_earrings.photo.attach(io: File.open("db/seed_images/gabrielle-henderson-XTp4ZzD76Xw-unsplash.jpg"), filename: "starearrings.jpg")
  star_earrings_review = Review.create!(user_id: demo_user4.id, product_id: star_earrings.id, rating: 4, title: "Love them!", body: "Could not be more happy with my purchase! These look just like the real thing.")
  star_earrings_review2 = Review.create!(user_id: demo_user7.id, product_id: star_earrings.id, rating: 1, title: "False advertising", body: "Not real stars from outer space. These are made of gold.")

  tan_wallet= Product.create!(name: "Thin tan wallet", description: "Leather card holder with space for one card and maybe a few dollar bills, and thin enough to fit comfortably in your pocket", category: fashionjewelry, price: 23.99, keywords: ["thin", "tan", "wallet", "brown", "cards", "holder", "fashion", "leather", "money"])
  tan_wallet.photo.attach(io: File.open("db/seed_images/stephen-phillips-hostreviews-co-uk-em37kS8WJJQ-unsplash.jpg"), filename: "tanwallet.jpg")
  tan_wallet_review = Review.create!(user_id: demo_user5.id, product_id: tan_wallet.id, rating: 3, title: "It’s a wallet", body: "I don’t make much money nowadays ever since I lost my job at Mickey D’s, so I decided to downgrade to a smaller and thinner wallet. This one gets the job done, unlike me.")
  tan_wallet_review2 = Review.create!(user_id: demo_user9.id, product_id: tan_wallet.id, rating: 1, title: "Poor quality!", body: "You get what you pay for. This wallet ripped in half within a few days and all my Benjamins fell out!!")

  gamestoys = "Games and Toys"

  unicorn_floatie = Product.create!(name: "Unicorn Pool Inflatable", description: "Up your pool game with a magical, mystical beast (with cupholders!)", category: gamestoys, price: 21.25, keywords: ["floatie", "pool", "unicorn", "inflatable", "summer", "swim", "games", "toys", "kids", "toy"])
  unicorn_floatie.photo.attach(io: File.open("db/seed_images/pexels-kindel-media-7294550.jpg"), filename: "unicornfloatie.jpg")

  rubber_ducky = Product.create!(name: "Rubber Ducky", description: "Designed by Google to maximize productivity, this rubber ducky is invaluable for debugging. It can also be used for bathtime debugging.", category: gamestoys, price: 3.25, keywords: ["rubber", "pool", "ducky", "bath", "bathtime", "kids", "games", "toys", "toy"])
  rubber_ducky.photo.attach(io: File.open("db/seed_images/timothy-dykes-LhqLdDPcSV8-unsplash.jpg"), filename: "rubberducky.jpg")

  rubiks_cube = Product.create!(name: "Rubik's Cube", description: "Hours of fun or frustration!", category: gamestoys, price: 11.60, keywords: ["rubik", "rubik's", "rubiks", "cube", "game", "kids", "games", "toys", "toy"])
  rubiks_cube.photo.attach(io: File.open("db/seed_images/pexels-miguel-á-padriñán-19677.jpg"), filename: "rubikscube.jpg")

  homekitchen = "Home and Kitchen"

  bath_towel = Product.create!(name: "100% Egyptian Cotton Bath Towel", description: "Plush and absorbent, 100% Egyptian cotton bath towel. Doubles as a blanket.", category: homekitchen, price: 17.39, keywords: ["bath", "shower", "towel", "bathroom", "soft", "home", "warm"])
  bath_towel.photo.attach(io: File.open("db/seed_images/pexels-thomas-cotton-12679.jpg"), filename: "bathtowel.jpg")
  
  gray_chair = Product.create!(name: "Gray Chair", description: "Comfy gray chair for sitting.", category: homekitchen, price: 30.50, keywords: ["furniture", "gray", "chair", "couch", "sofa", "home", "stool", "table"])
  gray_chair.photo.attach(io: File.open("db/seed_images/sam-moqadam-kvmdsTrGOBM-unsplash.jpg"), filename: "graychair.jpg")

  harry_potter_mug = Product.create!(name: "Harry Potter Themed Mug", description: "Porcelain mug features your favorite character from the Wizarding World of Harry Potter. Perfect for the Potterhead in your life!", category: homekitchen, price: 12.99, keywords: ["mug", "harry", "potter", "drink", "food", "home", "kitchen", "coffee", "tea", "cup"])
  harry_potter_mug.photo.attach(io: File.open("db/seed_images/shche_-team-sattOLy8szI-unsplash.jpg"), filename: "harrypottermug.jpg")

  houseplant = Product.create!(name: "Houseplant", description: "Cute houseplant for home decor.", category: homekitchen, price: 12.00, keywords: ["houseplant", "succulent", "plant", "decor", "home", "cute"])
  houseplant.photo.attach(io: File.open("db/seed_images/laura-chouette-4I6WCknRBbg-unsplash.jpg"), filename: "houseplant.jpg")

  cactus_houseplant = Product.create!(name: "Cactus Houseplant", description: "Cute succulent that's easy to take care of.", category: homekitchen, price: 13.50, keywords: ["cactus", "houseplant", "succulent", "plant", "home", "decor", "cute"])
  cactus_houseplant.photo.attach(io: File.open("db/seed_images/annie-spratt-fbAnIjhrOL4-unsplash.jpg"), filename: "cactus.jpg")
  cactus_houseplant_review = Review.create!(user_id: demo_user4.id, product_id: cactus_houseplant.id, rating: 4, title: "Spikey guy", body: "Super easy to take care of but pet carefully.")
  
  schooloffice = "School and Office"

  gray_backpack = Product.create!(name: "Gray Backpack", description: "Medium-sized backpack for school and carrying things.", category: schooloffice, price: 39.20, keywords: ["school", "office", "backpack", "bag", "gray"])
  gray_backpack.photo.attach(io: File.open("db/seed_images/cosiela-borta-08BZDHJ7GOg-unsplash.jpg"), filename: "backpack.jpg")

  crayons = Product.create!(name: "Crayons", description: "Colorful crayons for the artist in everyone! Now comes in multiple colors.", category: schooloffice, price: 4.50, keywords: ["school", "crayons", "crayon", "color", "coloring", "colorful", "art", "artist", "kids", "supplies"])
  crayons.photo.attach(io: File.open("db/seed_images/hello-i-m-nik-m8qFTh2qcTQ-unsplash.jpg"), filename: "crayons.jpg")
  
  electronics = "Electronics"
  
  polaroid_camera = Product.create!(name: "Polaroid camera", description: "Save all your precious memories in tiny, little sheets of paper.", category: electronics, price: 85.25, keywords: ["camera", "polaroid", "photo", "photos", "cameras", "polaroids", "technology", "electronics", "pictures", "photography"])
  polaroid_camera.photo.attach(io: File.open("db/seed_images/lacie-slezak-59cQbAeFHp4-unsplash.jpg"), filename: "polaroidcamera.jpg")

  airpods = Product.create!(name: "Airpods", description: "Big sound from tiny earbuds.", category: electronics, price: 199.99, keywords: ["music", "headphones", "earbuds", "airpods", "sound", "electronics", "apple", "earphones", "song", "songs", "technology"])
  airpods.photo.attach(io: File.open("db/seed_images/insung-yoon-mru38VH7tII-unsplash.jpg"), filename: "airpods.jpg")
  airpods_review = Review.create!(user_id: demo_user8.id, product_id: airpods.id, rating: 3, title: "Easy to lose", body: "I kept losing them so I had to tape them to my ears permanently. Sound was good.")
  airpods_review2 = Review.create!(user_id: demo_user9.id, product_id: airpods.id, rating: 5, title: "Great for hands-free use", body: "Really useful whenever I have my hands stuck in jars and need to make phone calls.")
  
  alwayzon_fire = Product.create!(name: "Alwayzon Fire", description: "Enjoy on-the-go reading with the Alwayzon Fire. Thousands of books at your fingertips. Now with wifi leeching!", category: electronics, price: 150.99, keywords: ["read", "reading", "fire", "books", "alwayzon", "e-books", "online", "book"])
  alwayzon_fire.photo.attach(io: File.open("db/seed_images/olga-tutunaru-RMgQQntEkWM-unsplash.jpg"), filename: "alwayzonfire.jpg")
  alwayzon_fire_review = Review.create!(user_id: demo_user3.id, product_id: alwayzon_fire.id, rating: 5, title: "Reading is fun!", body: "My daughter used to hate reading. Ever since I got her a Fire, she said she likes physical books better. Got her to like books!")
  alwayzon_fire_review2 = Review.create!(user_id: demo_user7.id, product_id: alwayzon_fire.id, rating: 2, title: "Pricey!", body: "Why pay $100+ when I can read unlimited books for free at my local library? Alwayzon sus.")

  sportsoutdoors = "Sports and Outdoors"
  
  bike_helmet = Product.create!(name: "Bike helmet", description: "Protect your noggin. Stylish and crafted to fit normal-sized heads.", category: sportsoutdoors, price: 29.99, keywords: ["helmet", "bike", "bicycle", "motorcycle", "gear", "sports", "outdoors", "safety", "protection", "head"])
  bike_helmet.photo.attach(io: File.open("db/seed_images/cobi-krumholz-UdtaDdyu1O0-unsplash.jpg"), filename: "bikehelmet.jpg")
  
  dog_bags = Product.create!(name: "Dog Poopy Bags", description: "Make poopy time less poopy with these cute, scented doggie poo bags.", category: sportsoutdoors, price: 11.20, keywords: ["dog", "pet", "poop", "bag", "bags", "animal", "doggie", "baggie"])
  dog_bags.photo.attach(io: File.open("db/seed_images/aldo-delara-hztee92Tlgk-unsplash.jpg"), filename: "dogbags.jpg")
  dog_bags_review = Review.create!(user_id: demo_user2.id, product_id: dog_bags.id, rating: 2, title: "Has air holes", body: "These bags are covered in air holes to air out the smelliness. Not ideal for my hands.")
  dog_bags_review2 = Review.create!(user_id: demo_user9.id, product_id: dog_bags.id, rating: 4, title: "Safe for kids!", body: "The air holes make it safe for kids! No safety hazards here!")
  
  cart_item1 = CartItem.create!(user_id: demo_user1.id, product_id: toner.id, quantity: 1)
  cart_item2 = CartItem.create!(user_id: demo_user1.id, product_id: airpods.id, quantity: 1)
end