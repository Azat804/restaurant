import Header from "../components/blocks/Header";
import CardProduct from "../components/elements/CardProduct";
import Styled from "./products.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addProductsInBasket,
  calcBasketProducts,
  updateUserBasket,
  setUserBasket,
} from "../store/features/products/productsSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Products() {
  const products = useSelector((state) => state.products.products);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(setUserBasket());
    dispatch(calcBasketProducts());
  }, []);

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
                  onClickCircle={(e) => {
                    addProduct(e, item);
                  }}
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
