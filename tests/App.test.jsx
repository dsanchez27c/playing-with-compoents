import React from "react";
import { describe, test, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("<App />", () => {
  // test('should work', () => {
  //     render(<App />)
  //     // screen.debug()
  //     expect(
  //         screen.getByText('A Quien Seguir')
  //     ).toBeDefined()
  // })

  test("should add and remove items", async () => {
    const user = userEvent.setup();
    const { getByRole, getByText } = screen;

    render(<App />);

    //searching input
    const input = getByRole("textbox");
    expect(input).toBeDefined();

    //searching form
    const form = getByRole("form");
    expect(form).toBeDefined();

    const button = form.querySelector("button");
    expect(button).toBeDefined();

    // adding items
    await user.type(input, "daniel");
    await user.click(button);

    const randomText = crypto.randomUUID();
    await user.type(input, randomText);
    await user.click(button);

    // the item was added
    const list = getByRole("list");
    expect(list).toBeDefined();

    // expect to be X item
    expect(list.childNodes.length).toBe(4);

    //can delete an item
    const item = getByText(randomText);
    const removeButton = item.querySelector("button");
    expect(removeButton).toBeDefined();
    await user.click(removeButton);
  });
});
