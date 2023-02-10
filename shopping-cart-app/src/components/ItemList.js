import ItemCard from "./ItemCard";

function ItemList({availableItems}) {
    return (
        <div className="ItemList">
            {availableItems.map((item, index) => {
                const itemName = item.name;
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
