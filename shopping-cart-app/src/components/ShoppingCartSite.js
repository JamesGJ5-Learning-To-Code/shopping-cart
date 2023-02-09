import RouteSwitcher from "./RouteSwitcher";

function ShoppingCartSite(props) {
    return (
        <div className="ShoppingCartSite">
            <RouteSwitcher
                availableItemNames={
                    props.availableItemNames
                }
            />
        </div>
    );
}

export default ShoppingCartSite;
