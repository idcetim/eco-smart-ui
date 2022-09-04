import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BlockchainModal from "../components/BlockchainModal";
import "../styles/global.css"
import "../styles/modal.css"
const Home = () => {
    const navigate = useNavigate();
    const celulosaHandler = () => { navigate('/celulosa/') }
    const silicioHandler = () => { navigate('/silicio/') }
    const bateriasHandler = () => { navigate('/baterias/') }
    const consultarHandler = () => { navigate('/consultar/') }
    const [openModal, setOpenModal] = useState(false)

    return (
        <div className="web-wrapper">
           
            <h1 className="main-h1"> Proyecto ECO-SMART-BATT</h1>
            <h3 className="main-celulosa">Fabricación de nanocelulosa</h3>
            <button className="button-home" onClick={celulosaHandler}>Nanocelulosa 🌳</button>
            <h3 className="main-silicio">Fabricación de Nanosilicio</h3>
            <button className="button-home" onClick={silicioHandler}>Nanosilicio 🌪</button>
            <h3 className="main-baterias">Montaje de baterías</h3>
            <button className="button-home" onClick={bateriasHandler}>Baterías 🔋</button>
            <h3 className="main-consultar">Consultar información</h3>
            <div className="small-separation">
                <button className="button-home" onClick={consultarHandler}>Consultar🔎</button>
            </div>
            <div className="modalPosition">
                {openModal && <BlockchainModal closeModal={setOpenModal} />}
            </div>
            <div className="small-separation">
                <button className="button-home" onClick={() => setOpenModal(true)}>Información blockchain</button>
            </div>

        </div>
    )
}

export default Home;