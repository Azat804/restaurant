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
function Basket() {
  const cards = [
    {
      img: cardImage1,
      title: "Устрицы по рокфеллеровски",
      price: "2 700 ₽",
      maxWidth: "310px",
    },
    {
      img: cardImage3,
      title: "Креветки по-королевски в лимонном соке",
      price: "1 820 ₽",
      maxWidth: "240px",
    },
    {
      img: cardImage2,
      title: "Свиные ребрышки на гриле с зеленью",
      price: "1 600 ₽",
      maxWidth: "310px",
    },
  ];
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
        <div className={`container ${Styled["main__wrapper"]}`}>
          {cards.map((item, index) => {
            return (
              <div key={index}>
                <CardBasket
                  img={item.img}
                  title={item.title}
                  price={item.price}
                  maxWidth={item.maxWidth}
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
