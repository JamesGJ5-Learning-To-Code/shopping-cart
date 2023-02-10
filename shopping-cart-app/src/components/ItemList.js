import ItemCard from "./ItemCard";

function ItemList({availableItemNames}) {
    return (
        <div className="ItemList">
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

export default ItemList;
