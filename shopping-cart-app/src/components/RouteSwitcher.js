import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Home from "./Home";
import shoppingImageSrc from "../images/shopping.jpg";
import Shop from "./Shop";

function RouteSwitcher({availableItems}) {
    // TODO: consider using a common array/object literal to load similar information into both 
    // the routes below and the NavigationBar, in order to achieve DRY
    return (
        <div className="RouteSwitcher">
            <BrowserRouter>
                <NavigationBar
                    routeList={
                        [
                            {
                                label: "Home",
                                relativePath: "/"
                            },
                            {
                                label: "Shop",
                                relativePath: "/shop"
                            }
                        ]
                    }
                />
                <Routes>
                    <Route path="/" element={
                        <Home
                            websiteType="shopping"
                            imageSrc={shoppingImageSrc}
                        />
                    } />
                    <Route path="/shop" element={
                        <Shop
                            availableItems={availableItems}
                        />
                    } />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default RouteSwitcher;
