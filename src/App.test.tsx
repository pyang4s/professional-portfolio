import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders LinkedIn link", () => {
  render(<App />);
  const linkElement = screen.getByAltText(/LinkedIn/);
  expect(linkElement).toBeInTheDocument();
});

test("renders GitHub link", () => {
  render(<App />);
  const linkElement = screen.getByAltText(/GitHubRepo/);
  expect(linkElement).toBeInTheDocument();
});
