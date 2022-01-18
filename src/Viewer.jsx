import React from "react";

export default function Viewer({
  cards,
  index,
  cardFace,
  onCardChange,
  onCardFaceChange,
}) {
  return (
    <div className="card-viewer-container">
      <div className="card" onClick={onCardFaceChange}>
        <h2>{cardFace === "front" ? cards[index].front : cards[index].back}</h2>
      </div>
      <button className="btn-primary" onClick={onCardChange}>
        New Card
      </button>
    </div>
  );
}
