import RouteSwitcher from "./RouteSwitcher";

function ShoppingCartSite({availableItems}) {
    const checkValidity = (initialQuantityChosen) => {
        return (
            initialQuantityChosen < 0 ||
            !Number.isInteger(initialQuantityChosen)
        );
    };
    const checkInitialQuantitiesChosen = () => {
        if (availableItems.some(item => checkValidity(item.initialQuantityChosen))) {
            throw new Error("All initialQuantityChosen values must be integers <= 0");
        };
    };
    checkInitialQuantitiesChosen();
    return (
        <div className="ShoppingCartSite">
            <RouteSwitcher
                availableItems={
                    availableItems
                }
            />
        </div>
    );
}

export default ShoppingCartSite;
