// todomvc.spec.js

// it('should be able to add a new todo to the list', () => {
//   // cy.visit('http://todomvc-app-for-testing.surge.sh/')
//   // delay to show up the element - pass
//   // cy.visit('http://todomvc-app-for-testing.surge.sh/?delay-new-todo=3000')
//   // dely to show up the element - fail - because delay is above 4s
//   // we need to change timeout for .get
//   cy.visit('http://todomvc-app-for-testing.surge.sh/?delay-new-todo=5000')
//   cy.get('.new-todo', {timeout: 6000}).type("Clean room{enter}")
//   // cy.visit('http://todomvc-app-for-testing.surge.sh/does-not-exist')
//   // cy.get('.new-todo').type("Clean room{enter}")
//   // cy.get('.old-todo').type("Clean room{enter}")
//   cy.get('label').should('have.text', 'Clean room')
//   cy.get('.toogle').should('not.be.checked')
//   cy.get('.toggle').click()
//   cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
//   cy.contains('Clear completed').click()
//   cy.get('.todo-list').should('not.have.descendants', 'li')
// })
import {TodoPage} from '../page-objects/todo-page'

describe('todo actions', () => {
  const todoPage = new TodoPage()

  beforeEach(() => {
    // cy.visit('http://todomvc-app-for-testing.surge.sh/')
    // cy.get('.new-todo', {timeout: 6000}).type("Clean room{enter}")
    todoPage.navigate()
    todoPage.addTodo('Clean room')
  })

  it('should add a new todo to the list', () =>  {
    // cy.get('label').should('have.text', 'Clean room')
    todoPage.validateTodoText(0, 'Clean room')
    // cy.get('.toggle').should('not.be.checked')
    todoPage.validateToggleState(0, false)
  })
  
  it('should mark a todo as completed', () =>  {
    // cy.get('.toggle').click()
    todoPage.toggleTodo(0)
    // cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
    todoPage.validateTodoCompletedState(0, true)
  })
  
  it('should clear completed todos', () =>  {
    // cy.get('.toggle').click()
    todoPage.toggleTodo(0)
    // cy.contains('Clear completed').click()
    todoPage.clearCompleted()
    // cy.get('.todo-list').should('not.have.descendants', 'li')
    todoPage.validateNumberOfTodoShown(0)
  })
})
