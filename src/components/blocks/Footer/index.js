import Styled from "./index.module.css";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import { useSelector} from "react-redux";
import numberFormat from '../../../utils/numberFormat';
function Footer() {
  const navigate = useNavigate();
  const allPrice = useSelector((state) => state.products.allPriceInBasket);
  return (
    <footer className={Styled["footer"]}>
      <div className={`container-second ${Styled["footer__wrapper"]}`}>
        <p className={Styled["footer__description"]}>
          <span className={Styled["footer__order"]}>Заказ на сумму:</span>
          <span className={Styled["footer__price"]}>{numberFormat(allPrice)} ₽</span>
        </p>
        <Button
          name="Оформить заказ"
          bgColor="#D58C51"
          color="#131313"
          border="none"
        />
      </div>
    </footer>
  );
}

export default Footer;
