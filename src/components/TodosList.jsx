import React from 'react'
import useTodosStore from '../stores/TodosStore'
import { Button, Checkbox } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

const TodosList = ({ type }) => {
  console.log(type)
  let todoType = type
  const { todos, removeTodo, toggleTodoStatus } = useTodosStore((state) => ({
    todos: state.todos,
    removeTodo: state.removeTodo,
    toggleTodoStatus: state.toggleTodoStatus,
  }))
  return (
    <>
      <ul>
        {todos
          .filter((todo) => todo.type == todoType)
          .map((todo, id) => {
            return (
              <React.Fragment key={id}>
                <li
                  className={`todo-item`}
                  style={{
                    backgroundColor: todo.completed ? '#00FF0044' : 'white',
                  }}
                >
                  <span className="todo-item-col-1">
                    <Checkbox
                      checked={todo.completed}
                      colorScheme="green"
                      onChange={(e) => {
                        toggleTodoStatus(todo.id)
                      }}
                    />
                  </span>
                  <span>
                    {todo?.title}
                  </span>
                  <Button
                    onClick={() => {
                      removeTodo(todo.id)
                    }}
                    colorScheme="red"
                    size='xs' 
                  >
                    <CloseIcon />
                  </Button>
                </li>
              </React.Fragment>
            )
          })}
      </ul>
    </>
  )
}

export default TodosList
