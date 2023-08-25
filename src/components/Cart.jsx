import styles from "./Cart.module.css";

const Cart = ({ cartList, totalPrice }) => {
  return (
    <div className={styles.container}>
      <span>Cart</span>
      {cartList.length === 0 ? (
        <p className={styles.empty}>No product added to the cart</p>
      ) : (
        <ul className={styles.productListContainer}>
          {cartList.map((item) => (
            <li key={item.product.id} className={styles.productItem}>
              <span> {item.product.name} </span>
              <span>
                {item.quantity}x{item.product.price}
              </span>
            </li>
          ))}
          <div className={styles.total}>
            <span>Total:</span>
            <span>${totalPrice}</span>
          </div>
        </ul>
      )}
    </div>
  );
};

export default Cart;
