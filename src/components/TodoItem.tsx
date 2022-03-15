import React, { FC } from 'react'
import { ITodo } from '../types/types'

interface TodoItemProps {
  item: ITodo
}

export const TodoItem: FC<TodoItemProps> = props => {
  const {item} = props
  return (
    <div style={{width: '100%', display: 'flex'}}>
      <input readOnly type="checkbox" checked={item.completed} />
      <div>
        {item.id}. {item.title}
      </div>
    </div>
  )
}
