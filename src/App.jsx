// import Home from "./pages/Home";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { useState, useEffect } from "react";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cardData, setCardData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("https://640e0588b07afc3b0dbcf7b0.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setCardData(json);
      });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems([...cartItems, obj]);
  };

  console.log(cartItems);

  return (
    <div className="wrapper">
      {cartOpen && (
        <Drawer
          items={cartItems}
          onCloseCart={() => {
            setCartOpen(false);
          }}
        />
      )}
      <Header
        onClikCart={() => {
          setCartOpen(true);
        }}
      />
      <div className="content">
        <div className="content-header">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="img/search.svg" alt="Search" />

            <img src="img/btn-remove.svg" alt="Clear" />

            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="content-cards">
          {cardData.map((card) => (
            <Card
              title={card.name}
              price={card.price}
              image={card.image}
              onAdd={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
