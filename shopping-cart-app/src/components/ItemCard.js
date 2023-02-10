import QuantityInput from "./QuantityInput";

function ItemCard({itemName, quantityChosen}) {
    return (
        <div className="quantityInput">
            {itemName}
            <QuantityInput
                quantityChosen={quantityChosen}
            />
        </div>
    );
}

export default ItemCard;
