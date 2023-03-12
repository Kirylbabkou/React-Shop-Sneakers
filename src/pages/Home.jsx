import Card from "../components/Card";

const cardData = [
  {
    name: "Мужские Кроссовки Nike Air Max 270",
    price: 210,
    image: "/img/goods/2.jpg",
  },
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 210,
    image: "/img/goods/3.jpg",
  },
  {
    name: "Кроссовки Puma X Aka Boku Future Rider",
    price: 210,
    image: "/img/goods/4.jpg",
  },
  {
    name: "Мужские Кроссовки Under Armour Curry 8",
    price: 210,
    image: "/img/goods/5.jpg",
  },
  {
    name: "Мужские Кроссовки Nike Kyrie 7",
    price: 210,
    image: "/img/goods/6.jpg",
  },
];

const onClickBtn = () => {
  alert("kll");
};

function Home() {
  return (
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
            onClickPlus={onClickBtn}
          />
        ))}

        {/* <Card
          title="Мужские Кроссовки Nike Blazer Mid Suede"
          price={210}
          image="/img/goods/3.jpg"
        /> */}
      </div>
    </div>
  );
}

export default Home;
