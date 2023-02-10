import ItemCard from "./ItemCard";

function ItemList({availableItemNames, allQuantitiesChosen}) {
    return (
        <div className="ItemList">
            {availableItemNames.map((itemName, index) => {
                const quantityChosen = allQuantitiesChosen[index];
                return (
                    <ItemCard
                        key={index}
                        itemName={itemName}
                        quantityChosen={quantityChosen}
                    />
                );
            })}
        </div>
    );
}

export default ItemList;
