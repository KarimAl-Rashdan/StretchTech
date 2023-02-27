describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/charmander");
    cy.visit("http://localhost:3000/charmand");
  });

  it("should still have access to the nav bar when on the error page", () => {
    cy.get("header")
      .should("have.css", "background-image")
      .and(
        "include",
        "http://localhost:3000/static/media/banner.52733dc59b8d8581eda9.png"
      );
  });

  it("should have a title and logo", () => {
    cy.get(".navBar>h1").contains("Gotta Catch 'Em All").should("be.visible");

    cy.get(".logo").should(
      "have.attr",
      "src",
      "/static/media/logo.875b36d1169a205a1b19.png"
    );
  });

  it("should have a 404 error message", () => {
    cy.get("div").contains("404").should("be.visible");
  });

  it("should have a button that directs the user back to the home page", () => {
    cy.get("button").contains("Go Back").should("be.visible");
  });

  it("should direct the user back one step when the button is clicked", () => { 
    cy.get("button").contains("Go Back").click();
    cy.url().should("eq", "http://localhost:3000/charmander");
  });
   
});
