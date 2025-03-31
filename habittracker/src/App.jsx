import { Route, Routes } from "react-router-dom"
import { Main } from "./components/Main/Main"
import { DonePage } from "./components/DonePage/DonePage"

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/done' element={<DonePage/>}/>
    </Routes>
    </>
  )
}

export default App
