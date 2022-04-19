import { CountAmount } from "./CountAmount";
export const ProductsItem = ({
  idProduct,
  image,
  name,
  price,
  quantity,
  handleIncrease,
  handleDecrease,
  handleRemove,
}) => {
  return (
    <div className="product_item">
      <div className="product_image">
        <img src={image} alt="product-image" />
      </div>
      <div className="product_info">
        <div className="product_name">{name}</div>
        <div className="product_price">{price}</div>
        <div className="remove_btn" onClick={() => handleRemove(idProduct)}>
          Xoa
        </div>
      </div>
      <CountAmount
        quantity={quantity}
        handleDecrease={handleDecrease}
        handleIncrease={handleIncrease}
        idProduct={idProduct}
      />
    </div>
  );
};
