import React from 'react';
import { render, screen } from "../test-utils";
import Calculator from "../../pages/calculator"

test('Should render calculator page and find main heading', () => {
    render(<Calculator/>)

    const mainHeading = screen.getByTestId('main_heading');

    expect(mainHeading).toBeInTheDocument();
    expect(mainHeading).toHaveTextContent('Carbon Calculators');
    expect(mainHeading).toBeVisible();

});

