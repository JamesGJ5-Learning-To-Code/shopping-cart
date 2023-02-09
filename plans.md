# From TOP

1. Application should have at least two routes (I.E. individual Route components that the router picks between)

2. Decide:
    - Component and folder structure
    - How to set up the application
    - Which components/functionalities are needed

3. Have at least the following pages:
    - A homepage
    - A shop page, which includes the shopping cart

4. Let a user navigate between the pages with a navigation bar, shown on both routes
    - The 'Router' Lesson of TOP is pertinent to routing (funnily enough): https://www.theodinproject.com/lessons/node-path-javascript-router
    - Assignment 3 in the aforementioned lesson is particular pertinent to the navigation bar, just remember the implementation is an older Router version: https://www.youtube.com/watch?v=Law7wfdg_ls

5. Add a few images or information to the homepage, anything basic

6. On the shopping cart route:
    i) User should see a sticky bar (it can just be a top section) displaying the number of items in the cart
    ii) Have a button next to "it" to go to the cart checkout and pay (NOT to be implemented)

7. Build card items in the SHOP for each product, featuring:
    i) An input for user to select how many items to buy
    ii) A button for incrementing the aforementioned quantity
    ii) A button for decrementing the aforementioned quantity
    iii) A title for each product
    iv) An "Add To Card" button

8. Number of items in the cart should adjust when something is added to the cart

9. Test app thoroughly:
    - Via React Testing Library
    - Don't directly test react-router-dom