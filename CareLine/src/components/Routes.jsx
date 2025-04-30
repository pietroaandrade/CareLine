import {createBrowserRouter} from  "react-router";
import Main from "./Landing"
import Contact from "./Contact"
import Servicos from "./Servicos"

const router = createBrowserRouter([
    {path: "/", Component: Main},
    {path: "/Contato", Component: Contact},
    {path: "/Servicos", Component: Servicos},
]);


export default router