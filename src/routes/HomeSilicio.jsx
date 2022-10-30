
import { useNavigate } from "react-router-dom";
import "../styles/global.css"

const HomeSilicio = () => {
  const navigate = useNavigate()
  const origenHandler = () => { navigate('/silicio/entradas/') }
  const entradasAnalisisHandler = () => { navigate('/silicio/entradas/analisis/') }
  const productoHandler = () => { navigate('/silicio/produccion/') }
  const produccionAnalisisHandler = () => { navigate('/silicio/produccion/analisis/') }
  const verStockEntradasHandler = () => { navigate('/silicio/verentradas/') }
  const verStockProduccionHandler = () => { navigate('/silicio/verproduccion/') }
  // const consultarHandler = () => {navigate('/silicio/consulta/')}
  // const consultarTodosHandler = () => {navigate('/silicio/consulta/lotes')}
  return (
    <div className="web-wrapper">
      <h1 className="main-title silicio">Nanosilicio</h1>
      <h3 className="title-task silicio"> Registro de información</h3>
      <button className="button-home" onClick={origenHandler}>Lotes 🚚</button>
      <button className="button-home" onClick={entradasAnalisisHandler}>Añadir análisis de entrada</button>
      <button className="button-home" onClick={productoHandler}>Producto final 📦</button>
      <button className="button-home" onClick={produccionAnalisisHandler}>Añadir análisis al producto</button>
      <h3 className="title-task silicio">Consulta de información</h3>
      <button className="button-home" onClick={verStockEntradasHandler}>Ver entradas</button>
      <button className="button-home" onClick={verStockProduccionHandler}>Ver producción</button>
      {/* <button className="button-home" onClick={consultarHandler}>Consultar un lote🔎</button>
            <button className="button-home" onClick={consultarTodosHandler}>Consultar todos🔎</button> */}

      <div className="div-backhome-button">
      </div>
    </div>
  )

}

export default HomeSilicio;