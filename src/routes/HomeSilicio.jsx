
import { useNavigate } from "react-router-dom";
import "../styles/global.css"

const HomeSilicio = () => {
    const navigate = useNavigate()
    const origenHandler = () => {navigate('/silicio/entradas/')}
    const entradasAnalisisHandler = () => {navigate('/silicio/entradas/analisis/')}
    const productoHandler = () => {navigate('/silicio/producto/')}
    const consultarHandler = () => {navigate('/silicio/consulta/')}
    const consultarTodosHandler = () => {navigate('/silicio/consulta/lotes')}
    return(
        <div className="web-wrapper">
            <h1 className="main-silicio">Nanosilicio</h1>
          
            <h3> Registro de información</h3>
            <div>
                <button className="button-home" onClick={origenHandler}>Lotes 🚚</button>
                <button className="button-home" onClick={entradasAnalisisHandler}>Añadir análisis de entrada</button>
                <button className="button-home" onClick={productoHandler}>Producto final 📦</button>
            </div>
            <h3>Consulta de información</h3>
            <button className="button-home" onClick={consultarHandler}>Consultar un lote🔎</button>
            <button className="button-home" onClick={consultarTodosHandler}>Consultar todos🔎</button>

            <div className="div-backhome-button">
            </div>
        </div>
    )
  
}

export default HomeSilicio;