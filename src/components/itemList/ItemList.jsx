import React from "react";
import "./../../styles/components/itemListStyle/itemListStyles.css";
import Item from "./Item";
import { useItems } from "../../hooks/itemList/useItems";

function ItemList() {
  const { items, addItem, removeItem } = useItems();

  const handleSubmit = (event) => {
    event.preventDefault();

    const { elements } = event.currentTarget;
    const input = elements.namedItem("tarea");
    const isInput = input instanceof HTMLInputElement;

    if (!isInput || input == null) return;

    addItem(input.value);

    input.value = "";
  };

  const handleDelete = (id) => () => {
    removeItem(id);
  };

  return (
    <main className="item-list-main">
      <aside className="item-list-form-container">
        <h1 className="item-list-title">Prueba Tecnica</h1>
        <h3 className="item-list-subtitle">
          Añadir y eliminar elementos de una lista.
        </h3>
        <form aria-label="add items to the list" onSubmit={handleSubmit}>
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
                <Item key={id} text={text} handleDelete={handleDelete(id)} />
              );
            })}
          </ul>
        )}
      </section>
    </main>
  );
}

export default ItemList;
