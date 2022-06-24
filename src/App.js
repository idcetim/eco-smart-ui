import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './routes/Home'
import HomeCelulosa from './routes/HomeCelulosa'
import HomeSilicio from './routes/HomeSilicio'
import HomeBaterias from './routes/HomeBaterias'
import Consultar from './routes/Consultar'
import Origen from "./routes/celulosa/Origen";
import Procesos from "./routes/celulosa/Procesos";
import ProductoFinal from "./routes/celulosa/ProductoFinal";
import ConsultarCelulosa from "./routes/celulosa/ConsultarCelulosa";
import ConsultarLotesCel from "./routes/celulosa/ConsultarLotesCel";
import LotesSilicio from "./routes/silicio/LotesSilicio";
import ProductoSilicio from "./routes/silicio/ProductoSilicio";
import ConsultarLoteSilicio from "./routes/silicio/ConsultarLoteSilicio";
import ConsultarTodosSilicio from "./routes/silicio/ConsultarTodosSilicio";

function App() {

    return ( <div >
        <BrowserRouter >
        <Routes >
        <Route path = "/"element = { < Home /> }/> 
        <Route path = "/celulosa" element = { < HomeCelulosa /> }/> 
        <Route path = "/celulosa/origen/*"element = { < Origen/> }/>
        <Route path = "/celulosa/procesos/*" element = { < Procesos /> }/> 
        <Route path = "/celulosa/producto/*"element = { < ProductoFinal /> }/>
        <Route path = "/celulosa/consulta/*"element = { < ConsultarCelulosa /> }/> 
        <Route path = "/celulosa/consulta/lotes/*"element = { < ConsultarLotesCel /> }/> 
        <Route path = "/silicio"element = { < HomeSilicio /> }/> 
        <Route path = "/silicio/origen/*" element = { < LotesSilicio /> }/> 
        <Route path = "/silicio/producto/*"element = { < ProductoSilicio /> }/> 
        <Route path = "/silicio/consulta/*"element = { < ConsultarLoteSilicio /> }/> 
        <Route path = "/silicio/consulta/lotes/*" element = { < ConsultarTodosSilicio /> }/> 
        <Route path = "/baterias" element = { < HomeBaterias /> }/> 
        <Route path = "/consultar" element = { < Consultar /> }/>

        </Routes> 
        </BrowserRouter>
        </div>
    );
}

export default App;