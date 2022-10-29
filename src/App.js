import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./routes/NavBar";
import Home from './routes/Home'
import HomeCelulosa from './routes/HomeCelulosa'
import HomeSilicio from './routes/HomeSilicio'
import HomeBaterias from './routes/HomeBaterias'
import Consultar from './routes/Consultar'
import Origen from "./routes/celulosa/Origen";
import Procesos from "./routes/celulosa/Procesos";
import ProductoFinal from "./routes/celulosa/ProductoFinal";
import ConsultarLotesCel from "./routes/celulosa/ConsultarLotesCel";
import { Entradas } from "./routes/silicio/Entradas";
import { AddAnalisisEntrada } from "./routes/silicio/AddAnalisisEntrada";
import Produccion from "./routes/silicio/Produccion";
import { AddAnalisisProduct } from "./routes/silicio/AddAnalisisProduct";
import { VerStockEntradas } from "./routes/silicio/VerStockEntradas";
import { VerStockProduccion } from "./routes/silicio/VerStockProduccion";

function App() {
    return (<div >
        <BrowserRouter >
            <NavBar />
            <Routes >
                <Route path="/" element={< Home />} />
                <Route path="/celulosa" element={< HomeCelulosa />} />
                <Route path="/celulosa/origen/*" element={< Origen />} />
                <Route path="/celulosa/procesos/*" element={< Procesos />} />
                <Route path="/celulosa/producto/*" element={< ProductoFinal />} />
                {/* <Route path="/celulosa/consulta/*" element={< ConsultarCelulosa />} /> */}
                <Route path="/celulosa/consulta/lotes/" element={< ConsultarLotesCel />} />
                <Route path="/silicio" element={< HomeSilicio />} />
                <Route path="/silicio/entradas/*" element={< Entradas />} />
                <Route path="/silicio/entradas/analisis/*" element={< AddAnalisisEntrada />} />
                <Route path="/silicio/produccion/*" element={< Produccion />} />
                <Route path="/silicio/produccion/analisis/*" element={< AddAnalisisProduct />} />
                <Route path="/silicio/verentradas" element={< VerStockEntradas />} />
                <Route path="/silicio/verproduccion" element={< VerStockProduccion />} />
                {/* <Route path="/silicio/consulta/*" element={< ConsultarLoteSilicio />} />
                <Route path="/silicio/consulta/lotes/*" element={< ConsultarTodosSilicio />} /> */}
                <Route path="/baterias" element={< HomeBaterias />} />
                <Route path="/consultar" element={< Consultar />} />

            </Routes>
        </BrowserRouter>
    </div>
    );
}

export default App;