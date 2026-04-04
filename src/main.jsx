import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Survey from './Survey.jsx'
import { HashRouter, Routes, Route } from 'react-router'
import Cards from './Cards.jsx'
import Documentation from './Documentation.jsx'
import Inventory from './Inventory.jsx'
import Product from "./Product"
import Contract from './Contract.jsx'
import Introduction from './Introduction.jsx'
import Itsc3135 from './Itsc3135.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <HashRouter>
          <Routes>
          <Route path='/' element={<App />}></Route>
          <Route path='/survey' element={<Survey />}></Route>
        <Route path='/cards' element={<Cards />}></Route>
        <Route path='/documentation' element={<Documentation />}></Route>
        <Route path='/inventory' element={<Inventory />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/contract' element={<Contract />}></Route>
        <Route path='/introduction' element={<Introduction />}></Route>
        <Route path='/itsc3135' element={<Itsc3135 />}></Route>
      </Routes>
      </HashRouter>
  </StrictMode>,
);