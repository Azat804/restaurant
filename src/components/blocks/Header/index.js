import Styled from "./index.module.css";
import Button from "../../ui/Button";
import headerImg from "../../../assets/images/header_img.png";
import { useNavigate } from "react-router-dom";
import headerBack from "../../../assets/images/header_back.png";
import { useSelector, useDispatch } from "react-redux";
import plural from "../../../utils/plural";
import numberFormat from "../../../utils/numberFormat";
import { logout } from "../../../store/features/auth/authSlice";
import {
  calcBasketProducts,
  clearBasket,
} from "../../../store/features/products/productsSlice";
function Header({
  title,
  displayCounter = "flex",
  displayBack = "none",
  bgColor = "#161516",
}) {
  const navigate = useNavigate();
  const count = useSelector((state) => state.products.counterInBasket);
  const allPrice = useSelector((state) => state.products.allPriceInBasket);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

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
              {numberFormat(count)}{" "}
              {plural(count, { one: "товар", few: "товара", many: "товаров" })}
              <br />
              на сумму {numberFormat(allPrice)} ₽
            </div>
            <img
              src={headerImg}
              alt=""
              className={Styled["header__img"]}
              onClick={() => navigate("/basket")}
            />
          </div>
          {isAuthenticated ? (
            <Button
              name="Выйти"
              onClick={() => {
                dispatch(logout());
                dispatch(clearBasket());
                dispatch(calcBasketProducts());
                navigate("/");
              }}
            />
          ) : (
            <Button name="Войти" onClick={() => navigate("/login")} />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
