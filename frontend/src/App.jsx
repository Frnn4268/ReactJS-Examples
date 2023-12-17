import { BrowserRouter, Routes, Route } from "react-router-dom"
import {Layout} from './Pages/Layout'

import { JSONPlaceHolder  } from './Pages/JSONPlaceHolder'
import { Gallery  } from './Pages/Gallery'
import { Form } from './Pages/Form'
import "./App.css"
function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/JsonPlaceHolder" element={<JSONPlaceHolder />} />
            <Route index path="/Gallery" element={<Gallery />} />
            <Route index path="/DynamicForm" element={<Form />} />
            <Route path="*" 
              element={<>
                <h2>Page not found</h2>
              </>} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
