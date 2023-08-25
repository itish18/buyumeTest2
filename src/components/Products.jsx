import styles from "./Products.module.css";

const Product = ({ productList, onAddToCart, onRemoveFromCart, cartItems }) => {
  return (
    <div className={styles.container}>
      <span>Products</span>
      <ul className={styles.productListContainer}>
        {productList.map((product) => (
          <li key={product.id} className={styles.productItem}>
            <span>{product.name}</span>
            <span>${product.price}</span>
            <div className={styles.quantityContainer}>
              <button onClick={() => onAddToCart(product)}>+</button>
              <span>
                {cartItems.find((item) => item.product.id === product.id)
                  ?.quantity || 0}
              </span>
              <button onClick={() => onRemoveFromCart(product)}>-</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
