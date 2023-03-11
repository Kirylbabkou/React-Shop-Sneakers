import Home from "./pages/Home";

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="header-left">
          <img width={40} height={40} src="img/logo.png" alt="Logotype" />
          <div>
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>

        <ul className="header-right">
          <li className="header-cart">
            <img width={18} height={18} src="img/cart.svg" alt="Корзина" />
            <span>200 руб.</span>
          </li>
          <li className="mr-20 cu-p">
            <img width={18} height={18} src="img/favorite.svg" alt="Закладки" />
          </li>
          <li>
            <img width={18} height={18} src="img/user.svg" alt="Пользователь" />
          </li>
        </ul>
      </header>
      <Home />
    </div>
  );
}

export default App;
