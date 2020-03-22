import React, { useRef, useEffect, useState } from 'react'

function App() {
  const inputRef = useRef()
  const count = useRef(1)
  const [_, setValue] = useState(false)

  const handleClick = () => {
    inputRef.current.focus()
    console.log('inputRef.current', inputRef.current)
  }

  useEffect(() => {
    setTimeout(() => {
      console.log('passou aqui')
      count.current = 300
      setValue(true)
    }, 3000)
  })

  return (
    <>
      <h1>Valor de count: {count.current}</h1>
      Foco: <input ref={inputRef} />
      <br />
      <br />
      <br />
      <button onClick={handleClick}>Focar</button>
    </>
  )
}
export default App