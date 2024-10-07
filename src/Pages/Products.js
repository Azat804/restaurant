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
function Products() {
  const cards = [
    {
      img: cardImage1,
      title: "Устрицы по рокфеллеровски",
      description:
        "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры",
      price: "2 700 ₽",
      maxWidthTitle: "264px",
      maxWidthDescription: "261px",
    },
    {
      img: cardImage2,
      title: "Свиные ребрышки на гриле с зеленью",
      description:
        "Не следует, однако забывать, что реализация намеченных плановых",
      price: "1 600 ₽",
      maxWidthTitle: "264px",
      maxWidthDescription: "261px",
    },
    {
      img: cardImage3,
      title: "Креветки по-королевски в лимонном соке",
      description:
        "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу",
      price: "1 820 ₽",
      maxWidthTitle: "226px",
      maxWidthDescription: "264px",
    },
    {
      img: cardImage4,
      title: "Устрицы по рокфеллеровски",
      description:
        "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры",
      price: "2 700 ₽",
      maxWidthTitle: "264px",
      maxWidthDescription: "261px",
    },
    {
      img: cardImage5,
      title: "Устрицы по рокфеллеровски",
      description:
        "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры",
      price: "2 700 ₽",
      maxWidthTitle: "264px",
      maxWidthDescription: "261px",
    },
    {
      img: cardImage6,
      title: "Свиные ребрышки на гриле с зеленью",
      description:
        "Не следует, однако забывать, что реализация намеченных плановых",
      price: "1 600 ₽",
      maxWidthTitle: "264px",
      maxWidthDescription: "261px",
    },
    {
      img: cardImage7,
      title: "Креветки по-королевски в лимонном соке",
      description:
        "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу",
      price: "1 820 ₽",
      maxWidthTitle: "226px",
      maxWidthDescription: "264px",
    },
    {
      img: cardImage8,
      title: "Устрицы по рокфеллеровски",
      description:
        "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры",
      price: "2 700 ₽",
      maxWidthTitle: "264px",
      maxWidthDescription: "261px",
    },
  ];
  return (
    <>
      <Header title="наша продукция" displayBack="none" />
      <main className={Styled["main"]}>
        <div className={`container ${Styled["main__wrapper"]}`}>
          {cards.map((item, index) => {
            return (
              <div key={index}>
                <CardProduct
                  img={item.img}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  maxWidthTitle={item.maxWidthTitle}
                  maxWidthDescription={item.maxWidthDescription}
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
