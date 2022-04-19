import { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./style.css";
import { CartContent } from "./CartContent";
import { cart } from "./constants";
import { HeaderCart } from "./HeaderCart";
import { TotalAmount } from "./TotalAmount";

const Cart = () => {
  const [cartState, setCartState] = useState({
    cart: [],
    total: 0,
    amount: 0,
  });
  useEffect(() => {
    let total = cart.reduce((total, current) => {
      total += current.price * current.quantity;
      return total;
    }, 0);
    let amount = cart.reduce((amount, current) => {
      amount += current.quantity;
      return amount;
    }, 0);
    setCartState({
      cart,
      total,
      amount,
    });
  }, []);
  const handleSetState = (cart) => {
    let newTotal = cart.reduce((total, current) => {
      total += current.price * current.quantity;
      return total;
    }, 0);

    let newAmount = cart.reduce((amount, current) => {
      amount += current.quantity;

      return amount;
    }, 0);
    setCartState({
      ...cartState,
      cart: cart,
      amount: newAmount,
      total: newTotal,
    });
  };
  const handleIncrease = (idProduct) => {
    let newCart = cartState.cart.map((value) => {
      if (value.id == idProduct) {
        return { ...value, quantity: value.quantity + 1 };
      }
      return value;
    });

    handleSetState(newCart);
  };
  const handleRemove = (idProduct) => {
    let newCart = cartState.cart.filter((value) => {
      return value.id != idProduct;
    });
    handleSetState(newCart);
  };
  const handleDecrease = (idProduct) => {
    let newCart = cartState.cart.map((value) => {
      if (value.id == idProduct && value.quantity > 1) {
        return { ...value, quantity: value.quantity - 1 };
      }
      return value;
    });
    handleSetState(newCart);
  };
  const handleRemoveAll = () => {
    setCartState({ cart: [], amount: 0, total: 0 });
  };
  return (
    <div className="container">
      <HeaderCart amount={cartState.amount} />
      <h3 className="breadcrumbs__content-title"> GIỎ HÀNG CỦA BẠN</h3>
      <CartContent
        cart={cartState.cart}
        handleDecrease={handleDecrease}
        handleIncrease={handleIncrease}
        handleRemove={handleRemove}
      />
      {cartState.cart.length == 0 ? (
        <h3>không có sản phẩm !</h3>
      ) : (
        <>
          <TotalAmount total={cartState.total} />
          <div className="btn">
            <button className="btn-clear" onClick={handleRemoveAll}>
              Xóa Tất cả
            </button>
          </div>
        </>
      )}
    </div>
  );
};
export default Cart;
