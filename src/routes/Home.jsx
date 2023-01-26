import { useState } from "react";
import BlockchainModal from "../components/BlockchainModal";
import "../styles/global.css"
import "../styles/modal.css"
import gain from '../data/gain.png'
import ferroglobe from '../data/ferroglobe2.png'
import abcrlabs from '../data/abcrlabs.png'
import enso from '../data/enso2.png'
import cetim from '../data/cetim.png'
import artabro from '../data/artabro.png'
import { Typography, Box, Button, Grid } from "@mui/material";
import ProyectInfoModal from "../components/ProyectInfoModal";

{/* <section className="home-wrapper">
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
      </section> */}

const Home = () => {
  const [openBlockchainModal, setOpenBlockchainModal] = useState(false)
  const [openProyectModal, setOpenProyectModal] = useState(false)
  const gainUrl = "http://gain.xunta.gal/?locale=es_ES"

  return (
    <Box sx={{ paddingTop: "40px", display: "flex", flexDirection: "column", alignItems: "center", width: '90%', marginLeft: '5%' }}>
      <Typography variant="h3" sx={{ textAlign: 'center', color: '#3f51b5' }}>Proyecto ECO-SMART-BATT</Typography>

      <a href={gainUrl} target="_blank" rel="noreferrer">
        <img src={gain} alt={"This in gain"} style={{ maxWidth: '90%', marginTop: '30px', cursor: 'pointer' }} />
      </a>

      <Grid container spacing={2} sx={{ marginTop: "20px", maxWidth: '500px' }}>

        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button onClick={() => setOpenProyectModal(true)}>Informacion del proyecto</Button>
        </Grid>

        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button onClick={() => setOpenBlockchainModal(true)}>Información blockchain</Button>
        </Grid>
      </Grid>

      <Typography variant="h5" sx={{ textAlign: 'center', marginTop: '40px' }}>Solicitantes</Typography>

      <Grid container spacing={2} sx={{ marginTop: '10px' }}>
        <Grid item xs={0} md={1} sx={{ display: { xs: 'none', md: 'block' } }}></Grid>

        <Grid item xs={6} md={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <a target="_blank" rel="noreferrer" href={"https://www.ferroglobe.com/"}><img src={ferroglobe} alt="Ferroglobe" width={'100%'} /></a>
        </Grid>

        <Grid item xs={6} md={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <a target="_blank" rel="noreferrer" href={"https://cetim.es/"}><img src={cetim} alt="Cetim" width={'100%'} /></a>
        </Grid>

        <Grid item xs={6} md={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <a target="_blank" rel="noreferrer" href={"https://ensoinnovation.com/"}><img src={enso} alt="Enso" width={'100%'} /></a>
        </Grid>

        <Grid item xs={6} md={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <a target="_blank" rel="noreferrer" href={"https://www.artabrotech.com/"}><img src={artabro} alt="Artabro" width={'100%'} /></a>
        </Grid>

        <Grid item xs={6} md={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <a target="_blank" rel="noreferrer" href={"https://www.artabrotech.com/"}><img src={abcrlabs} alt="AbcrLabs" width={'100%'} /></a>
        </Grid>
      </Grid>

      <ProyectInfoModal open={openProyectModal} handleClose={() => setOpenProyectModal(false)} />
      <BlockchainModal open={openBlockchainModal} handleClose={() => setOpenBlockchainModal(false)} />
    </Box >
  )
}

export default Home;