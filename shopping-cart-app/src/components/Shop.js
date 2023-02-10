import CartTracker from "./CartTracker";
import ItemList from "./ItemList";

function Shop({availableItemNames}) {
    return (
        <div className="Shop">
            <CartTracker />
            <ItemList
                availableItemNames={availableItemNames}
            />
        </div>
    );
}

export default Shop;
