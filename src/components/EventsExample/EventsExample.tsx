import React, { useRef, useState } from 'react'

export const EventsExample = () => {
  const [value, setValue] = useState<string>('')
  const [isDrag, setDrag] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  const clickHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
    console.log('inputRef value:', inputRef.current?.value)
  }
  const dragHandler = (e:React.MouseEvent<HTMLDivElement>) => {
    console.log('drag')
  }
  const dropHandler = (e:React.MouseEvent<HTMLDivElement>) => {
    console.log('drop')
    setDrag(false)
  }
  const leaveHandler = (e:React.MouseEvent<HTMLDivElement>) => {
    console.log('leave')
    setDrag(false)
  }
  const dragOverHandler = (e:React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDrag(true)
  }
  return (
    <div>
      <input value={value} onChange={changeHandler} />
      <input ref={inputRef} />
      <button style={{marginBottom: 20}} onClick={clickHandler}>Click</button>
      <div onDrag={dragHandler} draggable style={{width: 200, height: 200, backgroundColor: isDrag ? 'green' : 'red'}}></div>
      <div 
      onDrop={dropHandler} 
      onDragLeave={leaveHandler} 
      onDragOver={dragOverHandler}
      style={{width: 200, height: 200, backgroundColor: !isDrag ? 'green' : 'red', marginTop: 15}}></div>
    </div>
  )
}
