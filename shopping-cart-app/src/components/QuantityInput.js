import uniqid from "uniqid";

function QuantityInput({quantityChosen, indexOfQuantityChosen, forQuantityChosenChange}) {
    const inputID = uniqid();
    const handleChange = (event) => {
        // TODO: imitate Amazon's input
        const newValue = event.target.value;
        if (newValue !== '') {
            const newQuantityChosen = parseInt(newValue);
            forQuantityChosenChange(indexOfQuantityChosen, newQuantityChosen);
        };
    };
    return (
        <div className="QuantityInput">
            <label
                htmlFor={inputID}
            >
                Quantity:{' '}
            </label>
            <input
                id={inputID}
                type="number"
                min="0"
                value={quantityChosen}
                onChange={handleChange}
            />
        </div>
    );
}

export default QuantityInput;
