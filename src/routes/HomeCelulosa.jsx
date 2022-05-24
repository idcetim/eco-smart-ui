import { useNavigate } from "react-router-dom";
import BackHomeButton from '../components/BackHomeButton';

import "../styles/global.css"

const HomeCelulosa = () => {
    const navigate = useNavigate();
    const origenHandler = () => {navigate('/celulosa/origen/')}
    const procesosHandler = () => {navigate('/celulosa/procesos/')}
    const productoHandler = () => {navigate('/celulosa/producto/')}
    const consultarHandler = () => {navigate('/celulosa/consulta/')}

    return(
        <div className="web-wrapper">
            <h1>Nanocelulosa</h1>
            <h3> Registro de materia prima</h3>
            <button className="button-home" onClick={origenHandler}>Materia primas</button>
            <h3> Registro de procesos</h3>
            <button className="button-home" onClick={procesosHandler}>Procesos</button>
            <h3> Registro del producto final</h3>
            <button className="button-home" onClick={productoHandler}>Producto final</button>
            <h3> Consultar información sobre lotes de nanocelulosa </h3>
            <button className="button-home" onClick={consultarHandler}>Consultar🔎</button>
            <div className="div-backhome-button">
            <BackHomeButton />
            </div>
            
        </div>
    )
  
}

export default HomeCelulosa;