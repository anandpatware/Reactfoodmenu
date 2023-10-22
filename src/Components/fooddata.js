const foodData = [
  {
    imageUrl:
      "https://www.thegrilledcheesetruck.com/wp-content/uploads/2017/03/gct-menu21-800x600.jpg",
    name: "Burger",
    description: "Delicious burger with all the fixings",
    price: 5.99,
  },
  {
    imageUrl:
      "https://blueprint-api-production.s3.amazonaws.com/uploads/card/image/917437/3261d336-f53b-44a0-abdb-69792f60af66.jpg",
    name: "Pizza",
    description: "A classic pizza with your favorite toppings",
    price: 9.99,
  },
  {
    imageUrl:
      "https://tastychomps.com/wp-content/uploads/2019/06/P6150451-800x600.jpg",
    name: "Sushi",
    description: "Fresh sushi rolls made to order",
    price: 12.99,
  },
  {
    imageUrl:
      "https://cdn.styleblueprint.com/wp-content/uploads/2019/07/SB-BHM-Food-Truck-Mustard-Seed-Food-Co-hot-mess-fries.jpg",
    name: "Pasta",
    description: "Homemade pasta with rich tomato sauce",
    price: 8.99,
  },
  {
    imageUrl:
      "https://snworksceo.imgix.net/cav/8ed1b226-a90d-4c2d-9216-99689efa4334.sized-1000x1000.jpg?w=800",
    name: "Salad",
    description: "Healthy salad with fresh vegetables",
    price: 6.99,
  },
  {
    imageUrl:
      "https://www.whatsonnetwork.co.uk/uploads/800x600/e6e34f13ec62f43638b808feb55fab9e.jpg",
    name: "Steak",
    description: "Juicy steak cooked to perfection",
    price: 14.99,
  },
  {
    imageUrl:
      "https://news.wbfo.org/sites/wbfo/files/styles/medium/public/201907/table_food.jpg",
    name: "Ice Cream",
    description: "Creamy ice cream in various flavors",
    price: 3.99,
  },
  {
    imageUrl:
      "https://craftcleaver.co.uk/wp-content/uploads/2017/10/sharing-platter-on-blue-square-angle-800x600.jpg",
    name: "Tacos",
    description: "Tasty tacos with your choice of fillings",
    price: 7.99,
  },
  {
    imageUrl:
      "https://theculturetrip.com/wp-content/uploads/2015/12/800px-Hoppers_at_house_of_dosas.jpg",
    name: "Fried Chicken",
    description: "Crispy fried chicken with secret spices",
    price: 10.99,
  },
  {
    imageUrl:
      "https://s3-prod.adage.com/s3fs-public/styles/800x600/public/80_ChickenMcNuggetHappyMeal.jpg",
    name: "Sushi Platter",
    description: "Assorted sushi rolls on a platter",
    price: 24.99,
  },
  {
    imageUrl:
      "https://porteliotfestival.com/wp-content/uploads/2017/04/Port-Eliot-Festival-2017-294A3665-800x600.jpg",
    name: "Sandwich",
    description: "Freshly made sandwiches with your choice of fillings",
    price: 6.49,
  },
  {
    imageUrl:
      "https://www.mykadhai.com/assets/images/img-4142-2000x1500-800x600.jpg",
    name: "Soup",
    description: "Hot and comforting soups for all seasons",
    price: 4.99,
  },
  {
    imageUrl:
      "https://nwatravelguide.com/wp-content/uploads/2018/05/The-Hive-800x600.jpg",
    name: "BBQ Ribs",
    description: "Tender BBQ ribs with smoky flavor",
    price: 13.99,
  },
  {
    imageUrl: "https://www.mjseatery.com/images/buritto.jpg",
    name: "Fish & Chips",
    description: "Classic fish and chips with tartar sauce",
    price: 9.49,
  },
  {
    imageUrl:
      "https://imagevars.gulfnews.com/2019/07/18/Deccan-Delight-biryani_16c043a76bd_original-ratio.jpg",
    name: "Vegetarian Curry",
    description: "Spicy vegetarian curry with rice",
    price: 11.49,
  },
  {
    imageUrl:
      "https://www.mykadhai.com/assets/images/img-4142-2000x1500-800x600.jpg",
    name: "Cheesecake",
    description: "Rich and creamy cheesecake with toppings",
    price: 5.99,
  },
  {
    imageUrl:
      "https://imagevars.gulfnews.com/2019/07/18/Deccan-Delight-biryani_16c043a76bd_original-ratio.jpg",
    name: "Milkshake",
    description: "Thick and indulgent milkshakes in various flavors",
    price: 4.99,
  },
  {
    imageUrl:
      "https://imagevars.gulfnews.com/2019/07/18/Deccan-Delight-biryani_16c043a76bd_original-ratio.jpg",
    name: "Donuts",
    description: "Freshly baked donuts with glaze or sprinkles",
    price: 2.49,
  },
  {
    imageUrl: "https://www.mjseatery.com/images/buritto.jpg",
    name: "Fruit Salad",
    description: "Refreshing fruit salad with seasonal fruits",
    price: 3.99,
  },
  {
    imageUrl:
      "https://imagevars.gulfnews.com/2019/07/18/Deccan-Delight-biryani_16c043a76bd_original-ratio.jpg",
    name: "Cupcakes",
    description: "Assorted cupcakes with colorful frosting",
    price: 2.99,
  },
];

