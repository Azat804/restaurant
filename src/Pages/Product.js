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
import Button from "../components/ui/Button";
function Product() {
  return (
    <>
      <Header title="" displayBack="inline" bgColor="#131313" />
      <main className={Styled["main"]}>
        <div className={`container ${Styled["main__wrapper"]}`}>
          <img src={cardImage2} className={Styled["main__image"]} alt="" />
          <div className={Styled["main-inner"]}>
            <h1 className={Styled["main__title"]}>Свиные ребрышки на гриле</h1>
            <p className={Styled["main__description"]}>
              Не следует, однако забывать, что консультация с широким активом
              представляет собой интересный эксперимент проверки новых
              предложений. Не следует, однако забывать, что сложившаяся
              структура организации позволяет оценить значение новых
              предложений. Разнообразный и богатый опыт начало повседневной
              работы по формированию позиции требуют от нас анализа позиций.Не
              следует, однако забывать, что консультация с широким активом
              представляет собой интересный эксперимент проверки новых
              предложений. Не следует, однако забывать, что сложившаяся
              структура организации позволяет оценить значение новых
              предложений.
            </p>
            <div className={Styled["main__tool"]}>
              <p className={Styled["main__price"]}>1 600 ₽</p>
              <Button
                name="В корзину"
                bgColor="#D58C51"
                color="#131313"
                border="none"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Product;
