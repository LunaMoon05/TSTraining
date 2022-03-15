import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ITodo } from '../../types/types';
import { TodoList } from './TodoList';

export const TodosPage = () => {
  const [todos, setTodos] = useState<ITodo[]>([])
  useEffect(() => {
    fetchTodos()
  }, [])
  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      setTodos(response.data)
    } catch (error) {
      alert(error)
    }
  }
  return (
    <TodoList todos={todos} />
  );
}
