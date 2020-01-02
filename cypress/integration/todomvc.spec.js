// todomvc.spec.js

it('should be able to add a new todo to the list', () => {
  // cy.visit('http://todomvc-app-for-testing.surge.sh/')
  // delay to show up the element - pass
  // cy.visit('http://todomvc-app-for-testing.surge.sh/?delay-new-todo=3000')
  // dely to show up the element - fail - because delay is above 4s
  // we need to change timeout for .get
  cy.visit('http://todomvc-app-for-testing.surge.sh/?delay-new-todo=5000')
  cy.get('.new-todo', {timeout: 6000}).type("Clean room{enter}")
  // cy.visit('http://todomvc-app-for-testing.surge.sh/does-not-exist')
  // cy.get('.new-todo').type("Clean room{enter}")
  // cy.get('.old-todo').type("Clean room{enter}")
  cy.get('.toggle').click()
  cy.contains('Clear completed').click()
})