import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import NotEnoughCards from "./NotEnoughCards";

function CardStudy({ cards }) {
  const [currentCard, setCurrentCard] = useState(0);
  const [cardState, setCardState] = useState(true);
  const history = useHistory();

  if (!cards) {
    return <p>Loading</p>;
  }
  if (cards.length < 3) {
    return <NotEnoughCards cards={cards} />;
  }

  const cardInfo = cardState
    ? cards[currentCard].front
    : cards[currentCard].back;

  function handleFlip(e) {
    e.preventDefault();
    return setCardState(!cardState);
  }

  function handleNext(e) {
    e.preventDefault();
    setCardState(true);
    if (currentCard + 1 === cards.length) {
      return window.confirm("do you want to restart?")
        ? history.go(0)
        : history.push("/");
    }

    return setCurrentCard(currentCard + 1);
  }

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">
            Card {currentCard + 1} of {cards.length}
          </h4>
        </div>
        <div className="card-text">
          <p className="col">{cardInfo}</p>
        </div>
        <div className="row card-text">
          <div className="col-3 mx-2 my-2">
            <button
              type="button"
              onClick={handleFlip}
              className="btn btn-secondary"
            >
              <span className="oi oi-action-undo"></span> Flip{" "}
              <span className="oi oi-action-redo"></span>
            </button>
          </div>
          <div className="col-2 my-2">
            {!cardState && (
              <button
                type="button"
                onClick={handleNext}
                className="btn btn-primary"
              >
                Next <span className="oi oi-chevron-right"></span>
                <span className="oi oi-chevron-right"></span>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CardStudy;
