import { useState } from "react";

import styles from "./Card.module.scss";

function Card({ title, price, image, onAdd, onClickFav }) {
  const [isAdded, setIsAdded] = useState(false);

  const onClickAdd = () => {
    setIsAdded(!isAdded);
    onAdd({ title, price, image });
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFav}>
        <img src="/img/heard_unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={image} alt="Blazer Mid Suede" />
      <h5>{title}</h5>
      <div className={styles.cardBottom}>
        <div className={styles.cardBottomPrice}>
          <span>Цена</span>
          <b>{price} руб</b>
        </div>

        <img
          // isAdded={isAdded}
          className={styles.plus}
          onClick={onClickAdd}
          width={32}
          height={32}
          src={isAdded ? "/img/btn-added.svg" : "/img/btn-plus-add.svg"}
          alt="Add"
        />
      </div>
    </div>
  );
}

export default Card;
