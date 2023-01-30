import { render, screen, cleanup } from "@testing-library/react";
import Home from "../Home";
test("Home is Rendered", () => {
  render(<Home />);
  const homeHeader = screen.getByTestId("home-page");
  expect(homeHeader).toBeInTheDocument();
  expect(screen.getByText("Home Component")).toBeInTheDocument();
});
