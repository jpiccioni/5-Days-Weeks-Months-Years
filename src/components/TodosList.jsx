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
  Text,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Box,
  Spacer
} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

function TodoModal({ todo }) {
  // console.log(todo)
  const { updateTodo, toggleTodoStatus } = useTodosStore((state) => ({
    updateTodo: state.updateTodo,
    toggleTodoStatus: state.toggleTodoStatus,
  }))

  const [todoTitle, setTodoTitle] = useState(todo.title)
  const [todoDescription, setTodoDescription] = useState(todo.description)
  const [todoCreated, setTodoCreated] = useState(todo.createdDate)
  const [todoUpdated, setTodoUpdated] = useState(todo.updatedDate)

  const handleTodoUpdate = () => {
    if (!todoTitle) return alert('Please add a title for this Todo')

    setTodoUpdated(new Date().toLocaleString())

    updateTodo({
      id: todo.id,
      title: todoTitle,
      description: todoDescription,
      createdDate: todo.createdDate,
      updatedDate: todoUpdated,
      // completed: false,
    })

  }

  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}>Open</Button>
      <Modal isOpen={isOpen} size="xl" onClose={onClose} autoFocus={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Editable value={todoTitle} width="90%">
              <EditablePreview />
              <EditableInput
                onChange={(e) => {
                  setTodoTitle(e.target.value)
                }}
              />
            </Editable>
            <Text fontSize="xs">
              Added {todoCreated} | Updated {todoUpdated}
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Textarea
              placeholder="Add some details..."
              onChange={(e) => {
                setTodoDescription(e.target.value)
              }}
              value={todoDescription}
              size="sm"
            ></Textarea>
          </ModalBody>

          <ModalFooter>
            <Flex width='100%' alignItems='center'>
              <Box>
                <Checkbox
                  isChecked={todo.completed}
                  colorScheme="green"
                  onChange={(e) => {
                    toggleTodoStatus(todo.id)
                  }}
                >
                  Completed
                </Checkbox>
              </Box>
              <Spacer />
              <Box>
                <Button
                  colorScheme="blue"
                  variant="ghost"
                  mr={3}
                  onClick={onClose}
                >
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
              </Box>
            </Flex>
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
                    backgroundColor: todo.completed ? '#00FF0044' : '',
                  }}
                >
                  <TodoModal todo={todo} />
                  <span className="todo-item-col-1">
                    <Checkbox
                      isChecked={todo.completed}
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
