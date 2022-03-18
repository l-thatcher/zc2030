import { render, screen } from "../../test-utils";
import React from "react";
import CalculatorTypes from "../../../Components/admin/calculators/CalculatorTypes";

describe("Show calculators admin page", () => {
  test("it should show all calculator types", () => {
    const types = [
      { id: 2, name: "Business", public: 0 },
      { id: 3, name: "Individual", public: 0 },
      { id: 4, name: "School", public: 0 },
      { id: 26, name: "Mechanics", public: 0 },
      { id: 27, name: "Supermarket", public: 1 },
    ];
    render(<CalculatorTypes types={types} />);

    const heading = screen.getByText(/Edit Calculators/i);
    const button1 = screen.getByRole("button", {
      name: /Business/i,
    });
    const button5 = screen.getByRole("button", {
      name: /Supermarket/i,
    });
    expect(heading).toBeInTheDocument();
    expect(button1).toBeInTheDocument();
    expect(button5).toBeInTheDocument();
  });
});
