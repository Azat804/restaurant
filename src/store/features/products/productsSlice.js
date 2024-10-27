import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      url: "/images/card_image1.png",
      id: 0,

      title: "Устрицы по рокфеллеровски",
      description:
        "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры",
      price: 2700,
      count: 0,
      maxWidthTitle: "264px",
      maxWidthDescription: "261px",
    },
    {
      url: "/images/card_image2.png",
      id: 1,

      title: "Свиные ребрышки на гриле с зеленью",
      description:
        "Не следует, однако забывать, что реализация намеченных плановых",
      price: 1600,
      count: 0,
      maxWidthTitle: "264px",
      maxWidthDescription: "261px",
    },
    {
      url: "/images/card_image3.png",
      id: 2,

      title: "Креветки по-королевски в лимонном соке",
      description:
        "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу",
      price: 1820,
      count: 0,
      maxWidthTitle: "226px",
      maxWidthDescription: "264px",
    },
    {
      url: "/images/card_image4.png",
      id: 3,

      title: "Устрицы по рокфеллеровски",
      description:
        "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры",
      price: 2700,
      count: 0,
      maxWidthTitle: "264px",
      maxWidthDescription: "261px",
    },
    {
      url: "/images/card_image5.png",
      id: 4,

      title: "Устрицы по рокфеллеровски",
      description:
        "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры",
      price: 2700,
      count: 0,
      maxWidthTitle: "264px",
      maxWidthDescription: "261px",
    },
    {
      url: "/images/card_image6.png",
      id: 5,

      title: "Свиные ребрышки на гриле с зеленью",
      description:
        "Не следует, однако забывать, что реализация намеченных плановых",
      price: 1600,
      count: 0,
      maxWidthTitle: "264px",
      maxWidthDescription: "261px",
    },
    {
      url: "/images/card_image7.png",
      id: 6,

      title: "Креветки по-королевски в лимонном соке",
      description:
        "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу",
      price: 1820,
      count: 0,
      maxWidthTitle: "226px",
      maxWidthDescription: "264px",
    },
    {
      url: "/images/card_image8.png",
      id: 7,

      title: "Устрицы по рокфеллеровски",
      description:
        "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры",
      price: 2700,
      count: 0,
      maxWidthTitle: "264px",
      maxWidthDescription: "261px",
    },
  ],
  basketProducts: [],
  currentProduct: {},
  counterInBasket: 0,
  allPriceInBasket: 0,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProductsInBasket: (state, action) => {
      let currentProduct = { ...action?.payload };
      const findIndex = state.basketProducts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (findIndex === -1) {
        currentProduct.count++;
        state.basketProducts.push(currentProduct);
      } else {
        state.basketProducts[findIndex].count++;
      }
    },
    updateCurrentProduct: (state, action) => {
      state.currentProduct = state.products.find(
        (item) => item.id == action.payload
      );
    },
    calcBasketProducts: (state, action) => {
      state.counterInBasket = state.basketProducts.reduce((acc, item) => {
        return acc + item.count;
      }, 0);

      state.allPriceInBasket = state.basketProducts.reduce((acc, item) => {
        return acc + item.count * item.price;
      }, 0);
    },
    productsInShoppingCard: (state, action) => {
      if (action.payload.type == -1) {
        state.basketProducts = state.basketProducts.filter(
          (item) => item.id !== action.payload.id
        );
      }
      const findIndex = state.basketProducts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (action.payload.type == 1) {
        state.basketProducts[findIndex].count += 1;
      } else if (action.payload.type == 0) {
        state.basketProducts[findIndex].count -= 1;
        if (state.basketProducts[findIndex].count == 0) {
          state.basketProducts = state.basketProducts.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }
    },
    updateUserBasket: (state, action) => {
      let users = JSON.parse(window.localStorage.getItem("users")) || [];
      const activeUserIndex = users.findIndex(
        (user) => user.loginName === window.localStorage.getItem("activeUser")
      );
      if (activeUserIndex !== -1) {
        users[activeUserIndex] = {
          ...users[activeUserIndex],
          basketProducts: state.basketProducts,
        };
        window.localStorage.setItem("users", JSON.stringify(users));
      }
    },
    setUserBasket: (state, action) => {
      let users = JSON.parse(window.localStorage.getItem("users")) || [];
      const activeUserIndex = users.findIndex(
        (user) => user.loginName === window.localStorage.getItem("activeUser")
      );
      if (activeUserIndex !== -1) {
        state.basketProducts = users[activeUserIndex].basketProducts || [];
      }
    },
    clearBasket: (state, action) => {
      state.basketProducts = initialState.basketProducts;
      const activeUser = window.localStorage.getItem("activeUser");
      if (activeUser) {
        let users = JSON.parse(window.localStorage.getItem("users")) || [];
        const activeUserIndex = users.findIndex(
          (user) => user.loginName === window.localStorage.getItem("activeUser")
        );
        if (activeUserIndex !== -1) {
          users[activeUserIndex] = {
            ...users[activeUserIndex],
            basketProducts: [],
          };
          window.localStorage.setItem("users", JSON.stringify(users));
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addProductsInBasket,
  updateCurrentProduct,
  productsInShoppingCard,
  calcBasketProducts,
  updateUserBasket,
  setUserBasket,
  clearBasket,
} = productsSlice.actions;

export default productsSlice.reducer;
