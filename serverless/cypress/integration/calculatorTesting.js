describe("Navigation", () => {
  it("should navigate to the about page", () => {
    // Start from the index page
    cy.visit("/");

    cy.get("button.navbar-toggler.collapsed").click(); // Click on button
    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="calculator"]').click();

    // The new url should include "/about"
    cy.url().should("include", "/calculator");

    // The new page should contain an h1 with "About page"
    cy.get("h1").contains("Carbon Calculator");
  });
});

describe("Calculator Headings", () => {
  it("should find calculator and category headings", () => {
    // Visits page
    cy.visit("/calculator");

    // Checks calculator heading
    cy.get("h2").contains("Calculator");

    // Checks category heading
    cy.get('h3[data-testid=category_heading]').contains("Select a Category:");

    // Checks category headings
    cy.get("label.Calculator_form__Woycm.btn.btn-secondary").contains("Food");
    cy.get("label.Calculator_form__Woycm.btn.btn-secondary").contains("Transport");
    cy.get("label.Calculator_form__Woycm.btn.btn-secondary").contains("Energy");
  });
});

describe("Progress Bar Elements", () => {
  it("should find progress bar and category headings, and percentages", () => {
    // Visits page
    cy.visit("/calculator");

    // Checks Progress Bar heading
    cy.get("h3").contains("Progress Bar");

    // Checks category name and percentage
    cy.get("h1").contains("Food");
    cy.get("text.CircularProgressbar-text").contains("1%");

    // Checks category name and percentage
    cy.get("h1").contains("Transport");
    cy.get("text.CircularProgressbar-text").contains("2%");

    // Checks category name and percentage
    cy.get("h1").contains("Energy");
    cy.get("text.CircularProgressbar-text").contains("3%");
  });
});

describe("Nav Items Elements", () => {
  it("should choose the Business calculator and find the correct details", () => {
    // Visits page
    cy.visit("/calculator");

    // Finds page
    cy.get('a[data-testid="Business"]').click({ force: true });

    // Checks Progress Bar heading
    cy.get("h3").contains("Progress Bar");

    // Checks category name and percentage
    cy.get("h1").contains("Cars");
    cy.get("text.CircularProgressbar-text").contains("4%");

    // Checks category name and percentage
    cy.get("h1").contains("Bicycles");
    cy.get("text.CircularProgressbar-text").contains("5%");

    // Checks category name and percentage
    cy.get("h1").contains("Bike");
    cy.get("text.CircularProgressbar-text").contains("6%");
  });
});

describe("Calculate a footprint", () => {
  it("should choose the Cars category on Business calculator and find the correct inputs", () => {
    // Visits page
    cy.visit("/calculator");

    // Finds page
    cy.get('a[data-testid="Business"]').click({ force: true });

    // Finds page
    cy.get('a[data-testid="Individual"]').click({ force: true });

    // Clicks Cars category
    cy.get("label.Calculator_form__Woycm.btn.btn-secondary").contains("Food").click( {force: true});

    // Click Next
    cy.get("button").contains("Next").click( {force: true});

    // Clicks Rice category
    cy.get("label.Calculator_form__Woycm.btn.btn-secondary").contains("Rice").click( {force: true});

    // Click Next
    cy.get("button").contains("Next").click( {force: true});

    // Add Input
    cy.get('input.form-control').type("10");

    // Click Next
    cy.get("button").contains("Next").click( {force: true});

    // Check result
    cy.get("h3.Calculator_form__Woycm").contains("8")

    // Click Reset
    cy.get("button").contains("Reset").click( {force: true});
  });
});
