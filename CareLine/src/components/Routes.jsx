import {createBrowserRouter} from  "react-router";
import Main from "./Landing"
import Contact from "./Contact"
import Servicos from "./Servicos"
import Sobre from "./Sobre"
import Login from "./LoginSignup/Login"

const router = createBrowserRouter([
    {path: "/", element: <Main />},
    {path: "/Contato", element: <Contact />},
    {path: "/Servicos", element: <Servicos />},
    {path: "/Sobre", element: <Sobre />},
    {path: "/Login", element: <Login />}
]);

export default router