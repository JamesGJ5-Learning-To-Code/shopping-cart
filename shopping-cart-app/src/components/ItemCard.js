import QuantityInput from "./QuantityInput";

function ItemCard({itemName, quantityChosen, indexOfQuantityChosen, forQuantityChosenChange}) {
    return (
        <div className="quantityInput">
            {itemName}
            <QuantityInput
                quantityChosen={quantityChosen}
                indexOfQuantityChosen={indexOfQuantityChosen}
                forQuantityChosenChange={forQuantityChosenChange}
            />
        </div>
    );
}

export default ItemCard;
