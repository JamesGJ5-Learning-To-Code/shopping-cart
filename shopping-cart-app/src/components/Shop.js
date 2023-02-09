import CartTracker from "./CartTracker";
import ItemCard from "./ItemCard";

function Shop({availableItemNames}) {
    return (
        <div className="Shop">
            <CartTracker />
            {/* TODO: consider putting the below into a grouping component, for 
            styling etc. */}
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
