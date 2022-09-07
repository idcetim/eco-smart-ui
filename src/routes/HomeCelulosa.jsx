import { useNavigate } from "react-router-dom";

import "../styles/global.css"

const HomeCelulosa = () => {
  const navigate = useNavigate();
  const origenHandler = () => { navigate('/celulosa/origen/') }
  const procesosHandler = () => { navigate('/celulosa/procesos/') }
  const productoHandler = () => { navigate('/celulosa/producto/') }
  const consultarHandler = () => { navigate('/celulosa/consulta/') }
  const consultarTodosHandler = () => { navigate('/celulosa/consulta/lotes') }
  return (
    <div className="web-wrapper">
      <h1 className="main-celulosa">Nanocelulosa</h1>
      <h3> Registro de información</h3>
      <div>
        <button className="button-home" onClick={origenHandler}>Materia primas 🍂</button>
        <button className="button-home" onClick={procesosHandler}>Procesos 🔄</button>
        <button className="button-home" onClick={productoHandler}>Producto final 📂</button>
      </div>

      <h3>Consulta de información</h3>
      <button className="button-home" onClick={consultarHandler}>Consultar lote 🔎</button>
      <button className="button-home" onClick={consultarTodosHandler}>Consultar todos 🔎</button>

    </div>
  )

}

export default HomeCelulosa;