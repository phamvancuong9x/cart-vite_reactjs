export const TotalAmount = ({ total }) => {
  return (
    <div className="cart-total">
      <h4>
        Tổng Tiền
        <span className="totalMoney">{total}</span>
      </h4>
    </div>
  );
};
