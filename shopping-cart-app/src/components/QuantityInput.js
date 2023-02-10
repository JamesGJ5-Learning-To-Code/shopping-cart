import uniqid from "uniqid";

function QuantityInput({quantityChosen}) {
    const inputID = uniqid();
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
            />
        </div>
    );
}

export default QuantityInput;
