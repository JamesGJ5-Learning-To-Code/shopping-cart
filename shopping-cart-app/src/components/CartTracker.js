import CartSizeDisplay from "./CartSizeDisplay";
import CheckoutButton from "./CheckoutButton";

function CartTracker() {
    return (
        <div className="CartTracker">
            <CartSizeDisplay />
            <CheckoutButton />
        </div>
    )
}

export default CartTracker;
