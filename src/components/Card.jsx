function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heard_unliked.svg" alt="Unliked" />
      </div>
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
  );
}

export default Card;
