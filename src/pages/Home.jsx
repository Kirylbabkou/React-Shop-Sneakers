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
        <div className="card">
          <img
            width={133}
            height={112}
            src="/img/goods/1.jpg"
            alt="Blazer Mid Suede"
          />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="card-bottom">
            <div className="card-bottom-price">
              <span>Цена</span>
              <b>200 руб</b>
            </div>
            <button>
              <img width={11} height={11} src="/img/plus_add.svg" alt="Add" />
            </button>
          </div>
        </div>
        <div className="card">
          <img
            width={133}
            height={112}
            src="/img/goods/4.jpg"
            alt="Blazer Mid Suede"
          />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="card-bottom">
            <div className="card-bottom-price">
              <span>Цена</span>
              <b>200 руб</b>
            </div>
            <button>
              <img width={11} height={11} src="/img/plus_add.svg" alt="Add" />
            </button>
          </div>
        </div>
        <div className="card">
          <img
            width={133}
            height={112}
            src="/img/goods/3.jpg"
            alt="Blazer Mid Suede"
          />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="card-bottom">
            <div className="card-bottom-price">
              <span>Цена</span>
              <b>200 руб</b>
            </div>
            <button>
              <img width={11} height={11} src="/img/plus_add.svg" alt="Add" />
            </button>
          </div>
        </div>
        <div className="card">
          <img
            width={133}
            height={112}
            src="/img/goods/4.jpg"
            alt="Blazer Mid Suede"
          />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="card-bottom">
            <div className="card-bottom-price">
              <span>Цена</span>
              <b>200 руб</b>
            </div>
            <button>
              <img width={11} height={11} src="/img/plus_add.svg" alt="Add" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
