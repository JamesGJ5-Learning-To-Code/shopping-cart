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

import { render, screen } from "@testing-library/react";
import ItemCard from "../ItemCard";

jest.mock("../QuantityInput", () => ({
    quantityChosen, indexOfQuantityChosen, forQuantityChosenChange}) => (
        <>
            {/* TODO: check if it is meant to be data-testid instead */}
            <div data-testid="quantityChosen">{quantityChosen}</div>
            <div data-testid="indexOfQuantityChosen">{indexOfQuantityChosen}</div>
            {forQuantityChosenChange()}
        </>
));

const testItemName = "skateboard";
const testQuantityChosen = 4;
const testIndexOfQuantityChosen = 2;
const testForQuantityChosenChange = jest.fn(() => "correct function");

const testItemCard = <ItemCard
    itemName={testItemName}
    quantityChosen={testQuantityChosen}
    indexOfQuantityChosen={testIndexOfQuantityChosen}
    forQuantityChosenChange={testForQuantityChosenChange}
/>;

describe("ItemCard component", () => {
    describe("rendering", () => {
        it("renders correct item name in text content", () => {
            render(testItemCard);

            expect(screen.getByText(testItemName)).toBeInTheDocument();
        });
        it("renders QuantityInput with correct props", () => {
            render(testItemCard);

            expect(screen.getByTestId("quantityChosen").textContent).toBe("4");
            expect(screen.getByTestId("indexOfQuantityChosen").textContent).toBe("2");
            expect(testForQuantityChosenChange).toHaveBeenCalledTimes(1);
        });
    });
});