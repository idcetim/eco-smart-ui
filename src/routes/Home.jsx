import { useState } from "react";
import BlockchainModal from "../components/BlockchainModal";
import ProyectInfoModal from "../components/ProyectInfoModal";
import "../styles/global.css"
import "../styles/modal.css"
import gain from '../data/gain.png'
import ferroglobe from '../data/ferroglobe.png'
import abcrlabs from '../data/abcrlabs.png'
import enso from '../data/enso.png'
import cetim from '../data/cetim.png'
import artabro from '../data/artabro.png'
const Home = () => {
  const [openBlockchainModal, setOpenBlockchainModal] = useState(false)
  const [openProyectModal, setOpenProyectModal] = useState(false)
  const gainUrl = "http://gain.xunta.gal/?locale=es_ES"
  return (
    <>
      <section className="home-wrapper">
        <h1 className="main-h1"> Proyecto ECO-SMART-BATT</h1>
        <a href={gainUrl} target={"_blank"} rel={"noreferrer"}> <img src={gain} alt={"This in gain"} className="landing-image" /></a>
        <div className="modalPosition">
          {openBlockchainModal && <BlockchainModal closeModal={setOpenBlockchainModal} />}
        </div>
        <div className="modalPosition">
          {openProyectModal && <ProyectInfoModal closeModal={setOpenProyectModal} />}
        </div>
        <div style={{ "margin-top": "10px" }}>
          <button className="button-home" onClick={() => setOpenProyectModal(true)}>Información del proyecto</button>
        </div>
        <div style={{ "margin-top": "10px" }}>
          <button className="button-home" onClick={() => setOpenBlockchainModal(true)}>Información blockchain</button>
        </div>
      </section>
      <section className="home-wrapper" style={{"margin-top": "50px"}}>
        <h2 className="title-solicitantes">SOLICITANTES DEL PROYECTO</h2>
        <div className="solicitantes">
          <a target="_blank" rel="noreferrer" href={"https://www.ferroglobe.com/"}><img src={ferroglobe} alt="Ferroglobe" /></a>
          <a target="_blank" rel="noreferrer" href={"https://cetim.es/"}><img src={cetim} alt="Cetim" /></a>
          <a target="_blank" rel="noreferrer" href={"https://ensoinnovation.com/"}><img src={enso} alt="Enso" /></a>
          <a target="_blank" rel="noreferrer" href={"https://www.artabrotech.com/"}><img src={artabro} alt="Artabro" /></a>
          <a target="_blank" rel="noreferrer" href={"https://www.artabrotech.com/"}><img src={abcrlabs} alt="AbcrLabs" /></a>
          
        </div>
      </section>
    </>
  )
}

export default Home;