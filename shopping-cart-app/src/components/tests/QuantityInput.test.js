// To be tested:

// - Incoming command messages effects with direct, public side-effects:
//     - Specific:
//         - Essentially, the creation of a QuantityInput component should cause the rendering 
//           of what's in its return statement, this rendering being a public side-effect that 
//           is directly resulted by QuantityInput
//         - Make sure specific input props lead to the correct output (child) props
//         - N.B.: not entirely sure if this fits the above definition but I think it works for 
//           now
//     - Method of testing:
//         - Make assertions about said side-effects (the rendering)
//         - Specifically, going to:
//              - Try to render a QuantityInput component with particular props passed to it 
//                (say, a quantityChosen of 4, an indexOfQuantityChosen of 5 and a 
//                forQuantityChosenChange equal to some Jest-mocked function)
//              - Might also see if I can mock uniqid to store some constant ID
//              - Expect:
//                  - Get the label in a constant, and assert that it has a htmlFor equal to 
//                  a string version of the correct ID and a textContent of "Quantity: "
//                  - Get the input in a constant and assert that it has an id equal to the 
//                  correct ID, a type of "number", a min of "0", and a value equal to 
//                  quantityChosen
//                  - Simulate an input onChange event to a value of "9" and assert that the 
//                  forQuantityChosenChange is called once, with the arguments 
//                  (indexOfQuantityChosen and "9") passed to it
//                  - Simulate an input onChange event to a value of "" and assert that the 
//                  forQuantityChosenChange is not called