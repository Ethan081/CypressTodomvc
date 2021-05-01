/// <reference types="cypress" />

describe('filtering', () => {
    beforeEach(() =>{
        cy.visit('http://todomvc-app-for-testing.surge.sh/')

        cy.get('.new-todo',).type('Clean room{enter}')
        cy.get('.new-todo',).type('Learn JavaScript{enter}')
        cy.get('.new-todo',).type('Use Cypress{enter}')

        cy.get('.todo-list li:nth-child(2) .toggle').click()

    })

    it('should Filter "Active" to do',() =>{
        cy.contains('Active').click()
        cy.get('.todo-list li').should('have.length', 2)
    })

    it('should Filter "All" to do',() =>{
        cy.contains('All').click()
        cy.get('.todo-list li').should('have.length', 3)
    })

    it('should Filter "Completed" to do',() =>{
        cy.contains('Completed').click()
        cy.get('.todo-list li').should('have.length', 1)
    })


})