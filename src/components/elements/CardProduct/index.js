import Styled from "./index.module.css";
import cardAdd from "../../../assets/images/card_add.png";
import { Link } from "react-router-dom";
function Card({
  img,
  title,
  description,
  price,
  maxWidthTitle,
  maxWidthDescription,
}) {
  return (
    <div className={Styled["card"]}>
      <img src={img} className={Styled["card__preview"]} alt="" />
      <h2 style={{ maxWidth: maxWidthTitle }} className={Styled["card__title"]}>
        <Link to="/product" className={Styled["card__title-link"]}>
          {title}
        </Link>
      </h2>
      <p
        style={{ maxWidth: maxWidthDescription }}
        className={Styled["card__description"]}
      >
        {description}
      </p>
      <div className={Styled["card__bottom"]}>
        <p className={Styled["card__price"]}>{price}</p>
        <img src={cardAdd} className={Styled["card__btn"]} />
      </div>
    </div>
  );
}

export default Card;
