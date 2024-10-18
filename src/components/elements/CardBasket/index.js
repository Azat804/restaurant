import Styled from "./index.module.css";
import cardDelete from "../../../assets/images/card_delete.png";
import { useSelector, useDispatch } from "react-redux";
import numberFormat from '../../../utils/numberFormat';
import { productsInShoppingCard, calcBasketProducts } from "../../../store/features/products/productsSlice";
function CardBasket({id, img, title, price, maxWidth = "310px" , count='0', onClickCircle}) {
  const dispatch = useDispatch();
  return (
    <div className={Styled["card"]}>
      <div className={Styled["card__inner"]}>
        <img src={img} className={Styled["card__preview"]} alt="" />
        <h2 className={Styled["card__title"]} style={{ maxWidth: maxWidth }}>
          {title}
        </h2>
      </div>
      <div className={Styled["card__tool"]}>
        <p className={Styled["card__price"]}>{numberFormat(price)}</p>
        <img src={cardDelete} className={Styled["card__btn"]} onClick={onClickCircle} />
      </div>
    </div>
  );
}

export default CardBasket;
