// To be tested:

// - Incoming command messages effects with direct, public side-effects:
//     - Specifics:

//         - Specific:
//             - Essentially, the creation of an Shop component should cause the rendering of 
//               what's in its return statement, this rendering being a public side-effect that 
//               is directly resulted by Shop
//             - Make sure specific input props lead to the correct output (child) props
//             - N.B.: not entirely sure if this fits the above definition but I think it works 
//               for now
//         - Method of testing:         
//             - Make assertions about said side-effects (the rendering)
//             - Will have to mock child CartTracker component
//             - Will have to mock child ItemList component

//         - Specific:
//             - Another incoming command message is a call to modifyQuantityChosen (from, for 
//               example, a deeper-down QuantityInput component); this should have the effect 
//               of changing the state allQuantitiesChosen, which is in the highest level of 
//               the same Shop component (so this is a direct side-effect) and 
//               allQuantitiesChosen is passed down to child components, meaning it can be 
//               thought of as public
//         - Method of testing:
//             - Make assertions about said side-effects (allQuantitiesChosen)

import { render, screen } from "@testing-library/react";
import Shop from "../Shop";

jest.mock("../CartTracker", () => ({cartSize}) => (
    <div data-testid="CartTracker-cartSize">{cartSize}</div>
));

jest.mock("../ItemList", () => ({
    availableItemNames, allQuantitiesChosen, forQuantityChosenChange
}) => (
    <>
        <div data-testid="ItemList-availableItemNames">{availableItemNames.toString()}</div>
        <div data-testid="ItemList-allQuantitiesChosen">{allQuantitiesChosen.toString()}</div>
        <div data-testid="ItemList-forQuantityChosenChange">{forQuantityChosenChange.name}</div>
    </>
));

const testAvailableItems = [
    {
        name: "Toothbrush",
        initialQuantityChosen: 2
    },
    {
        name: "Bike",
        initialQuantityChosen: 0
    }
];

const testShop = <Shop
    availableItems={testAvailableItems}
/>

const testAvailableItemNames = testAvailableItems.map(
    item => item.name
);
const testAllInitialQuantitiesChosen = testAvailableItems.map(
    item => item.initialQuantityChosen
);
const testInitialCartSize = testAllInitialQuantitiesChosen.reduce((cumulativeSum, cur) => cumulativeSum + cur, 0);

describe("Shop component", () => {
    describe("rendering", () => {
        it("renders CartTracker with correct cartSize", () => {
            render(testShop);

            expect(screen.getByTestId("CartTracker-cartSize").textContent).toBe(
                testInitialCartSize.toString()
            );
        });
        it("renders ItemList with correct availableItemNames, allQuantitiesChosen and forQuantityChosenChange", () => {
            render(testShop);

            expect(screen.getByTestId("ItemList-availableItemNames").textContent).toBe(
                testAvailableItemNames.toString()
            );
            expect(screen.getByTestId("ItemList-allQuantitiesChosen").textContent).toBe(
                testAllInitialQuantitiesChosen.toString()
            );
            // TODO: replace the below test with a more robust solution
            expect(screen.getByTestId("ItemList-forQuantityChosenChange").textContent).toBe(
                "modifyQuantityChosen"
            );
        });
    });
});
