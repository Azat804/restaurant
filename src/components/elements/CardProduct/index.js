import Styled from "./index.module.css";
import cardAdd from "../../../assets/images/card_add.png";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom'
import numberFormat from '../../../utils/numberFormat';
function CardProduct({
  id,
  img,
  title,
  description,
  price,
  maxWidthTitle,
  maxWidthDescription,
  onClickCircle,
}) {
  const navigate = useNavigate();
  return (
    <div className={Styled["card"]} onClick={(e)=>{e.stopPropagation(); navigate(`/${id}`)}}>
      <img src={img} className={Styled["card__preview"]} alt="" />
      <h2 style={{ maxWidth: maxWidthTitle }} className={Styled["card__title"]}>
        <p  className={Styled["card__title-link"]}>
          {title}
        </p>
      </h2>
      <p
        style={{ maxWidth: maxWidthDescription }}
        className={Styled["card__description"]}
      >
        {description}
      </p>
      <div className={Styled["card__bottom"]}>
        <p className={Styled["card__price"]}>{numberFormat(price)} ₽</p>
        <img src={cardAdd} className={Styled["card__btn"]}  onClick={onClickCircle}/>
      </div>
    </div>
  );
}

export default CardProduct;
