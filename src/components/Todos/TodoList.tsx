import React, { FC } from 'react'
import { ITodo } from '../../types/types'
import { List } from '../Common/List'
import { TodoItem } from './TodoItem'

interface TodoListProps {
  todos: ITodo[]
}

export const TodoList: FC<TodoListProps> = props => {
  const {todos} = props
  return (
    <div style={{maxWidth: 450, marginBottom: 15}}>
      <List items={todos} renderItem={(item:ITodo) => <TodoItem key={item.id} item={item} />} />
    </div>
  )
}
