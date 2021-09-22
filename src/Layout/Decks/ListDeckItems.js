import { React } from "react";

import DeckItem from "./DeckItem";

export default function ListDeckItems({ decks }) {
  const listedDecks = decks.map((deck) => <DeckItem deck={deck} key={deck.id}/>);
  return listedDecks;
}
