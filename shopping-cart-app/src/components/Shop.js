import CartTracker from "./CartTracker";
import ItemCard from "./ItemCard";

function Shop({availableItemNames}) {
    return (
        <div className="Shop">
            <CartTracker />
            {availableItemNames.map((itemName, index) => {
                return (
                    <ItemCard
                        key={index}
                        itemName={itemName}
                    />
                );
            })}
        </div>
    );
}

export default Shop;
