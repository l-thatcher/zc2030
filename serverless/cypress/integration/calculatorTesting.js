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
    cy.get("h3").contains("Select a category:");

    // Checks category headings
    cy.get("label.form-check-label").contains("Food");
    cy.get("label.form-check-label").contains("Transport");
    cy.get("label.form-check-label").contains("Energy");
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
    cy.get("text.CircularProgressbar-text").contains("24%");

    // Checks category name and percentage
    cy.get("h1").contains("Transport");
    cy.get("text.CircularProgressbar-text").contains("56%");

    // Checks category name and percentage
    cy.get("h1").contains("Energy");
    cy.get("text.CircularProgressbar-text").contains("89%");
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
    cy.get("h1").contains("Zoo");
    cy.get("text.CircularProgressbar-text").contains("1%");

    // Checks category name and percentage
    cy.get("h1").contains("Jungle");
    cy.get("text.CircularProgressbar-text").contains("98%");

    // Checks category name and percentage
    cy.get("h1").contains("Forest");
    cy.get("text.CircularProgressbar-text").contains("32%");
  });
});

describe("Nav Items Elements 2", () => {
  it("should choose the University calculator and find the correct details", () => {
    // Visits page
    cy.visit("/calculator");

    // Finds page
    cy.get('a[data-testid="University"]').click({ force: true });

    // Checks Progress Bar heading
    cy.get("h3").contains("Progress Bar");

    // Checks category name and percentage
    cy.get("h1").contains("Books");
    cy.get("text.CircularProgressbar-text").contains("5%");

    // Checks category name and percentage
    cy.get("h1").contains("Pencil");
    cy.get("text.CircularProgressbar-text").contains("89%");

    // Checks category name and percentage
    cy.get("h1").contains("Rubber");
    cy.get("text.CircularProgressbar-text").contains("10%");
  });
});
