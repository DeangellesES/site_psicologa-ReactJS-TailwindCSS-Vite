import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Sobre from "./pages/Sobre";

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio/>}></Route>
                <Route path="/sobre" element={<Sobre/>}></Route>
            </Routes> 
        </BrowserRouter>
    )
}

export default AppRoutes