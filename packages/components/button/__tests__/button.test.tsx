/// <reference types="@testing-library/jest-dom" />

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "../src/button";

test("Button with onClick prop calls onClick handler", () => {
  const mockOnClick = jest.fn();
  const { getByText } = render(
    <Button
      id="test-onclick"
      type="button"
      buttonText="onClick Button"
      onClick={mockOnClick}
    />
  );

  const button = getByText("OnClick Button");
  fireEvent.click(button);
  expect(mockOnClick).toHaveBeenCalledTimes(1);
});

test("Button renders with correct type based on prop", () => {
  const { getByText } = render(
    <Button
      id="test-submit"
      formId="test-form-submit"
      type="submit"
      buttonText="Submit Button"
    />
  );

  const button = getByText("Submit Button");
  expect(button).toHaveAttribute("type", "submit");

  const { getByRole: getByRoleLink } = render(
    <Button
      id="test-link"
      type="link"
      buttonText="Link Button"
      href="https://www.example.com"
    />
  );

  const linkButton = getByRoleLink("link");
  expect(linkButton).toHaveAttribute("href", "https://www.example.com");

  const { getByRole: getByRoleRoute } = render(
    <Button id="test-route" type="route" buttonText="Route Button" to="/home" />
  );

  const routeButton = getByRoleRoute("button");
  expect(routeButton).toHaveAttribute("to", "/home");
});

test("Button renders disabled when isDisabled prop is true", () => {
  const { getByText } = render(
    <Button
      id="test-disabled"
      type="button"
      buttonText="Disabled Button"
      isDisabled={true}
      onClick={() => {}}
    />
  );

  const button = getByText("Disabled Button");
  expect(button).toBeDisabled();
});
