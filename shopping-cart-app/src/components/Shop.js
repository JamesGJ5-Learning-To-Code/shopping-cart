import { useState } from "react";
import CartTracker from "./CartTracker";
import ItemList from "./ItemList";

function Shop({availableItems}) {
    const allInitialQuantitiesChosen = availableItems.map(
        item => item.initialQuantityChosen
    );
    const [allQuantitiesChosen, setAllQuantitiesChosen] = useState(allInitialQuantitiesChosen);
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
