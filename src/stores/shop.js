import { defineStore } from "pinia";
import book1Image from "../assets/book1.png";
import book2Image from "../assets/book2.png";
import book3Image from "../assets/book3.png";
import book4Image from "../assets/book4.png";
import book5Image from "../assets/book5.png";
import book6Image from "../assets/book6.png";

export const useShopStore = defineStore("shop", {
  state: () => {
    return {
      forSale: [
        {
          id: "1",
          title: "Мишель обама",
          price: 1800,
          photo: book1Image,
          description:
            "«Ваша история – это единственное, что у вас есть», – убеждена Мишель Обама, бывшая первая леди Соединенных Штатов Америки и автор искренней и вдохновляющей книги «Becoming. Моя история».",
        },
        {
          id: "2",
          title: "В метр друг от друга",
          price: 2000,
          photo: book2Image,
          description:
            "Пространство, в котором они существуют, диктует жестокое условие — влюбленные должны находиться не ближе метра друг от друга, им недоступно даже прикосновение.",
        },
        {
          id: "3",
          title: "Корабль невест",
          price: 2500,
          photo: book3Image,
          description:
            "Авианосец «Виктория» ВМФ Великобритании преодолевает огромный путь из Австралии в Англию, его ещё называют кораблём невест. На его борту не только моряки и летчики , которые перенесли тяжелейшие испытания во время войны , но ещё и 650 женщин, которые плывут к своим мужьям. Судьба соединила их в самые трудные годы.",
        },
        {
          id: "4",
          title: "И это летит по горам",
          price: 2300,
          photo: book4Image,
          description:
            "1952 год, звездная ночь в пустыне, отец рассказывает афганскую притчу сыну и дочери. Они устроились на ночлег в горах, на пути в Кабул. Затаив дыхание, Абдулла и совсем еще маленькая Пари слушают историю о том, как одного мальчика похитил ужасный дэйв, и бедняге предстоит самая страшная судьба на свете.",
        },
        {
          id: "5",
          title: "Каждый хочет любить",
          price: 1100,
          photo: book5Image,
          description:
            "Забавная и трогательная история двоих разведенных мужчин, которые пытаются жить одним домом вместе с детьми, не допуская в свой налаженный быт приходящих нянь и женщин вообще.",
        },
        {
          id: "6",
          title: "Магия утра",
          price: 2600,
          photo: book6Image,
          description:
            "«Магия утра» — книга для людей, которые нуждаются в хорошей личностной стратегии, правильной ритуализации повседневности. ",
        },
      ],
      cart: [],
      addedMessageShown: false,
    };
  },
  getters: {
    cartQuantity() {
      return this.cart.reduce((prev, curr) => {
        return prev + curr.quantity;
      }, 0);
    },
    cartSubtotal() {
      return this.cart.reduce((prev, curr) => {
        return prev + curr.price * curr.quantity;
      }, 0);
    },
    cartShipping() {
      return Math.ceil(this.cartQuantity / 10) * 500;
    },
    cartTax() {
      return this.cartSubtotal * 0.08;
    },
    cartTotal() {
      return this.cartSubtotal + this.cartShipping + this.cartTax;
    },
  },
  actions: {
    addToCart(item) {
      const existingId = this.cart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingId !== -1) {
        this.cart[existingId].quantity += 1;
      } else {
        this.cart.push({
          ...item,
          quantity: 1,
        });
      }

      this.addedMessageShown = true;

      setTimeout(() => {
        this.addedMessageShown = false;
      }, 2000);
    },
    removeItem(removedItem) {
      this.cart = this.cart.filter((item) => item.id !== removedItem.id);
    },
  },
});
