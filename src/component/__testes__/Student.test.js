import { render, screen, cleanup } from "@testing-library/react";
import Student from "../Student";
test("Student is Rendered", () => {
  render(<Student />);
  const homeHeader = screen.getByTestId("Student-page");
  expect(homeHeader).toBeInTheDocument();
  expect(screen.getByText("Student Component")).toBeInTheDocument();
});
