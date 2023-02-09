import CartTracker from "./CartTracker";

function Shop({availableItemNames}) {
    return (
        <div className="Shop">
            <CartTracker />
        </div>
    );
}

export default Shop;
