import Header from "../components/blocks/Header";
import CardBasket from "../components/elements/CardBasket";
import Styled from "./basket.module.css";
import Footer from "../components/blocks/Footer";
import { useSelector, useDispatch } from "react-redux";
import {
  calcBasketProducts,
  clearBasket,
  productsInShoppingCard,
  updateUserBasket,
} from "../store/features/products/productsSlice";
function Basket() {
  const basketProducts = useSelector((state) => state.products.basketProducts);
  const dispatch = useDispatch();

  return (
    <>
      <Header
        title="Корзина с выбранными товарами"
        displayCounter="none"
        displayBack="inline"
      />
      <main className={Styled["main"]}>
        <div className={`container-second ${Styled["main__wrapper"]}`}>
          {basketProducts.map((item, index) => {
            return (
              <div key={index}>
                <CardBasket
                  id={item.id}
                  img={item.url}
                  title={item.title}
                  price={item.price}
                  maxWidth={item.maxWidth}
                  count={item.count}
                  onClickCircle={(e) => {
                    e.stopPropagation();
                    dispatch(productsInShoppingCard({ type: -1, id: item.id }));
                    dispatch(calcBasketProducts());
                    dispatch(updateUserBasket());
                  }}
                />
              </div>
            );
          })}
        </div>
      </main>
      <Footer
        onClick={(e) => {
          e.stopPropagation();
          dispatch(clearBasket());
          dispatch(calcBasketProducts());
        }}
      />
    </>
  );
}

export default Basket;
