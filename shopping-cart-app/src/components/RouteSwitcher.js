import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import shoppingImageSrc from "../images/shopping.jpg";

function RouteSwitcher() {
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
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default RouteSwitcher;
