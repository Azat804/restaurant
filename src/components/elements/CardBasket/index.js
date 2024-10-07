import Styled from "./index.module.css";
import cardDelete from "../../../assets/images/card_delete.png";
function CardBasket({ img, title, price, maxWidth = "310px" }) {
  return (
    <div className={Styled["card"]}>
      <div className={Styled["card__inner"]}>
        <img src={img} className={Styled["card__preview"]} alt="" />
        <h2 className={Styled["card__title"]} style={{ maxWidth: maxWidth }}>
          {title}
        </h2>
      </div>
      <div className={Styled["card__tool"]}>
        <p className={Styled["card__price"]}>{price}</p>
        <img src={cardDelete} className={Styled["card__btn"]} />
      </div>
    </div>
  );
}

export default CardBasket;
