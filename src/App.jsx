import { useState } from 'react'
import './App.css'
import AddCategory from './components/AddCategory'
import DisplayGifs from './components/DisplayGifs'

function App() {
  const [category, setCategory] = useState("")

  return (
    <div>
      <h2 className='text-center m-5 display-3'>Buscador de Gifs</h2>
      <AddCategory setCategory={setCategory}/>
      <DisplayGifs category={category}/>
    </div>
  )
}

export default App
