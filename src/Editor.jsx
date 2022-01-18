import React from "react";

export default function Editor({ cards, input, onChange, onSubmit, onDelete }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Front</th>
            <th>Back</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {cards.map((card) => (
            <tr key={card.id}>
              <td>{card.front}</td>
              <td>{card.back}</td>
              <td>
                <button
                  data-id={card.id}
                  onClick={onDelete}
                  className="delete-btn"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="front"
          value={input.front}
          onChange={onChange}
          autoFocus
          required
        />
        <input
          type="number"
          name="back"
          value={input.back}
          onChange={onChange}
          required
        />
        <button type="submit">Add Card</button>
      </form>
    </div>
  );
}
