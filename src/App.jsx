import './App.css'
import {Home} from './components/Home.jsx'
import { Mensaje } from './components/Mensaje.jsx'
import { Search } from './components/Search'

function App() {

  return (
    <div className='bg-black text-white'>
      <Home/>
      <Search/>
      <Mensaje/>
    </div>
  )
}

export default App