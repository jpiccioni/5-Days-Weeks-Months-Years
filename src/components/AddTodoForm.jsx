import React, { useState } from 'react'
import useTodosStore from '../stores/TodosStore'
import {
  Input,
  Select,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'

const AddTodoForm = () => {
  const addTodo = useTodosStore((state) => state.addTodo)

  const [todoTitle, setTodoTitle] = useState('')
  const [todoType, setTodoType] = useState('')

  const handleTodoSubmit = () => {
    if (!todoTitle) return alert('Please add a title for this Todo')
    if (!todoType) return alert('Please select a type for this Todo')
    addTodo({
      id: Math.ceil(Math.random() * 1000000),
      title: todoTitle,
      type: todoType,
      completed: false,
    })
    setTodoTitle('')
    setTodoType('')
  }

  return (
    <FormControl width="60rem" margin='1rem 0'>
      <InputGroup size="lg">
        <Input
          placeholder="Add Todo"
          value={todoTitle}
          onChange={(e) => {
            setTodoTitle(e.target.value)
          }}
        />
        <InputRightElement width="10rem" marginRight="0.5rem">
          <Select
            placeholder="Select Type"
            onChange={(e) => {
              setTodoType(e.target.value)
            }}
            size="sm"
          >
            <option value="days">Days</option>
            <option value="weeks">Weeks</option>
            <option value="months">Months</option>
            <option value="years">Years</option>
          </Select>
        </InputRightElement>
      </InputGroup>
      <Button
        onClick={() => {
          handleTodoSubmit()
        }}
        colorScheme="green"
      >
        Add Todo
      </Button>
    </FormControl>
  )
}

export default AddTodoForm
