import { Routes, Route } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css'

import NotFound404 from "./pages/NotFound404";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {

  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/product/:id' element={<ProductPage />}>{""}</Route>
        <Route path='/checkout' element={<CheckoutPage />}></Route>
        <Route path='/*' element={<NotFound404 />}></Route>
      </Routes>
    </>
  )
}

export default App
