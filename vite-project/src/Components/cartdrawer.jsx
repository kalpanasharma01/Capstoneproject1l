export default function CartDrawer({ cart, setCart, onClose, onCheckout }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const removeItem = id => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="cart-overlay">
      <div className="cart-drawer">
        <div className="cart-head">
          <h2>Your Cart</h2>
          <button className="close-btn" onClick={onClose}>✖</button>
        </div>

        <div className="cart-body">
          {cart.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cart-item">
                <span>{item.name}</span>
                <span>₹{item.price}</span>
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer">
          <span>Total: ₹{total}</span>
          <button onClick={onCheckout}>Checkout</button>
        </div>
      </div>
    </div>
  );
}
