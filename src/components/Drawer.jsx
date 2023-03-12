function Drawer({ onCloseCart, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          Корзина{" "}
          <img
            className="remove-btn"
            src="img/btn-remove.svg"
            alt="Close"
            onClick={onCloseCart}
          />
        </h2>

        <div className="cart-items">
          <div className="items">
            {items.map((item) => (
              <div className="cart-item">
                <div
                  style={{ backgroundImage: `url(${item.image})` }}
                  className="cart-item-img"
                ></div>

                <div className="cart-item-price">
                  <p>{item.title}</p>
                  <b>{item.price} руб.</b>
                </div>
                <img
                  className="remove-btn"
                  src="img/btn-remove.svg"
                  alt="Remove"
                />
              </div>
            ))}
            {/* <div className="cart-item">
              <div
                style={{ backgroundImage: "url(/img/goods/1.jpg)" }}
                className="cart-item-img"
              ></div>

              <div className="cart-item-price">
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>200 руб.</b>
              </div>
              <img
                className="remove-btn"
                src="img/btn-remove.svg"
                alt="Remove"
              />
            </div> */}
          </div>
          <div className="cart-total-block">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>200 руб. </b>
              </li>
              <li>
                <span>Скидка 5%:</span>
                <div></div>
                <b>10 руб. </b>
              </li>
            </ul>
            <button className="green-button">
              Оформить заказ <img src="img/arrow.svg" alt="Arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
