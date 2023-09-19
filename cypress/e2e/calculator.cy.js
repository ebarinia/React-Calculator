describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should have working number buttons", () => {
    cy.get("#number2").click();
    cy.get(".display").should("contain", "2");
  });

  it("should update display when pressing number button", () => {
    cy.get("#number2").click();
    cy.get("#number5").click();
    cy.get("#number8").click();
    cy.get(".display").should("contain", "258");
  });

  it("should update the display with the correct arithmetical operations", () => {
    cy.get("#number2").click();
    cy.get("#number8").click();
    cy.get("#operator-multiply").click();
    cy.get("#number3").click();
    cy.get(".display").should("contain", "84");
  });
});
