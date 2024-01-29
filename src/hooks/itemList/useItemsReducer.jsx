import { useReducer } from "react";
import { initialItems } from "../../data/itemList/InitialValues";

export const useItemsReducer = () => {
  const [items, dispatch] = useReducer(itemsReducer, initialItems);

  function itemsReducer(items, action) {
    switch (action.type) {
      case "added": {
        return [
          ...items,
          {
            id: action.id,
            timestamp: action.timestamp,
            text: action.text,
          },
        ];
      }

      case "delete": {
        return items.filter((item) => item.id !== action.id);
      }

      default:
        throw Error("Error desconocido: " + action.type);
    }
  }

  const addItem = (text) => {
    dispatch({
      type: "added",
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      text: text,
    });
  };

  const removeItem = (id) => {
    dispatch({
      type: "delete",
      id: id,
    });
  };

  return { items, addItem, removeItem };
};
