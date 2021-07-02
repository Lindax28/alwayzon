# Alwayzon
![Alwayzon logo](/app/assets/images/light-logo.png)

[Alwayzon Live Site](https://alwayzon.herokuapp.com/)

Alwayzon, an Amazon clone, is an e-commerce marketplace and retailer that allows users to browse a range of products and make online purchases. Users can browse products via a category or search filter, post product reviews, view other users' reviews, and add, remove, or update products in their shopping cart.

Alwayzon was built with:
- Ruby on Rails
- JSX/JavaScript
- PostgreSQL
- ActiveStorage
- React
- Redux
- AWS S3

## Features

### Home Page and Navbar
The home page features a selection of categories to browse products by category. The navbar includes a searchbar to search by keywords, with the option to filter the search for specific categories. The navbar also includes options to sign up or log in, as well as a cart, which displays the number of items in the shopping cart.

The searchbar was a challenge because search phrases need to be compared with keyword tags for each product. This was implemented by providing each product a list of words associated with the item. Then the search phrase was parsed into words and compared with the tags of each product, irrespective of letter case. It performs a query for each search and must search through each product's list of keywords. An improvement can be made by creating a separate keyword table with a product foreign key and identify matching products in a single pass.

![Home page and navbar](/app/assets/images/home_page.png)

### Product Details Page
The product details page provides details for each product, including an image, name, description, price, and average rating, as well as user reviews. Here, users can leave product reviews or add the item to their cart. 

![Product details](/app/assets/images/product_details_page.png)

### Shopping Cart
Users may add products to their shopping cart then choose to resume shopping or view their cart. The cart presents detailed information for each product with options to update the quantity or delete the item from the cart.

Incorporating user feedback when an item is added to the shopping cart was tricky because it needs to be apparent without being intrusive. To display the updated size of the shopping cart, the cart icon in the navbar will update its number when an item is added to the cart. Additionally, a message will appear at the top of the page, informing the user that the item has been added to the cart and the user can opt to continue shopping or view their cart. This provides transparency and additional ease of navigation.

![Shopping cart](/app/assets/images/shopping_cart_page.png)


