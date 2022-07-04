import { useState } from 'react'
import logo from './logo.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-slate-200">
      <p className='font-bold text-2xl'>Kanso API</p>
    </div>
  )
}

export default App
