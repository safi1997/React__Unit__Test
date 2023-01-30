import { render, screen, cleanup } from "@testing-library/react";
import Teacher from "../Teacher";
test("Teacher is Rendered", () => {
  render(<Teacher />);
  const homeHeader = screen.getByTestId("Teacher-page");
  expect(homeHeader).toBeInTheDocument();
  expect(screen.getByText("Teacher Component")).toBeInTheDocument();
});
