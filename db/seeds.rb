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
  friends_dvd_review = Review.create!(user_id: demo_user7.id, product_id: friends_dvd.id, rating: 5, title: "Now I can watch endless re-runs for the rest of my life!", body: "I can't tell what I love more, the Friends series or the nostalgia. Probably the nostalgia.")

  harry_potter_books = Product.create!(name: "Harry Potter Collector’s Edition", description: "Bundle of all seven books in the Harry Potter series for ‘Sirius’ fans of the Wizarding World.", category: booksmovies, price: 80.99, keywords: ["harry", "potter", "book", "magic", "wizard", "movie", "books", "movies", "series"])
  harry_potter_books.photo.attach(io: File.open("db/seed_images/madalyn-cox-YuUz5uQkaXM-unsplash.jpg"), filename: "harrypotterbooks.jpg")
  harry_potter_books_review = Review.create!(user_id: demo_user5.id, product_id: harry_potter_books.id, rating: 5, title: "Great buy!", body: "I love the HP series but the DVDs were too expensive so I bought the books.")
  harry_potter_books_review2 = Review.create!(user_id: demo_user9.id, product_id: harry_potter_books.id, rating: 1, title: "Old and used!", body: "Too many books. Do not recommend.")

  sculpture_book = Product.create!(name: "Sculpture from Antiquity to the Middle Ages", description: "A history of sculptures from a long, long time ago to a long time ago", category: booksmovies, price: 21.50, keywords: ["book", "sculpture", "novel", "read", "reading", "books", "paperback", "sculptures", "history"])
  sculpture_book.photo.attach(io: File.open("db/seed_images/jeet-dhanoa-nHH0ivMd9gw-unsplash.jpg"), filename: "sculpturebook.jpg")
  sculpture_book_review = Review.create!(user_id: demo_user3.id, product_id: sculpture_book.id, rating: 5, title: "Really interesting read. I learned a lot of history today.", body: "I learned more than I'll ever need to know about sculptures. I'm finally ready to make that clay pot I've waited for years to make.")
  sculpture_book_review2 = Review.create!(user_id: demo_user4.id, product_id: sculpture_book.id, rating: 4, title: "So this is what they did for fun before the internet!", body: "This was a cool book. Lost one star because it was required reading for class :(")

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
  clay_face_mask_review = Review.create!(user_id: demo_user8.id, product_id: clay_face_mask.id, rating: 3, title: "Great mask but takes effort to prepare.", body: "This made my skin super soft but mixing it with water made my arm so tired. Never again.")

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
  rose_gold_watch_review = Review.create!(user_id: demo_user8.id, product_id: rose_gold_watch.id, rating: 5, title: "Super consistent.", body: "This was the most consistent watch I've ever owned. Everytime I look at it, it shows the same time!")

  brown_handbag = Product.create!(name: "Brown Handbag", description: "Large bag to fit everything you will ever need.", category: fashionjewelry, price: 53.70, keywords: ["handbag", "bag", "purse", "brown", "luxury", "fashion"])
  brown_handbag.photo.attach(io: File.open("db/seed_images/irene-kredenets-tcVH_BwHtrc-unsplash.jpg"), filename: "brownhandbag.jpg")

  nike_air_shoes = Product.create!(name: "Nike Air Shoes", description: "Comfortable and stylish shoes for walking or running.", category: fashionjewelry, price: 98.50, keywords: ["shoes", "shoe", "nike", "clothes", "fashion", "clothing", "athletic", "exercise"])
  nike_air_shoes.photo.attach(io: File.open("db/seed_images/ryan-plomp-PGTO_A0eLt4-unsplash.jpg"), filename: "nikeairshoes.jpg")
  nike_air_shoes_review = Review.create!(user_id: demo_user7.id, product_id: nike_air_shoes.id, rating: 2, title: "Did not fit", body: "I learned today that shoes are not one-size-fits-all. Disappointed :(")
  nike_air_shoes_review2 = Review.create!(user_id: demo_user6.id, product_id: nike_air_shoes.id, rating: 3, title: "Just okay", body: "I bought these to use as beds for my hamsters. Hard to clean.")

  star_earrings= Product.create!(name: "Golden Star Earrings", description: "24k gold earrings in the shape of twinkly stars.", category: fashionjewelry, price: 95.97, keywords: ["gold", "earrings", "stars", "dangling", "jewelry", "hanging", "diamonds"])
  star_earrings.photo.attach(io: File.open("db/seed_images/gabrielle-henderson-XTp4ZzD76Xw-unsplash.jpg"), filename: "starearrings.jpg")
  star_earrings_review = Review.create!(user_id: demo_user4.id, product_id: star_earrings.id, rating: 4, title: "Love them!", body: "Could not be more happy with my purchase! These look just like the real thing.")
  star_earrings_review2 = Review.create!(user_id: demo_user6.id, product_id: star_earrings.id, rating: 1, title: "False advertising", body: "Not real stars from outer space. These are made of gold.")

  tan_wallet= Product.create!(name: "Thin tan wallet", description: "Leather card holder with space for one card and maybe a few dollar bills, and thin enough to fit comfortably in your pocket", category: fashionjewelry, price: 23.99, keywords: ["thin", "tan", "wallet", "brown", "cards", "holder", "fashion", "leather", "money"])
  tan_wallet.photo.attach(io: File.open("db/seed_images/stephen-phillips-hostreviews-co-uk-em37kS8WJJQ-unsplash.jpg"), filename: "tanwallet.jpg")
  tan_wallet_review = Review.create!(user_id: demo_user5.id, product_id: tan_wallet.id, rating: 3, title: "It’s a wallet", body: "I don’t make much money nowadays ever since I lost my job at Mickey D’s, so I decided to downgrade to a smaller and thinner wallet. This one gets the job done, unlike me.")
  tan_wallet_review2 = Review.create!(user_id: demo_user9.id, product_id: tan_wallet.id, rating: 1, title: "Poor quality!", body: "You get what you pay for. This wallet ripped in half within a few days and all my Benjamins fell out!!")

  gamestoys = "Games and Toys"

  unicorn_floatie = Product.create!(name: "Unicorn Pool Inflatable", description: "Up your pool game with a magical, mystical beast (with cupholders!)", category: gamestoys, price: 21.25, keywords: ["floatie", "pool", "unicorn", "inflatable", "summer", "swim", "games", "toys", "kids", "toy", "game"])
  unicorn_floatie.photo.attach(io: File.open("db/seed_images/pexels-kindel-media-7294550.jpg"), filename: "unicornfloatie.jpg")
  unicorn_floatie_review = Review.create!(user_id: demo_user3.id, product_id: unicorn_floatie.id, rating: 5, title: "Super cute floatie.", body: "I really like this floatie. I may buy another one for the kitchen and dining room.")

  poker_set = Product.create!(name: "Poker Set", description: "Great at-home poker set for when you want to gamble but can't afford to lose any more money in Vegas.", category: gamestoys, price: 31.85, keywords: ["poker", "set", "game", "gamble", "gambling", "cards", "play", "toys", "toy", "games"])
  poker_set.photo.attach(io: File.open("db/seed_images/chris-liverani-MJX7-BAdkt0-unsplash.jpg"), filename: "poker.jpg")
  poker_set_review = Review.create!(user_id: demo_user2.id, product_id: poker_set.id, rating: 3, title: "Lost money twice", body: "I lost money when I bought this, then lost money again when I gambled. Buyer beware.")
  poker_set_review2 = Review.create!(user_id: demo_user9.id, product_id: poker_set.id, rating: 5, title: "Poker night every night!", body: "It started out as every weekend, but now I play poker every single night. I think it's fine.")

  rubber_ducky = Product.create!(name: "Rubber Ducky", description: "Designed by Google to maximize productivity, this rubber ducky is invaluable for debugging. It can also be used for bathtime debugging.", category: gamestoys, price: 3.25, keywords: ["rubber", "pool", "ducky", "bath", "bathtime", "kids", "games", "toys", "toy", "game"])
  rubber_ducky.photo.attach(io: File.open("db/seed_images/timothy-dykes-LhqLdDPcSV8-unsplash.jpg"), filename: "rubberducky.jpg")

  rubiks_cube = Product.create!(name: "Rubik's Cube", description: "Hours of fun or frustration!", category: gamestoys, price: 11.60, keywords: ["rubik", "rubik's", "rubiks", "cube", "game", "kids", "games", "toys", "toy"])
  rubiks_cube.photo.attach(io: File.open("db/seed_images/pexels-miguel-á-padriñán-19677.jpg"), filename: "rubikscube.jpg")
  rubiks_cube_review = Review.create!(user_id: demo_user5.id, product_id: rubiks_cube.id, rating: 3, title: "Too hard.", body: "This was too hard to solve. Now it sits on my desk as a reminder of my failures.")

  homekitchen = "Home and Kitchen"

  bath_towel = Product.create!(name: "100% Egyptian Cotton Bath Towel", description: "Plush and absorbent, 100% Egyptian cotton bath towel. Doubles as a blanket.", category: homekitchen, price: 17.39, keywords: ["bath", "shower", "towel", "bathroom", "soft", "home", "warm"])
  bath_towel.photo.attach(io: File.open("db/seed_images/pexels-thomas-cotton-12679.jpg"), filename: "bathtowel.jpg")
  bath_towel_review = Review.create!(user_id: demo_user6.id, product_id: bath_towel.id, rating: 5, title: "Multipurpose", body: "These towels are so soft and warm that I sewed ten of these together to make a winter coat for myself.")
  
  cactus_houseplant = Product.create!(name: "Cactus Houseplant", description: "Cute succulent that's easy to take care of.", category: homekitchen, price: 13.50, keywords: ["cactus", "houseplant", "succulent", "plant", "home", "decor", "cute"])
  cactus_houseplant.photo.attach(io: File.open("db/seed_images/annie-spratt-fbAnIjhrOL4-unsplash.jpg"), filename: "cactus.jpg")
  cactus_houseplant_review = Review.create!(user_id: demo_user4.id, product_id: cactus_houseplant.id, rating: 4, title: "Spikey guy", body: "Super easy to take care of but pet carefully.")
  
  gray_chair = Product.create!(name: "Gray Chair", description: "Comfy gray chair for sitting.", category: homekitchen, price: 30.50, keywords: ["furniture", "gray", "chair", "couch", "sofa", "home", "stool", "table"])
  gray_chair.photo.attach(io: File.open("db/seed_images/sam-moqadam-kvmdsTrGOBM-unsplash.jpg"), filename: "graychair.jpg")

  harry_potter_mug = Product.create!(name: "Harry Potter Themed Mug", description: "Porcelain mug features your favorite character from the Wizarding World of Harry Potter. Perfect for the Potterhead in your life!", category: homekitchen, price: 12.99, keywords: ["mug", "harry", "potter", "drink", "food", "home", "kitchen", "coffee", "tea", "cup"])
  harry_potter_mug.photo.attach(io: File.open("db/seed_images/shche_-team-sattOLy8szI-unsplash.jpg"), filename: "harrypottermug.jpg")
  harry_potter_mug_review = Review.create!(user_id: demo_user7.id, product_id: harry_potter_mug.id, rating: 3, title: "Not magic.", body: "I know it was a lot to ask for but I wanted a magic mug. This wasn't it.")
  harry_potter_mug_review2 = Review.create!(user_id: demo_user8.id, product_id: harry_potter_mug.id, rating: 5, title: "Realistic!", body: "It looks just like Harry Potter! I started making conversation with it and realized it was just a mug. How fun!")

  houseplant = Product.create!(name: "Houseplant", description: "Cute houseplant for home decor.", category: homekitchen, price: 12.00, keywords: ["houseplant", "succulent", "plant", "decor", "home", "cute"])
  houseplant.photo.attach(io: File.open("db/seed_images/laura-chouette-4I6WCknRBbg-unsplash.jpg"), filename: "houseplant.jpg")
  
  schooloffice = "School and Office"

  crayons = Product.create!(name: "Crayons", description: "Colorful crayons for the artist in everyone! Now comes in multiple colors.", category: schooloffice, price: 4.50, keywords: ["school", "crayons", "crayon", "color", "coloring", "colorful", "art", "artist", "kids", "supplies"])
  crayons.photo.attach(io: File.open("db/seed_images/hello-i-m-nik-m8qFTh2qcTQ-unsplash.jpg"), filename: "crayons.jpg")
  crayons_review = Review.create!(user_id: demo_user6.id, product_id: crayons.id, rating: 2, title: "Misleading", body: "I was so excited to see colors but all the crayons were gray. Like traffic lights.")
  
  stapler = Product.create!(name: "Ergonomic stapler", description: "Ergonomic stapler for stapling up to 7,326 times without cramping!", category: schooloffice, price: 16.98, keywords: ["stapler", "school", "office", "work", "desk", "staple", "staples", "staplers", "tool", "supplies"])
  stapler.photo.attach(io: File.open("db/seed_images/brett-jordan-xG5caIE3tLU-unsplash.jpg"), filename: "stapler.jpg")
  stapler_review = Review.create!(user_id: demo_user7.id, product_id: stapler.id, rating: 5, title: "Comfortable to use", body: "I staple nonstop all day for work and my hand feels great!")
  
  gray_backpack = Product.create!(name: "Gray Backpack", description: "Medium-sized backpack for school and carrying things.", category: schooloffice, price: 39.20, keywords: ["school", "office", "backpack", "bag", "gray"])
  gray_backpack.photo.attach(io: File.open("db/seed_images/cosiela-borta-08BZDHJ7GOg-unsplash.jpg"), filename: "backpack.jpg")
  
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

  macbook = Product.create!(name: "Macbook Air", description: "Sleek, powerful laptop for school, work, or to look busy at the local coffeeshop.", category: electronics, price: 999.99, keywords: ["laptop", "computer", "macbook", "mac", "air", "desktop", "tech", "technology", "electronics", "work", "school", "machine"])
  macbook.photo.attach(io: File.open("db/seed_images/goran-ivos-wJpl8D38Tq8-unsplash.jpg"), filename: "macbook.jpg")
  macbook_review = Review.create!(user_id: demo_user4.id, product_id: macbook.id, rating: 5, title: "Great laptop. No complaints.", body: "This is a great laptop. So is the Macbook Pro. They're both great. Windows is good too. It's all good.")

  sportsoutdoors = "Sports and Outdoors"
  
  bike_helmet = Product.create!(name: "Bike helmet", description: "Protect your noggin. Stylish and crafted to fit normal-sized heads.", category: sportsoutdoors, price: 29.99, keywords: ["helmet", "bike", "bicycle", "motorcycle", "gear", "sports", "outdoors", "safety", "protection", "head"])
  bike_helmet.photo.attach(io: File.open("db/seed_images/cobi-krumholz-UdtaDdyu1O0-unsplash.jpg"), filename: "bikehelmet.jpg")
  
  dog_bags = Product.create!(name: "Dog Poopy Bags", description: "Make poopy time less poopy with these cute, scented doggie poo bags.", category: sportsoutdoors, price: 11.20, keywords: ["dog", "pet", "poop", "bag", "bags", "animal", "doggie", "baggie", "outdoors"])
  dog_bags.photo.attach(io: File.open("db/seed_images/aldo-delara-hztee92Tlgk-unsplash.jpg"), filename: "dogbags.jpg")
  dog_bags_review = Review.create!(user_id: demo_user2.id, product_id: dog_bags.id, rating: 2, title: "Has air holes", body: "These bags are covered in air holes to air out the smelliness. Not ideal for my hands.")
  dog_bags_review2 = Review.create!(user_id: demo_user9.id, product_id: dog_bags.id, rating: 4, title: "Safe for kids!", body: "The air holes make it safe for kids! No safety hazards here!")
  
  soccer_ball = Product.create!(name: "Soccer ball", description: "Great for playing soccer! Not recommended for use in other sports.", category: sportsoutdoors, price: 18.75, keywords: ["soccer", "ball", "soccerball", "sport", "sports", "outdoors", "play", "game"])
  soccer_ball.photo.attach(io: File.open("db/seed_images/damir-spanic-tyj4B-lpS6M-unsplash.jpg"), filename: "soccerball.jpg")
  soccer_ball_review = Review.create!(user_id: demo_user6.id, product_id: soccer_ball.id, rating: 3, title: "FOOTBALL", body: "I wish more people would call it football instead of soccer. Other than the name, it was a good ball.")
  soccer_ball_review2 = Review.create!(user_id: demo_user7.id, product_id: soccer_ball.id, rating: 5, title: "Great for autographs!", body: "I don't play soccer but this is a great ball to bring to soccer games and ask for autographs. It's very soccerball-looking.")
end