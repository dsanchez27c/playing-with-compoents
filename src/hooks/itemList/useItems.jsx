import { useState } from "react";
import { initialItems } from "../../data/itemList/InitialValues";

export const useItems = () => {
  const [items, setItems] = useState(initialItems);

  const addItem = (text) => {
    const newItem = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      text,
    };

    setItems((prevItems) => {
      return [...prevItems, newItem];
    });
  };

  const removeItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((currentItem) => currentItem.id !== id);
    });
  };

  return { items, addItem, removeItem };
};
