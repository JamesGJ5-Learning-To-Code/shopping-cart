// To be tested:
// 
// - Incoming command messages effects with direct, public side-effects:
//     - Specific:
//         - Essentially, the creation of a Home component should cause the rendering of 
//           what's in its return statement, this rendering being a public side-effect that 
//           is directly resulted by Home
//         - Make sure specific input props lead to the correct output (child) props
//         - N.B.: not entirely sure if this fits the above definition but I think it works 
//           for now
//     - Method of testing:
//         - Make assertions about said side-effects (the rendering)
//         - Specifically, going to:
//              - Try to render a Home component with particular props passed to it (say, a 
//                website type of "cooking" and a src for an empty test jpg in tests/)
//              - Expect:
//                  - getByText("Welcome to my cooking [get "cooking" via same const used 
//                    for rendering] website!") toBeInTheDocument
//                  - Note: the above also ensures that said text content is present, as if 
//                    it isn't, getBy will not match anything and will thus throw an error
//                  - getByRole(img).src.toBe(src of image used)
//                  - getByRole(img).alt.toBe(src of image used)
//                  - May need to use getAtrribute to get some of the above properties

import { render, screen } from "@testing-library/react";
import Home from "../Home";
import testImageSrc from "./testImage.jpg";

const testWebsiteType = "cooking";

describe("Home component", () => {
    describe("rendering", () => {
        it("renders the correct welcome message", () => {
            render(
                <Home
                    websiteType={testWebsiteType}
                    imageSrc={testImageSrc}
                />
            );

            expect(
                screen.getByText(`Welcome to my ${testWebsiteType} website!`)
            ).toBeInTheDocument();
        });
        it("renders the correct image", () => {
            render(
                <Home
                    websiteType={testWebsiteType}
                    imageSrc={testImageSrc}
                />
            );

            expect(
                // Remember, alt should be src until this alt is replaced in Home.js
                screen.getByAltText(testImageSrc).src
            ).toMatch(testImageSrc);
        });
    });
});