const dinner = [
  {
    imageUrl:
      "https://www.thegrilledcheesetruck.com/wp-content/uploads/2017/03/gct-menu21-800x600.jpg",
    name: "Burger",
    description: "Delicious burger with all the fixings",
    price: 5.99,
  },
  {
    imageUrl:
      "https://blueprint-api-production.s3.amazonaws.com/uploads/card/image/917437/3261d336-f53b-44a0-abdb-69792f60af66.jpg",
    name: "Pizza",
    description: "A classic pizza with your favorite toppings",
    price: 9.99,
  },
  {
    imageUrl:
      "https://tastychomps.com/wp-content/uploads/2019/06/P6150451-800x600.jpg",
    name: "Sushi",
    description: "Fresh sushi rolls made to order",
    price: 12.99,
  },
  {
    imageUrl:
      "https://cdn.styleblueprint.com/wp-content/uploads/2019/07/SB-BHM-Food-Truck-Mustard-Seed-Food-Co-hot-mess-fries.jpg",
    name: "Pasta",
    description: "Homemade pasta with rich tomato sauce",
    price: 8.99,
  },
];
const lunch = [
  {
    imageUrl:
      "https://porteliotfestival.com/wp-content/uploads/2017/04/Port-Eliot-Festival-2017-294A3665-800x600.jpg",
    name: "Sandwich",
    description: "Freshly made sandwiches with your choice of fillings",
    price: 6.49,
  },
  {
    imageUrl:
      "https://www.mykadhai.com/assets/images/img-4142-2000x1500-800x600.jpg",
    name: "Soup",
    description: "Hot and comforting soups for all seasons",
    price: 4.99,
  },
  {
    imageUrl:
      "https://nwatravelguide.com/wp-content/uploads/2018/05/The-Hive-800x600.jpg",
    name: "BBQ Ribs",
    description: "Tender BBQ ribs with smoky flavor",
    price: 13.99,
  },
  {
    imageUrl: "https://www.mjseatery.com/images/buritto.jpg",
    name: "Fish & Chips",
    description: "Classic fish and chips with tartar sauce",
    price: 9.49,
  },
  {
    imageUrl:
      "https://imagevars.gulfnews.com/2019/07/18/Deccan-Delight-biryani_16c043a76bd_original-ratio.jpg",
    name: "Vegetarian Curry",
    description: "Spicy vegetarian curry with rice",
    price: 11.49,
  },
  {
    imageUrl:
      "https://www.mykadhai.com/assets/images/img-4142-2000x1500-800x600.jpg",
    name: "Cheesecake",
    description: "Rich and creamy cheesecake with toppings",
    price: 5.99,
  },
  {
    imageUrl:
      "https://imagevars.gulfnews.com/2019/07/18/Deccan-Delight-biryani_16c043a76bd_original-ratio.jpg",
    name: "Milkshake",
    description: "Thick and indulgent milkshakes in various flavors",
    price: 4.99,
  },
  {
    imageUrl:
      "https://imagevars.gulfnews.com/2019/07/18/Deccan-Delight-biryani_16c043a76bd_original-ratio.jpg",
    name: "Donuts",
    description: "Freshly baked donuts with glaze or sprinkles",
    price: 2.49,
  },
  {
    imageUrl: "https://www.mjseatery.com/images/buritto.jpg",
    name: "Fruit Salad",
    description: "Refreshing fruit salad with seasonal fruits",
    price: 3.99,
  },
  {
    imageUrl:
      "https://imagevars.gulfnews.com/2019/07/18/Deccan-Delight-biryani_16c043a76bd_original-ratio.jpg",
    name: "Cupcakes",
    description: "Assorted cupcakes with colorful frosting",
    price: 2.99,
  },
];
export default foodData;
export { dinner, lunch };
