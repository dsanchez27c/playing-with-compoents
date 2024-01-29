import { describe, expect, test } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useItems } from "../src/hooks/itemList/useItems";

describe("useItems hook", () => {
  test("should add and remove items", () => {
    const { result } = renderHook(() => useItems());

    console.log(result.current.items);

    expect(result.current.items.length).toBe(2);

    act(() => {
      result.current.addItem("Jugar a videojuegos.");
      result.current.addItem("Ir a correr.");
    });

    expect(result.current.items.length).toBe(4);

    console.log(result.current.items);

    act(() => {
      result.current.removeItem(result.current.items[0].id);
      result.current.removeItem(result.current.items[2].id);
    });

    expect(result.current.items.length).toBe(2)

    console.log(result.current.items);
  });
});
