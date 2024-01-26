import React, { useState } from "react";
import "./../../styles/components/itemListStyle/itemListStyles.css";

const initialItems = [
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: "Terminar los deberes.",
  },
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: "Practicar dibujo.",
  },
];

// console.log("initialItems =>", initialItems);

function ItemList() {
  const [items, setItems] = useState(initialItems);

  console.log(items);

  const handleSubmit = (event) => {
    event.preventDefault();

    const { elements } = event.currentTarget;
    const input = elements.namedItem("tarea");
    const isInput = input instanceof HTMLInputElement;

    if (!isInput || input == null) return;

    const newItem = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      text: input.value,
    };

    setItems((prevItems) => {
      return [...prevItems, newItem];
    });

    input.value = "";
  };

  const handleDelete = (id) => () => {
    setItems((prevItems) => {
      return prevItems.filter((currentItem) => currentItem.id !== id);
    });
  };

  return (
    <main className="item-list-main">
      <aside className="item-list-form-container">
        <h1 className="item-list-title">Prueba Tecnica</h1>
        <h3 className="item-list-subtitle">
          Añadir y eliminar elementos de una lista.
        </h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="itemText">
            Introduce una tarea:
            <input
              name="tarea"
              id="itemText"
              required
              type="text"
              placeholder="Dormir temprano..."
            />
          </label>
          <button className="item-list-form-btn">Añadir</button>
        </form>
      </aside>
      <section className="item-list-container">
        {items.length === 0 ? (
          <p>
            <strong>Añade nuevas tareas por hacer...</strong>
          </p>
        ) : (
          <ul>
            {items.map((item) => {
              const { id, text } = item;
              return (
                <li key={id}>
                  {text}
                  <button onClick={handleDelete(id)}>Eliminar</button>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </main>
  );
}

export default ItemList;
