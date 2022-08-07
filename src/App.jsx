import './App.css'
import AddTodoForm from './components/AddTodoForm.jsx'
import TodosList from './components/TodosList.jsx'

function App() {
  return (
    <div className="main-container">
      <h1 style={{
        fontSize: "2.5rem",
        marginBottom: "2rem"
      }}>5 D/W/M/Y</h1>
      <AddTodoForm />
      <TodosList />
    </div>
  )
}

export default App
