import styles from "./Card.module.scss";

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/heard_unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={props.image} alt="Blazer Mid Suede" />
      <h5>{props.title}</h5>
      <div className={styles.cardBottom}>
        <div className={styles.cardBottomPrice}>
          <span>Цена</span>
          <b>{props.price} руб</b>
        </div>
        <button onClick={props.onClickPlus}>
          <img width={11} height={11} src="/img/plus_add.svg" alt="Add" />
        </button>
      </div>
    </div>
  );
}

export default Card;
