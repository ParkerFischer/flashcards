import { React } from "react";

import CardItem from "./CardItem";

export default function ListedCards({ cards=[] }) {
  const cardslist = cards.map((card, index) => (
    <CardItem card={card} key={index} />
  ));

  return (
    <>
      <h3>Cards</h3>
      {cardslist}
    </>
  );
}
