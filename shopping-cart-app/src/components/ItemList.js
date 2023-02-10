import ItemCard from "./ItemCard";

function ItemList({availableItemNames, allQuantitiesChosen, forQuantityChosenChange}) {
    return (
        <div className="ItemList">
            {availableItemNames.map((itemName, index) => {
                const quantityChosen = allQuantitiesChosen[index];
                return (
                    <ItemCard
                        key={index}
                        itemName={itemName}
                        quantityChosen={quantityChosen}
                        indexOfQuantityChosen={index}
                        forQuantityChosenChange={forQuantityChosenChange}
                    />
                );
            })}
        </div>
    );
}

export default ItemList;
