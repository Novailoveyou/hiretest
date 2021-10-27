import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [imgs, setImgs] = useState([])

  const handleClick = async () => {
    setCount(count + 1)

    const res = await fetch('https://randomuser.me/api')
    const data = await res.json()
    const img = data.results[0].picture.thumbnail
    setImgs([...imgs, img])
  }

  return (
    <div className='App'>
      <button onClick={handleClick}>Click me</button>
      <div>{count}</div>
      <div>
        {imgs.map(item => (
          <img key={item} src={item} />
        ))}
      </div>
    </div>
  )
}

export default App
