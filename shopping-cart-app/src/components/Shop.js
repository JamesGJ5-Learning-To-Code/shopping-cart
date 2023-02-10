import { useState } from "react";
import CartTracker from "./CartTracker";
import ItemList from "./ItemList";

function Shop({availableItems}) {
    const allInitialQuantitiesChosen = availableItems.map(
        item => item.initialQuantityChosen
    );
    const [allQuantitiesChosen, setAllQuantitiesChosen] = useState(allInitialQuantitiesChosen);
    const getArraySum = (arr) => {
        return arr.reduce((cumulativeSum, cur) => cumulativeSum + cur, 0)
    }
    const availableItemNames = availableItems.map(
        item => item.name
    );
    const getDeepCopy = (copiedObject) => {
        return JSON.parse(JSON.stringify(copiedObject));
    }
    const modifyQuantityChosen = (index, newValue) => {
        const newAllQuantitiesChosen = getDeepCopy(allQuantitiesChosen);
        newAllQuantitiesChosen[index] = newValue;
        setAllQuantitiesChosen(newAllQuantitiesChosen);
    };
    return (
        <div className="Shop">
            <CartTracker
                cartSize={getArraySum(allQuantitiesChosen)}
            />
            <ItemList
                availableItemNames={availableItemNames}
                allQuantitiesChosen={allQuantitiesChosen}
                forQuantityChosenChange={modifyQuantityChosen}
            />
        </div>
    );
}

export default Shop;
