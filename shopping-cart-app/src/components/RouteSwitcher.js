import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import shoppingImageSrc from "../images/shopping.jpg";
import Shop from "./Shop";

function RouteSwitcher({availableItemNames}) {
    return (
        <div className="RouteSwitcher">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <Home
                            websiteType="shopping"
                            imageSrc={shoppingImageSrc}
                        />
                    } />
                    <Route path="/shop" element={
                        <Shop
                            availableItemNames={availableItemNames}
                        />
                    } />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default RouteSwitcher;
