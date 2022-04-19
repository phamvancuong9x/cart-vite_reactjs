export const HeaderCart = ({ amount }) => {
  return (
    <div className="header">
      <h2>Giỏ hàng</h2>
      <div className="icon_cart">
        <i className="bi bi-basket3-fill"></i>
        <div className="total-amount">{amount}</div>
      </div>
    </div>
  );
};
