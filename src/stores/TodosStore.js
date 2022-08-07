import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const todosStore = (set) => ({
  todos: [],
  addTodo: (todo) => {
    set((state) => ({
      todos: [todo, ...state.todos],
    }))
  },
  removeTodo: (todoId) => {
    set((state) => ({
      todos: state.todos.filter((t) => t.id !== todoId),
    }))
  },
  toggleTodoStatus: (todoId) => {
    set((state) => ({
      todos: state.todos.map((t) =>
        t.id === todoId
          ? { ...t, completed: !t.completed }
          : t
      )
    }))
  },
})

const useTodosStore = create(
  devtools(
    persist(todosStore, {
      name: 'todos'
    })
  )
)


export default useTodosStore