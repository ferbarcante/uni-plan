import { Route, BrowserRouter,Routes } from "react-router-dom";
import Login from "./pages/login";
const Rotas = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Rotas;