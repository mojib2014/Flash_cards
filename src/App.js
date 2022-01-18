import { useState, useEffect } from "react";
import Editor from "./Editor";
import Viewer from "./Viewer";
import "./App.css";

function App() {
  const [cards, setCards] = useState([]);
  const [input, setInput] = useState({ front: "", back: "" });
  const [index, setIndex] = useState(0);
  const [cardFace, setCardFace] = useState("front");
  const [editor, setEditor] = useState(true);

  useEffect(() => {
    const cards = JSON.parse(localStorage.getItem("cards"));
    if (!cards) localStorage.setItem("cards", []);
    else setCards(cards);
  }, []);

  const switchMode = () => {
    setEditor((state) => !state);
  };
  const handleInputChange = ({ target }) => {
    setInput((state) => ({ ...state, [target.name]: target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setCards((state) => {
      const cards = [
        ...state,
        {
          id: state.length + 1,
          front: input.front,
          back: input.back,
        },
      ];
      localStorage.setItem("cards", JSON.stringify(cards));
      return cards;
    });
    setInput({ front: "", back: "" });
  };
  const handleDelete = ({ target }) => {
    const id = parseInt(target.dataset.id);
    setCards((state) => {
      const updated = state.filter((card) => card.id !== id);
      localStorage.setItem("cards", JSON.stringify(updated));
      return updated;
    });
  };
  const handleCardChange = () => {
    setIndex((state) => {
      if (state >= cards.length - 1) state = 0;
      else state = state + 1;
      return state;
    });
  };
  const handleCardFaceChange = () => {
    setCardFace((state) => (state === "front" ? "back" : "front"));
  };
  return (
    <div className="app">
      <h1>Card {editor ? "Editor" : "Viewer"}</h1>
      {editor ? (
        <Editor
          cards={cards}
          input={input}
          onChange={handleInputChange}
          onSubmit={handleSubmit}
          onDelete={handleDelete}
        />
      ) : (
        <Viewer
          cards={cards}
          index={index}
          cardFace={cardFace}
          onCardChange={handleCardChange}
          onCardFaceChange={handleCardFaceChange}
        />
      )}
      <div className="viewer">
        <div id="horizantal-line"></div>
        <button onClick={switchMode}>Switch to Viewer</button>
      </div>
    </div>
  );
}

export default App;
