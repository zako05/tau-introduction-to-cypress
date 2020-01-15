// /page-objects/todo-pages.js
export class TodoPage {
  navigate() {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
  }

  addTodo(todoText) {
    // cy.get('.new-todo', {timeout: 6000}).type("Clean room{enter}")
    cy.get('.new-todo').type(todoText + '{enter}')
  }

  toggleTodo(todoIndex) {
    cy.get(`.todo-list li:nth-child(${todoIndex + 1}) .toggle`).click()
  }

  validateTodoText(todoIndex, expectedText) { 
    // cy.get('label').should('have.text', 'Clean room')
    cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`).should('have.text', expectedText)
  }

  validateToggleState(todoIndex, shouldBeToggled) {
    const label = cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`)
    label.should(`${shouldBeToggled ? '' : 'not.'}be.checked`)
  }

  validateTodoCompletedState(todoIndex, shouldBeCompleted) {
    cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`).should(`${shouldBeCompleted ? '' : 'not.'}have.css`, 'text-decoration-line', 'line-through')
  }
}
