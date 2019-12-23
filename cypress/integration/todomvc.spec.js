// todomvc.spec.js

it('should navigate to the TodoMVC App', () => {
  // cy.visit('http://todomvc-app-for-testing.surge.sh/')
  cy.visit('http://todomvc-app-for-testing.surge.sh/does-not-exist')
})
