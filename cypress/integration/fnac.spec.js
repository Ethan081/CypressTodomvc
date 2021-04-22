/// <reference types="cypress" />

describe("Fnac commande", ()=>{

  it('Does not do much!', () => {
    cy.visit('https://todomvc-app-for-testing.surge.sh/')

    cy.get('.new-todo').type('Clean room{enter}')

    cy.get('.toggle').click()

    cy.contains('Clear completed').click()
  })
})

