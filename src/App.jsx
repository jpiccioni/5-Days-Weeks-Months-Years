import { Heading, Flex, Box, Spacer } from '@chakra-ui/react'

import './App.css'
import AddTodoForm from './components/AddTodoForm.jsx'
import TodosColumns from './components/TodosColumns.jsx'
import TheDrawer from './components/drawer/TheDrawer'

function App() {
  return (
    <div className="main-container">
      <Flex>
        <Box>
          <Heading as="h1">5 D/W/M/Y</Heading>
        </Box>
        <Spacer />
        <Box>
          <TheDrawer />
        </Box>
      </Flex>
      <AddTodoForm />
      <TodosColumns />
    </div>
  )
}

export default App
