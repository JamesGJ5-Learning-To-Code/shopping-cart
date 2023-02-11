// To be tested:

// - Incoming command messages effects with direct, public side-effects:
//     - Specific:
//         - Essentially, the creation of an CheckoutButton component should cause the 
//           rendering of what's in its return statement, this rendering being a public 
//           side-effect that is directly resulted by CheckoutButton
//         - Make sure specific input props lead to the correct output (child) props
//         - N.B.: not entirely sure if this fits the above definition but I think it works 
//           for now
//     - Method of testing:         
//         - Make assertions about said side-effects (the rendering)
//         - Specifically, going to:
//              - Try to render a CheckoutButton component
//              - Expect:
//                  - A button is rendered with explanatory text content ("Pay")

import { render, screen } from "@testing-library/react";
import CheckoutButton from "../CheckoutButton";

describe("CheckoutButton component", () => {
    describe("rendering", () => {
        it("renders a button with 'pay' as text content", () => {
            render(
                <CheckoutButton/>
            );

            expect(
                screen.getByRole('button', {name: /Pay/i})
            ).toBeInTheDocument();
        });
    });
});
