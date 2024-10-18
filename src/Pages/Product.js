import Header from "../components/blocks/Header";
import Styled from "./product.module.css";
import cardImage1 from "../assets/images/card_image1.png";
import cardImage2 from "../assets/images/card_image2.png";
import cardImage3 from "../assets/images/card_image3.png";
import cardImage4 from "../assets/images/card_image4.png";
import cardImage5 from "../assets/images/card_image5.png";
import cardImage6 from "../assets/images/card_image6.png";
import cardImage7 from "../assets/images/card_image7.png";
import cardImage8 from "../assets/images/card_image8.png";
import numberFormat from '../utils/numberFormat';
import Button from "../components/ui/Button";
import { useParams } from "react-router-dom";
import { addProductsInBasket, calcBasketProducts, updateCurrentProduct } from "../store/features/products/productsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
function Product() {
  
  const params = useParams();
  const dispatch = useDispatch();
  const addProduct = (e, product) => {
    e.stopPropagation();
    dispatch(addProductsInBasket(product));
    dispatch(calcBasketProducts());
  }
  const currentProduct = useSelector((state) => state.products.currentProduct);
  useEffect(()=> {
    dispatch(updateCurrentProduct(+params.id))
  },[dispatch]);
  return (
    <>
      <Header title="" displayBack="inline" bgColor="#131313" />
      <main className={Styled["main"]}>
        <div className={`container ${Styled["main__wrapper"]}`}>
          <img src={currentProduct.url} className={Styled["main__image"]} alt="" />
          <div className={Styled["main-inner"]}>
            <h1 className={Styled["main__title"]}>{currentProduct.title}</h1>
            <p className={Styled["main__description"]}>
            {currentProduct.description}
            </p>
            <div className={Styled["main__tool"]}>
              <p className={Styled["main__price"]}>{numberFormat(currentProduct.price)} ₽</p>
              <Button
                name="В корзину"
                bgColor="#D58C51"
                color="#131313"
                border="none"
                onClick = {(e) => addProduct(e, currentProduct)}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Product;
