import CartSizeDisplay from "./CartSizeDisplay";
import CheckoutButton from "./CheckoutButton";

function CartTracker({cartSize}) {
    return (
        <div className="CartTracker">
            <CartSizeDisplay
                cartSize={cartSize}
            />
            <CheckoutButton />
        </div>
    )
}

export default CartTracker;
