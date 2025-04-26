import Header from "./components/Header"
import Footer from "./components/footer"
import Main from "./components/Landing"
import Contact from "./components/Contact"
import Servicos from "./components/Servicos"

import { RouterProvider } from "react-router-dom";
import rotas from "./components/Routes"


export default function App(){
  return (
    <>
      
      <RouterProvider router={rotas} />
      
    </>
  )
}