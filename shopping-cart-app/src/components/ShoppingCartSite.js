import RouteSwitcher from "./RouteSwitcher";

function ShoppingCartSite({availableItemNames}) {
    return (
        <div className="ShoppingCartSite">
            <RouteSwitcher
                availableItemNames={
                    availableItemNames
                }
            />
        </div>
    );
}

export default ShoppingCartSite;
