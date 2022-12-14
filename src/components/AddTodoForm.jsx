import React, { useState } from 'react'

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
  Flex,
  Box,
  Spacer,
} from '@chakra-ui/react'
import { nanoid } from 'nanoid'
import { add } from 'date-fns'

import useTodosStore from '../stores/TodosStore'

const AddTodoForm = () => {
  const addTodo = useTodosStore((state) => state.addTodo)

  const [todoTitle, setTodoTitle] = useState('')
  const [todoType, setTodoType] = useState('')

  const handleTodoSubmit = () => {
    if (!todoTitle) return alert('Please add a title for this Todo')
    if (!todoType) return alert('Please select a type for this Todo')

    const createdDate = new Date()

    let generatedDueDate = null
    switch (todoType) {
      case 'days':
        generatedDueDate = add(new Date(createdDate), { days: 5 })
        break
      case 'weeks':
        generatedDueDate = add(new Date(createdDate), { weeks: 5 })
        break
      case 'months':
        generatedDueDate = add(new Date(createdDate), { months: 5 })
        break
      case 'years':
        generatedDueDate = add(new Date(createdDate), { years: 5 })
        break
    }
    const dueDate = new Date(generatedDueDate)

    addTodo({
      id: nanoid(),
      title: todoTitle,
      type: todoType,
      description: '',
      completed: false,
      createdDate: createdDate,
      dueDate: dueDate,
      updatedDate: null,
    })
    setTodoTitle('')
  }

  return (
    <>
      <FormControl margin="1rem 0">
        <FormLabel>Enter Todo and when you aim to complete it:</FormLabel>
        <Flex alignItems='center'>
          <Box w='90%'>
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
                  variant='filled'
                  errorBorderColor="red.500"
                >
                  <option value="days">The next 5 Days</option>
                  <option value="weeks">The next 5 Weeks</option>
                  <option value="months">The next 5 Months</option>
                  <option value="years">The next 5 Years</option>
                </Select>
              </InputRightElement>
            </InputGroup>
          </Box>
          <Spacer />
          <Box>
            <Button
              onClick={() => {
                handleTodoSubmit()
              }}
              colorScheme="green"
            >
              Add Todo
            </Button>
          </Box>
        </Flex>
      </FormControl>
    </>
  )
}

export default AddTodoForm
