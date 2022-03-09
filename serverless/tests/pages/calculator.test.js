import React from "react";
import { render, screen } from "../test-utils";
import Calculator from "../../pages/calculator";

const types = [
  {
    id: 1,
    name: "Individual",
  },
  {
    id: 2,
    name: "Business",
  },
];

const categories = [
  [
    {
      id: 1,
      name: "Food",
    },
    {
      id: 2,
      name: "Transport",
    },
    {
      id: 3,
      name: "Energy",
    },
  ],
  [
    {
      id: 4,
      name: "Cars",
    },
    {
      id: 5,
      name: "Bicycles",
    },
    {
      id: 6,
      name: "Bike",
    },
  ],
];

const inputs = [
  [
    {
      id: 1,
      name: "Bread",
      factor: 1,
      unit: "grams",
    },
    {
      id: 2,
      name: "Rice",
      factor: 0.8,
      unit: "grams",
    },
    {
      id: 3,
      name: "Chicken",
      factor: 500,
      unit: "grams",
    },
  ],
  [
    {
      id: 1,
      name: "Bread",
      factor: 1,
      unit: "grams",
    },
    {
      id: 2,
      name: "Rice",
      factor: 0.8,
      unit: "grams",
    },
    {
      id: 3,
      name: "Chicken",
      factor: 500,
      unit: "grams",
    },
  ],
];

test("Should render calculator page and find main heading", () => {
  render(<Calculator types={types} categories={categories} inputs={inputs} />);

  // Main heading
  const mainHeading = screen.getByTestId("main_heading");

  // Find main heading
  expect(mainHeading).toBeInTheDocument();
  expect(mainHeading).toHaveTextContent("Carbon Calculators");
  expect(mainHeading).toBeVisible();
});

test("Should render calculator page and find nav options", () => {
  render(<Calculator types={types} categories={categories} inputs={inputs} />);

  // Nav options
  const individualOption = screen.getByTestId("Individual");
  const businessOption = screen.getByTestId("Business");

  // Find individual calculator option
  expect(individualOption).toBeInTheDocument();
  expect(individualOption).toHaveTextContent("Individual");
  expect(individualOption).toBeVisible();

  // Find business calculator option
  expect(businessOption).toBeInTheDocument();
  expect(businessOption).toHaveTextContent("Business");
  expect(businessOption).toBeVisible();
});
