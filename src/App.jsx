import './App.css'
import { Heading } from '@chakra-ui/react'
import AddTodoForm from './components/AddTodoForm.jsx'
import TodosColumns from './components/TodosColumns.jsx'

function App() {
  return (
    <div className="main-container">
      <Heading as='h1'>5 D/W/M/Y</Heading>
      <AddTodoForm />
      <TodosColumns />
    </div>
  )
}

export default App
