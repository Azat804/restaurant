import Styled from "./index.module.css";
import Button from "../../ui/Button";
import headerImg from "../../../assets/images/header_img.png";
import { useNavigate } from "react-router-dom";
import headerBack from "../../../assets/images/header_back.png";
function Header({
  title,
  displayCounter = "flex",
  displayBack = "none",
  position = "static",
  bgColor = "#161516",
  left = "0px",
}) {
  const navigate = useNavigate();
  return (
    <header style={{ backgroundColor: bgColor }} className={Styled["header"]}>
      <div className={`container ${Styled["header__wrapper"]}`}>
        <img
          src={headerBack}
          style={{ display: displayBack }}
          className={Styled["header__back"]}
          alt=""
          onClick={() => navigate(-1)}
        />
        <h1 className={Styled["header__title"]}>{title}</h1>
        <div className={Styled["header-inner"]}>
          <div
            className={Styled["header__counter"]}
            style={{ display: displayCounter }}
          >
            <div className={Styled["header__price"]}>
              3 товара
              <br />
              на сумму 3 500 ₽
            </div>
            <img
              src={headerImg}
              alt=""
              className={Styled["header__img"]}
              onClick={() => navigate("/basket")}
            />
          </div>
          <Button name="Выйти" position={position} left={left} />
        </div>
      </div>
    </header>
  );
}

export default Header;
