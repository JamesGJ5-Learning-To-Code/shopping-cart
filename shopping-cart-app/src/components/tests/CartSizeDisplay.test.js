// To be tested:
    
// - Incoming command messages effects with direct, public side-effects:
//     - Specific:
//         - Essentially, the creation of an CartSizeDisplay component should cause the rendering of what's in its return statement, this rendering being a public side-effect that is directly resulted by CartSizeDisplay
//         - Make sure specific input props lead to the correct output (child) props
//         - N.B.: not entirely sure if this fits the above definition but I think it works for now
//     - Method of testing:         
//         - Make assertions about said side-effects (the rendering)
//         - Specifically, going to:
//              - Try to render a CartSizeDisplay component with particular props passed to 
//                it (say, a chosen integer for cartSize, e.g. 8)
//              - Expect:
//                  - getByText("There are 8 [get "8" via same const cartSize used 
//                    for rendering] items in the cart!") toBeInTheDocument

import {render, screen} from "@testing-library/react";
import CartSizeDisplay from "../CartSizeDisplay";

const testCartSize = 8;

describe("CartSizeDisplay component", () => {
    describe("rendering", () => {
        it("renders the correct text", () => {
            render(
                <CartSizeDisplay
                    cartSize={testCartSize}
                />  
            );

            expect(
                screen.getByText(`There are ${testCartSize} items in the cart!`)
            ).toBeInTheDocument();
        });
    });
});