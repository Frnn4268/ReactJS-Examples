import { BrowserRouter, Routes, Route } from "react-router-dom"
import {Layout} from './Pages/Layout'
import { TablaSencilla  } from './Pages/TablaSencilla'
import { Gallery  } from './Pages/Gallery'
import { Form } from './Pages/Form'
import "./App.css"
function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/TablaSencilla" element={<TablaSencilla />} />
            <Route index path="/Gallery" element={<Gallery />} />
            <Route index path="/Form" element={<Form />} />
            <Route path="*" 
              element={<>
                <h2>No encontramos la pagina</h2>
              </>} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
