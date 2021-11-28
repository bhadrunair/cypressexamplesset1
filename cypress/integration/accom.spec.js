///<reference types='cypress'/>

describe('This is the accomplishment page test', ()=>{
    beforeEach(()=>{
        cy.visit('/accomplishments');
    });

    it('This is the test sequence', ()=>{
        cy.get("[data-cy='accomplishment-title-input']").type('My Accomplishments');
        cy.get("[data-cy='accomplishment-input']").type('Coding Champ');
        cy.get('.Accomplishment-btn').click();
        cy.contains('Complete the items above to continue').should('be.visible');
        cy.get("[data-cy='accomplishment-checkbox']").click();
        cy.contains('Submit Accomplishment').click();
        cy.contains('This Accomplisment was Successfully Submitted').should('be.visible');
        cy.contains('Go Back').click();
        cy.contains('Accomplishment').should('be.visible');
    })
})