import React from 'react'
import useTodosStore from '../stores/TodosStore'

const TodosList = () => {
  const { todos, removeTodo, toggleTodoStatus } = useTodosStore(
    (state) => ({
      todos: state.todos,
      removeTodo: state.removeTodo,
      toggleTodoStatus: state.toggleTodoStatus,
    })
  )
  return (
    <>
      <ul>
        {todos.map((todo, id) => {
          return (
            <React.Fragment key={id}>
              <li
                className={`todo-item`}
                style={{
                  backgroundColor: todo.completed ? '#00FF0044' : 'white',
                }}
              >
                <span className="todo-item-col-1">
                  <input
                    checked={todo.completed}
                    type="checkbox"
                    onChange={(e) => {
                      toggleTodoStatus(todo.id)
                    }}
                  />
                </span>
                <span>{todo?.title} - {todo.type}</span>
                <button
                  onClick={() => {
                    removeTodo(todo.id)
                  }}
                  className="delete-btn"
                >
                  Delete
                </button>
              </li>
            </React.Fragment>
          )
        })}
      </ul>
    </>
  )
}

export default TodosList
