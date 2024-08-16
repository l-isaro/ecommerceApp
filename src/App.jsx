import Layout from "./components/Layout"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import {createBrowserRouter ,RouterProvider, createRoutesFromElements, Route } from "react-router-dom"

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path='/' element={<Home />}/>
      <Route path='cart' element={<Cart />}/>
    </Route>
  ))
  return (
    <RouterProvider router={router}/>
  )
}

export default App
