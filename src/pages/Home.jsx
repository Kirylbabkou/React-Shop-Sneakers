import Card from "../components/Card";

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
        <Card />
      </div>
    </div>
  );
}

export default Home;
