import React, { useState } from 'react'
import useTodosStore from '../stores/TodosStore'
import {
  useDisclosure,
  Button,
  Checkbox,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Textarea,
  Input,
} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

function TodoModal({ todo }) {
  // let currentTodo = todo
  const updateTodo = useTodosStore((state) => state.updateTodo)

  const [todoTitle, setTodoTitle] = useState(todo.title)
  const [todoDescription, setTodoDescription] = useState(
    todo.description
  )

  const handleTodoUpdate = () => {
    if (!todoTitle) return alert('Please add a title for this Todo')
    updateTodo({
      id: todo.id,
      title: todoTitle,
      description: todoDescription,
      // completed: false,
    })
    onClose()
  }

  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}>Open</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{todoTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              value={todoTitle}
              onChange={(e) => {
                setTodoTitle(e.target.value)
              }}
            />
            <Textarea
              placeholder="Add some details..."
              onChange={(e) => {
                setTodoDescription(e.target.value)
              }}
              value={todoDescription}
            ></Textarea>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              colorScheme="green"
              variant="ghost"
              onClick={() => {
                handleTodoUpdate()
              }}
            >
              Update Todo
            </Button>
            <Button
              variant="ghost"
              onClick={() =>
                console.log(
                  // todo
                  'ID: ' +
                  todo.id +
                  ', Title: ' +
                  todoTitle +
                  ', Description: ' +
                  todoDescription
                )
              }
            >
              Log
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

const TodosList = ({ type }) => {
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
                  <TodoModal todo={todo} />
                  <span className="todo-item-col-1">
                    <Checkbox
                      checked={todo.completed}
                      colorScheme="green"
                      onChange={(e) => {
                        toggleTodoStatus(todo.id)
                      }}
                    />
                  </span>
                  <span>{todo?.title}</span>
                  <Button
                    onClick={() => {
                      removeTodo(todo.id)
                    }}
                    colorScheme="red"
                    size="xs"
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
