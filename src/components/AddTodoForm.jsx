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
      description: '',
      completed: false,
    })
    setTodoTitle('')
    setTodoType('')
  }

  return (
    <FormControl width="60rem" margin="1rem 0">
      <FormLabel>Enter Todo and when you aim to complete it:</FormLabel>
      <InputGroup size="lg">
        <Input
          placeholder="What do I need to do?"
          value={todoTitle}
          onChange={(e) => {
            setTodoTitle(e.target.value)
          }}
          isRequired={true}
          variant="filled"
          errorBorderColor="red.500"
        />
        <InputRightElement width="13rem" marginRight="0.5rem">
          <Select
            placeholder="When do I want to do it?"
            onChange={(e) => {
              setTodoType(e.target.value)
            }}
            size="sm"
            isRequired={true}
            errorBorderColor="red.500"
          >
            <option value="days">The next 5 Days</option>
            <option value="weeks">The next 5 Weeks</option>
            <option value="months">The next 5 Months</option>
            <option value="years">The next 5 Years</option>
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
