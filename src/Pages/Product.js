import Header from "../components/blocks/Header";
import Styled from "./product.module.css";
import numberFormat from "../utils/numberFormat";
import Button from "../components/ui/Button";
import { useParams } from "react-router-dom";
import {
  addProductsInBasket,
  calcBasketProducts,
  updateCurrentProduct,
  updateUserBasket,
} from "../store/features/products/productsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Product() {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const addProduct = (e, product) => {
    e.stopPropagation();
    if (token) {
      dispatch(addProductsInBasket(product));
      dispatch(calcBasketProducts());
      dispatch(updateUserBasket());
    } else {
      navigate("/login");
    }
  };
  const currentProduct = useSelector((state) => state.products.currentProduct);
  useEffect(() => {
    dispatch(updateCurrentProduct(+params.id));
  }, [dispatch]);
  return (
    <>
      <Header title="" displayBack="inline" bgColor="#131313" />
      <main className={Styled["main"]}>
        <div className={`container ${Styled["main__wrapper"]}`}>
          <img
            src={currentProduct.url}
            className={Styled["main__image"]}
            alt=""
          />
          <div className={Styled["main-inner"]}>
            <h1 className={Styled["main__title"]}>{currentProduct.title}</h1>
            <p className={Styled["main__description"]}>
              {currentProduct.description}
            </p>
            <div className={Styled["main__tool"]}>
              <p className={Styled["main__price"]}>
                {numberFormat(currentProduct.price)} ₽
              </p>
              <Button
                name="В корзину"
                bgColor="#D58C51"
                color="#131313"
                border="none"
                onClick={(e) => addProduct(e, currentProduct)}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Product;
