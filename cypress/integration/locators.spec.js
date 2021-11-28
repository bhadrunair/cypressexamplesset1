///<reference types='cypress'/>

describe('These are the element tests', () => {
    beforeEach(() => {
        cy.visit('/elements');
    });

    it('These are the get test on the button', () => {
        cy.get('.Elements-btn');
    });

    it('These are the get test on the button with class', () => {
        cy.get('.btn-with-class');
    });

    it('These are the get test on the button with many class', () => {
        cy.get('.Elements-btn.btn-with-class.more-btn-classes');
        cy.get("[class='Elements-btn btn-with-class more-btn-classes']");
    });

    it('These are the get test on the button with id', () => {
        cy.get("#btn-with-id");
    });

    it('These are the get test on the button with type submit', () => {
        cy.get("button.Elements-btn[type='submit']");
    });

    it('These are the get test on the button with data test id', () => {
        cy.get("[data-cy='btn-id-1']");
        cy.getByTestId('btn-id-1');
    });

    it('These are the contains test on the button with unique text', () => {
        cy.contains('Unique Text');
    });

    it('These are the contains test on the button with not unique text and type submit', () => {
        cy.get("[type='submit']").contains('Not Unique Text');
        cy.contains("[type='submit']", 'Not Unique Text');
    });

    it('These are the contains test on the button in a span', () => {
        cy.get("span").contains('Not Unique Text');
    });

    it('These are the contains test on the button inside a form', () => {
        cy.get("form").contains('Not Unique Text');
        cy.contains("form", "Not Unique Text")
    });

    it('These are the contains test on the button', () => {
        cy.get("[data-cy='btn-id-1']");
    });

    it('These are the find tests in elements', () => {
        cy.get('#form-1').find('.btn-1');
        cy.get('#form-1').find('.btn-2');
    })
})