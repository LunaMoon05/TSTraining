import React, { FC } from 'react'

interface ListProps<T> {
  items: T[],
  renderItem: (item: T, index: number) => React.ReactNode,
  style?: T
}

export function List<T>(props: ListProps<T>) {
  const {items, renderItem, style} = props
  return (
    <>
      {items.map(renderItem)}
    </>
  )
}
