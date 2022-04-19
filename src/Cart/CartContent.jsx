import { ProductsItem } from "./ProductsItem";
export const CartContent = ({
  cart,
  handleIncrease,
  handleDecrease,
  handleRemove,
}) => {
  return (
    <div className="cart">
      {cart.map((value) => {
        return (
          <ProductsItem
            key={value.id}
            idProduct={value.id}
            name={value.name}
            image={value.image}
            price={value.price}
            quantity={value.quantity}
            handleDecrease={handleDecrease}
            handleIncrease={handleIncrease}
            handleRemove={handleRemove}
          />
        );
      })}
    </div>
  );
};
