export const CountAmount = ({
  idProduct,
  quantity,
  handleIncrease,
  handleDecrease,
}) => {
  return (
    <div className="detailProduct__quantity-input">
      <span
        className="icon-minus-modal icon-quantity-modal "
        onClick={() => handleDecrease(idProduct)}
      >
        <i className="bi bi-dash"></i>
      </span>
      <div className="quantity">{quantity}</div>
      <span
        className="icon-plus-modal icon-quantity-modal"
        onClick={() => handleIncrease(idProduct)}
      >
        <i className="bi bi-plus-lg"></i>
      </span>
    </div>
  );
};
