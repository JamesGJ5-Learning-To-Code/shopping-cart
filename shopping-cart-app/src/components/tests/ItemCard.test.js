// To be tested:

// - Incoming command messages effects with direct, public side-effects:
//     - Specific:
//         - Essentially, the creation of an ItemCard component should cause the rendering of 
//           what's in its return statement, this rendering being a public side-effect that is 
//           directly resulted by ItemCard
//         - Make sure specific input props lead to the correct output (child) props
//         - N.B.: not entirely sure if this fits the above definition but I think it works for 
//           now
//     - Method of testing:         
//         - Make assertions about said side-effects (the rendering)
//         - Will have to mock child QuantityInput component
//         - Specifically, going to:
//              - Mock the QuantityInput child component, supplying to it a data-test-id
//              - Try to render an ItemCard with the following props:
//                  - itemName: testItemName = "skateboard"
//                  - quantityChosen: testQuantityChosen = 4
//                  - indexOfQuantityChosen: testIndexOfQuantityChosen = 2
//                  - forQuantityChosenChange: testForQuantityChosenChange = jest.fn()
//              - Then, make sure the correct text content (itemName) can be found via 
//                getByText without throwing an error
//              - Find the child mocked QuantityInput component via getByTestId and make 
//                sure it has all the correct props (quantityChosen of testQuantityChosen, 
//                indexOfQuantityChosen of testIndexOfQuantityChosen and 
//                forQuantityChosenChange of testForQuantityChosenChange)
