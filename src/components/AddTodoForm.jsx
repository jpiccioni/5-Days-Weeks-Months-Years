import React, { useState } from 'react'
import useTodosStore from '../stores/TodosStore'

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
    })
    setTodoTitle('')
  }

  return (
    <div className="form-container">
      <input
        value={todoTitle}
        onChange={(e) => {
          setTodoTitle(e.target.value)
        }}
        className="form-input"
      />
      <select
        onChange={(e) => {
          setTodoType(e.target.value)
        }}
      >
        <option value="days">Days</option>
        <option value="weeks">Weeks</option>
        <option value="months">Months</option>
        <option value="years">Years</option>
      </select>
      <button
        onClick={() => {
          handleTodoSubmit()
        }}
        className="form-submit-btn"
      >
        Add Todo
      </button>
    </div>
  )
}

export default AddTodoForm
