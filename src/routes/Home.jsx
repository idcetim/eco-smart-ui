import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BlockchainModal from "../components/BlockchainModal";
import ProyectInfoModal from "../components/ProyectInfoModal";
import "../styles/global.css"
import "../styles/modal.css"
const Home = () => {
    const navigate = useNavigate();
    const celulosaHandler = () => { navigate('/celulosa/') }
    const silicioHandler = () => { navigate('/silicio/') }
    const bateriasHandler = () => { navigate('/baterias/') }
    const consultarHandler = () => { navigate('/consultar/') }
    const [openBlockchainModal, setOpenBlockchainModal] = useState(false)
    const [openProyectModal, setOpenProyectModal] = useState(false)

    return (
        <div className="web-wrapper">

            <h1 className="main-h1"> Proyecto ECO-SMART-BATT</h1>
            {/* <h3 className="main-celulosa">Fabricación de nanocelulosa</h3> */}
            <button className="button-home" onClick={celulosaHandler}>Nanocelulosa 🌳</button>
            {/* <h3 className="main-silicio">Fabricación de Nanosilicio</h3> */}
            <button className="button-home" onClick={silicioHandler}>Nanosilicio 🌪</button>
            {/* <h3 className="main-baterias">Montaje de baterías</h3> */}
            <button className="button-home" onClick={bateriasHandler}>Baterías 🔋</button>
            {/* <h3 className="main-consultar">Consultar información</h3> */}
            <div className="small-separation">
                <button className="button-home" onClick={consultarHandler}>Consultar🔎</button>
            </div>
            <div className="modalPosition">
                {openBlockchainModal && <BlockchainModal closeModal={setOpenBlockchainModal} />}
            </div>
            <div className="modalPosition">
                {openProyectModal && <ProyectInfoModal closeModal={setOpenProyectModal} />}
            </div>
            <div className="small-separation">
                <button className="button-home" onClick={() => setOpenProyectModal(true)}>Información del proyecto</button>
            </div>
            <div className="small-separation">
                <button className="button-home" onClick={() => setOpenBlockchainModal(true)}>Información blockchain</button>
            </div>

        </div>
    )
}

export default Home;