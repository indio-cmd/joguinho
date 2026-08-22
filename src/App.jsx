import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/home'
import Jogo from './pages/Jogo/jogo'
import Resultado from './pages/Resultado/resultado'
import Botoes from './components/Botoes/botoes'
import Campeao from './components/Campeao/campeao'
import Inimigo from './components/Inimigo/inimigo'

function App() {
  //const [count, setCount] = useState(0)
  return (
    <>
   <Campeao/>
   <Inimigo/>
<Routes>
  <Route path='/' element={Home} ></Route>
    <Route path='/jogo' element={Jogo} ></Route>
  <Route path='/resultado' element={Resultado} ></Route>
</Routes>
 <Botoes/>
    </>
  )
}
export default App 
