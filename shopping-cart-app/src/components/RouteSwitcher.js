import { BrowserRouter, Routes, Route } from "react-router-dom";

const routeComponentArray = [];

function RouteSwitcher() {
    return (
        <div className="RouteSwitcher">
            <BrowserRouter>
                <Routes>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default RouteSwitcher;
