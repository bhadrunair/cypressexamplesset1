///<reference types='cypress' />

describe('These are the habit tests', () => {
    beforeEach(() => {
        cy.visit('/habits');
    });

    it('Habit test sequence', () => {
        cy.get('.Habit-add-btn').click();
        cy.contains('Add a new habit').should('be.visible');
        cy.get('.form-control').type('Bad Habit');
        cy.get("[value='Bad Habit']");
        cy.contains('Save Changes').click();
        cy.contains('Bad Habit').click();
        cy.get("[src='/static/media/check.9e8832df.svg']").should('be.visible');
        cy.contains('Bad Habit').click();
        cy.get("[src='/static/media/close.fa7e5ead.svg']").should('be.visible');

    })
})