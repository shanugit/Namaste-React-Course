import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  /**
   * if we subscribe to the comlpete store then also out app will work
   * But that a mazor performance degradation we are doing as when anything
   * changes in the store the subscriber component will re render.
   *
   * We only want to render any component when related state changes,
   * for this we need to subscribe only to specific slice of store, not the complete store.
   *
   * const store = useSelector((store) => store); // this is not at all recomended
   */

  const dispatch = useDispatch();

  function emptyCart() {
    dispatch(clearCart());
  }

  return (
    <div>
      <button
        className="p-2 m-2 bg-red-400 rounded-lg"
        onClick={() => emptyCart()}
      >
        Clear Cart
      </button>
      <ul>
        {cartItems.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
