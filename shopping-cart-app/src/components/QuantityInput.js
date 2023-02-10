import uniqid from "uniqid";

function QuantityInput() {
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
            />
        </div>
    );
}

export default QuantityInput;
