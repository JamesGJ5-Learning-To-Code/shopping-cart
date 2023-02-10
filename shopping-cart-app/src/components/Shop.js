import CartTracker from "./CartTracker";
import ItemList from "./ItemList";

function Shop({availableItems}) {
    return (
        <div className="Shop">
            <CartTracker />
            <ItemList
                availableItems={availableItems}
            />
        </div>
    );
}

export default Shop;
