import Header from "../components/blocks/Header";
import CardProduct from "../components/elements/CardProduct";
import Styled from "./products.module.css";
import cardImage1 from "../assets/images/card_image1.png";
import cardImage2 from "../assets/images/card_image2.png";
import cardImage3 from "../assets/images/card_image3.png";
import cardImage4 from "../assets/images/card_image4.png";
import cardImage5 from "../assets/images/card_image5.png";
import cardImage6 from "../assets/images/card_image6.png";
import cardImage7 from "../assets/images/card_image7.png";
import cardImage8 from "../assets/images/card_image8.png";
import { useSelector, useDispatch } from "react-redux";
import { addProductsInBasket, calcBasketProducts } from "../store/features/products/productsSlice";
import { useNavigate } from "react-router-dom";
function Products() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addProduct = (e, product) => {
    e.stopPropagation();
    dispatch(addProductsInBasket(product));
    dispatch(calcBasketProducts());
  }
  return (
    <>
      <Header title="наша продукция" displayBack="none" />
      <main className={Styled["main"]}>
        <div className={`container ${Styled["main__wrapper"]}`}>
          {products.map((item, index) => {
            return (
              <div key={index}>
                <CardProduct
                id={item.id}
                img={item.url}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  maxWidthTitle={item.maxWidthTitle}
                  maxWidthDescription={item.maxWidthDescription}
                  onClickCircle={(e) => addProduct(e, item)}
                />
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default Products;
