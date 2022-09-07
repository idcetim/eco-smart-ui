import { useState } from "react";
import BlockchainModal from "../components/BlockchainModal";
import ProyectInfoModal from "../components/ProyectInfoModal";
import "../styles/global.css"
import "../styles/modal.css"
import gain from '../data/gain.png'
const Home = () => {
    const [openBlockchainModal, setOpenBlockchainModal] = useState(false)
    const [openProyectModal, setOpenProyectModal] = useState(false)
    const gainUrl ="http://gain.xunta.gal/?locale=es_ES"
    return (
        <div className="web-wrapper">

            <h1 className="main-h1"> Proyecto ECO-SMART-BATT</h1>
           <a href={gainUrl} target={"_blank"} rel={"noreferrer"}> <img src={gain} alt={"This in gain"} className="landing-image"/></a>
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