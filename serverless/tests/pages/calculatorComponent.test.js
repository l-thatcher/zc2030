import {render, screen} from "../test-utils";
import CarbonCalculator from "../../Components/calculators/CarbonCalculator";
import React from "react";

const data = [
  {
    id: "1",
    name: "Individual",
    category: ["Food", "Transport", "Energy"],
    results: [24, 56, 89],
  },
  {
    id: "2",
    name: "Business",
    category: ["Zoo", "Jungle", "Forest"],
    results: [1, 98, 32],
  },
  {
    id: "3",
    name: "Food",
    category: ["Football", "Rugby", "Basketball"],
    results: [10, 100, 33],
  },
  {
    id: "4",
    name: "Drinks",
    category: ["Water", "Vodka", "Sprite"],
    results: [95, 100, 100],
  },
  {
    id: "5",
    name: "University",
    category: ["Books", "Pencil", "Rubber"],
    results: [5, 89, 10],
  },
];

test("Should render CarbonCalculator component with [0] data and identifies category names", () => {
  render(
      <CarbonCalculator
          data={data[0].name}
          id={data[0].id}
          category={data[0].category}
          results={data[0].results}
      />
  );

  const calculatorHeading = screen.getByTestId("calculator_heading");
  const category_1 = screen.getByDisplayValue("Food");
  const category_2 = screen.getByDisplayValue("Transport");
  const category_3 = screen.getByDisplayValue("Energy");

  // Identifies calculator heading, checks its content and is visible
  expect(calculatorHeading).toBeInTheDocument();
  expect(calculatorHeading).toHaveTextContent("Calculator");
  expect(calculatorHeading).toBeVisible();

  // Finds Category 1 name and is visible
  expect(category_1).toBeInTheDocument();
  expect(category_1).toBeVisible();

  // Finds Category 1 name and is visible
  expect(category_2).toBeInTheDocument();
  expect(category_2).toBeVisible();

  // Finds Category 1 name and is visible
  expect(category_3).toBeInTheDocument();
  expect(category_3).toBeVisible();
});

test("Should render CarbonCalculator component with [4] data and identifies category names", () => {
  render(
      <CarbonCalculator
          data={data[4].name}
          id={data[4].id}
          category={data[4].category}
          results={data[4].results}
      />
  );

  const calculatorHeading = screen.getByTestId("calculator_heading");
  const category_1 = screen.getByDisplayValue("Books");
  const category_2 = screen.getByDisplayValue("Pencil");
  const category_3 = screen.getByDisplayValue("Rubber");

  // Identifies calculator heading, checks its content and is visible
  expect(calculatorHeading).toBeInTheDocument();
  expect(calculatorHeading).toHaveTextContent("Calculator");
  expect(calculatorHeading).toBeVisible();

  // Finds Category 1 name and is visible
  expect(category_1).toBeInTheDocument();
  expect(category_1).toBeVisible();

  // Finds Category 1 name and is visible
  expect(category_2).toBeInTheDocument();
  expect(category_2).toBeVisible();

  // Finds Category 1 name and is visible
  expect(category_3).toBeInTheDocument();
  expect(category_3).toBeVisible();
});

test("Should render calculator component and find main heading and button", () => {
  render(
      <CarbonCalculator
          data={data[1].name}
          id={data[1].id}
          category={data[1].category}
          results={data[1].results}
      />
  );

  const categoryHeading = screen.getByTestId("category_heading");
  const nextButton = screen.getByTestId("next_btn");

  // Identifies category heading, checks its content and is visible
  expect(categoryHeading).toBeInTheDocument();
  expect(categoryHeading).toHaveTextContent("Select a category:");
  expect(categoryHeading).toBeVisible();

  // Identifies button, checks its content and is visible
  expect(nextButton).toBeInTheDocument();
  expect(nextButton).toHaveTextContent("Next");
  expect(nextButton).toBeVisible();
});
