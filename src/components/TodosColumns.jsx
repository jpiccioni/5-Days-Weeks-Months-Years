import React from 'react'
import TodosList from './TodosList.jsx'
import { Grid, GridItem, Heading, Divider } from '@chakra-ui/react'

const TodosColumns = () => {
  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <GridItem w="16rem" h="10">
          <Heading as="h2" size="md">
            5 Days
          </Heading>
          <Divider />
          <TodosList type="days" />
        </GridItem>
        <GridItem w="16rem" h="10">
          <Heading as="h2" size="md">
            5 Weeks
          </Heading>
          <Divider />
          <TodosList type="weeks" />
        </GridItem>
        <GridItem w="16rem" h="10">
          <Heading as="h2" size="md">
            5 Months
          </Heading>
          <Divider />
          <TodosList type="months" />
        </GridItem>
        <GridItem w="16rem" h="10">
          <Heading as="h2" size="md">
            5 Years
          </Heading>
          <Divider />
          <TodosList type="years" />
        </GridItem>
      </Grid>
    </>
  )
}

export default TodosColumns
