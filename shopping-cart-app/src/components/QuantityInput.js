import uniqid from "uniqid";

function QuantityInput() {
    const inputID = uniqid();
    return (
        <div className="QuantityInput">
            <input
                id={inputID}
                type="number"
                min="0"
            />
        </div>
    );
}

export default QuantityInput;
