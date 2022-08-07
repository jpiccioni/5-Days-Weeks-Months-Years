import React from 'react'
import TodosList from './TodosList.jsx'
import { Grid, GridItem, Heading } from '@chakra-ui/react'

const TodosColumns = () => {
  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <GridItem w="16rem" h="10">
          <Heading as="h2" size="md">
            Days
          </Heading>
          <TodosList type='days' />
        </GridItem>
        <GridItem w="16rem" h="10">
          <Heading as="h2" size="md">
            Weeks
          </Heading>
            <TodosList type='weeks' />
        </GridItem>
        <GridItem w="16rem" h="10">
          <Heading as="h2" size="md">
            Months
          </Heading>
            <TodosList type='months' />
        </GridItem>
        <GridItem w="16rem" h="10">
          <Heading as="h2" size="md">
            Years
          </Heading>
            <TodosList type='years' />
        </GridItem>
      </Grid>
    </>
  )
}

export default TodosColumns
