import React from 'react';
import { render, screen } from "../test-utils";
import Calculator from "../../pages/calculator"

test('Should render calculator page and find main heading', () => {
    render(<Calculator/>)

    // Main heading
    const mainHeading = screen.getByTestId('main_heading');

    // Find main heading
    expect(mainHeading).toBeInTheDocument();
    expect(mainHeading).toHaveTextContent('Carbon Calculators');
    expect(mainHeading).toBeVisible();

});

test('Should render calculator page and find nav options', () => {
    render(<Calculator/>)

    // Nav options
    const individualOption = screen.getByTestId('Individual');
    const businessOption = screen.getByTestId('Business');
    const foodOption = screen.getByTestId('Food');

    // Find individual calculator option
    expect(individualOption).toBeInTheDocument();
    expect(individualOption).toHaveTextContent('Individual');
    expect(individualOption).toBeVisible();

    // Find business calculator option
    expect(businessOption).toBeInTheDocument();
    expect(businessOption).toHaveTextContent('Business');
    expect(businessOption).toBeVisible();

    // Finds food calculator option
    expect(foodOption).toBeInTheDocument();
    expect(foodOption).toHaveTextContent('Food');
    expect(foodOption).toBeVisible();
});

