import { useNavigate } from "react-router-dom";
import "../styles/global.css"
const Home = () => {
    const navigate = useNavigate();
    const celulosaHandler = () => {navigate('/celulosa/')}
    const silicioHandler = () => {navigate('/silicio/')}
    const bateriasHandler = () => {navigate('/baterias/')}
    const consultarHandler = () => {navigate('/consultar/')}
    return (
        <div className="web-wrapper">
            <h1> Proyecto ECO-SMART-BATT</h1>
            <h3>Fabricación de nanocelulosa</h3>
            <button className="button-home" onClick={celulosaHandler}>Nanocelulosa</button>
            <h3>Fabricación de Nanosilicio</h3>
            <button className="button-home" onClick={silicioHandler}>Nanosilicio</button>
            <h3>Montaje de baterías</h3>
            <button className="button-home" onClick={bateriasHandler}>Baterías</button>
            <h3>Consultar información</h3>
            <div className="small-separation">
                <button className="button-home" onClick={consultarHandler}>Consultar</button>
            </div>
        </div>
    )
    }

export default Home;