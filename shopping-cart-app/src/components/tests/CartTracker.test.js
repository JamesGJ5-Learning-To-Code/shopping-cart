// To be tested:

// - Incoming command messages effects with direct, public side-effects:
//     - Specific:
//         - Essentially, the creation of an CartTracker component should cause the rendering 
//           of what's in its return statement, this rendering being a public side-effect that 
//           is directly resulted by CartTracker
//         - Make sure specific input props lead to the correct output (child) props
//         - N.B.: not entirely sure if this fits the above definition but I think it works for 
//            now
//     - Method of testing:         
//         - Make assertions about said side-effects (the rendering)
//         - Will have to mock child CartSizeDisplay component
//         - Will have to mock child CheckoutButton component
//         - Specifically, going to:
//              - Mock the CartSizeDisplay component, giving it a data-testid to allow it to 
//                be found and making it render props.cartSize as its text content
//              - Mock CheckoutButton, giving it a data-testid to allow it to be found
//              - Try to render a CartTracker with the following props:
//                  - cartSize: testCartSize = 5
//              - Then, make sure a mocked CartSizeDisplay can be found by using the 
//                data-testid and getByTestId and ensure its text content is "5"
//              - Also, make sure a mocked CheckoutButton can be found via its data-testid 
//                and getByTestId

import { render, screen } from "@testing-library/react";
import CartTracker from "../CartTracker";
import ItemCard from "../ItemCard";

jest.mock("../CartSizeDisplay", () => ({cartSize}) => (
    <div data-testid="cartSize">{cartSize}</div>
));

jest.mock("../CheckoutButton", () => () => (
    <div data-testid="checkoutButton"></div>
));

const testCartSize = 5;

const testCartTracker = <CartTracker
    cartSize={testCartSize}
/>;

describe("CartTracker component", () => {
    describe("rendering", () => {
        it("renders CartSizeDisplay correctly", () => {
            render(testCartTracker);

            expect(screen.getByTestId("cartSize").textContent).toBe(testCartSize.toString());
        });
        it("renders CheckoutButton correctly", () => {
            render(testCartTracker);

            expect(screen.getByTestId("checkoutButton")).toBeInTheDocument();
        });
    });
});