import RouteSwitcher from "./RouteSwitcher";

function ShoppingCartSite({availableItems}) {
    return (
        <div className="ShoppingCartSite">
            <RouteSwitcher
                availableItems={
                    availableItems
                }
            />
        </div>
    );
}

export default ShoppingCartSite;
