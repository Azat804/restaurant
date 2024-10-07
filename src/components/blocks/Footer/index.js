import Styled from "./index.module.css";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();
  return (
    <footer className={Styled["footer"]}>
      <div className={`container ${Styled["footer__wrapper"]}`}>
        <p className={Styled["footer__description"]}>
          <span className={Styled["footer__order"]}>Заказ на сумму:</span>
          <span className={Styled["footer__price"]}>6 220 ₽</span>
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
