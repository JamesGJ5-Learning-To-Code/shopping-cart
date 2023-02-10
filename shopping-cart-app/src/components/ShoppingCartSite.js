import RouteSwitcher from "./RouteSwitcher";

function ShoppingCartSite({availableItems}) {
    // Example of what availableItems prop should look like while being written 
    // into a ShoppingCart component tag:
    // availableItems={
    //     [
    //     {
    //         name: "Hoover",
    //         initialQuantityChosen: 0
    //     },
    //     {
    //         name: "Duster",
    //         initialQuantityChosen: 0
    //     },
    //     {
    //         name: "Sponge",
    //         initialQuantityChosen: 0
    //     }
    //     ]
    // }
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
