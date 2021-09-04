# E-Prozar Sprint 1

## Story

Create a website for the local grocery store.


## What are you going to learn?

- render the objects from a list with react in the DOM
- working with object properties
- react basic syntax usage

## Tasks

1. Display each product from the list `productList` in a separate card
   - When opening the page with `npm start` you see each product from  `productList` in a separate card
   - Each card contains on a separate line the product `price`, `description`, `category`, `name`, `image`, `shortDescription`

2. Each row displaying the list of cards is rendered on 3 columns
   - When opening the page with `npm start` you see each row has 3 cards 

3. When selecting the mobile view from the developer tools each row has only 1 column
   - When opening the page with `npm start` and setting the web  browser in mobile view from the developer tools each row has only 1 card

4. Display a section with a random project which has it's price reduced to half
   - When opening the page with `npm start` you see a section with a  product which is on offer
   - Each time you reload the web page there is a different product on offer
   - The product which is on offer has it's old price displayed and the  new price which is half (rounded down) the initial price

5. The section containing the random product of the day shows today's date in the format day_number - month_word (1 July instead of 01.07)
   - When opening the page with `npm start` in the section with the random offer of the day, today's date is displayed in the format  day_number - month_word (1 July instead of 01.07)

## Hints

- once you start the project you first need to install the react library with `npm install`
- once all the react libraries are installed, you can start the project  with `npm start`
- to reduce the amount of CSS used, you can import the bootstrap library

# E-Prozar Sprint 2

## What are you going to learn?

- react state hooks
- updating arrays through stata hooks

## Tasks

1. The page has a select box which filters all the available products
    - When clicking the select by category input there are `21` items to choose from
    - When selecting the `Garden` category the only products displayed are `Incredible Rubber Mouse`, `Intelligent Granite Car` and `Licensed Cotton Bacon`
    - There is a reset all filters button which clears the values entered in all the filters and shows all the elements
    - When the user scrolls the page the section with filters always remains visible (is sticky)

2. The page has besides the select box a text box which further filters the products by `name`
    - Setting the category `Garden` and the name `incredible` the only product which is displayed is `Incredible Rubber Mouse`
    - The text is case `insensitive` so typing `FISH` will display `Practical Plastic Fish`, `Gorgeous Plastic Fish`, `Ergonomic Fresh Fish` and `Incredible Plastic Fish`

3. The page has besides the select box and text box a number box which filters the products which have their `price` at least the value entered there
    - Setting the category `Garden` the name `in` and the minimum price `200` the only product which is displayed is `Intelligent Granite Car`

4. Each product card has a `Add to cart` button
    - Clicking the `Add to cart` button changes the button's name to `Remove from Cart`
    - Clicking the `Remove from cart` button changes the button's name to `Add to Cart`
    - When clicking the `Add to cart` button for the `Incredible Rubber Mouse` and selecting the category `Garden` the product `Incredible Rubber Mouse` still has the button with the label `Remove from cart`

5. Show a shopping cart icon which has the total number of products which have been added to the cart.
    - Clicking the `Add to cart` button for a single product changes the shopping cart's total displayed items from 0 to 1
    - Clicking the `Remove from cart` button for a product decreases by 1 the total number of added to cart items
    - Clicking the `Add to cart` button for a 2 products changes the shopping cart's total displayed items from 1 to 2

## Hints

- once you start the project you first need to install the react library with `npm install`
- once all the react libraries are installed, you can start the project  with `npm start`
- when updating an array through a react hook it is necessary to give as parameter for the setter a new array instead of the current array with a modified object (more info in background materials)

## Images

![img1](https://user-images.githubusercontent.com/70704394/132097783-5a5f972a-266b-4a77-964a-29b5710cfbf5.png)
![img2](https://user-images.githubusercontent.com/70704394/132097786-3d85698f-dfae-4159-b577-0298a46b2d39.png)

