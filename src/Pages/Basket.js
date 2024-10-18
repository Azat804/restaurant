import Header from "../components/blocks/Header";
import CardBasket from "../components/elements/CardBasket";
import Styled from "./basket.module.css";
import cardImage1 from "../assets/images/card_image1.png";
import cardImage2 from "../assets/images/card_image2.png";
import cardImage3 from "../assets/images/card_image3.png";
import cardImage4 from "../assets/images/card_image4.png";
import cardImage5 from "../assets/images/card_image5.png";
import cardImage6 from "../assets/images/card_image6.png";
import cardImage7 from "../assets/images/card_image7.png";
import cardImage8 from "../assets/images/card_image8.png";
import Footer from "../components/blocks/Footer";
import { useSelector, useDispatch } from "react-redux";
import { calcBasketProducts, productsInShoppingCard } from "../store/features/products/productsSlice";
function Basket() {
  const basketProducts = useSelector((state) => state.products.basketProducts);
  const dispatch = useDispatch();
  
  return (
    <>
      <Header
        title="Корзина с выбранными товарами"
        displayCounter="none"
        displayBack="inline"
        position="relative"
        left="220px"
      />
      <main className={Styled["main"]}>
        <div className={`container-second ${Styled["main__wrapper"]}`}>
          {basketProducts.map((item, index) => {
            return (
              <div key={index}>
                <CardBasket
                id = {item.id}
                img={item.url}
                  title={item.title}
                  price={item.price}
                  maxWidth={item.maxWidth}
                  count={item.count}
                  onClickCircle = {(e)=> {
                    e.stopPropagation();
                    dispatch(productsInShoppingCard({type: -1, id: item.id}));
                    dispatch(calcBasketProducts())

                  }}
                />
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Basket;
