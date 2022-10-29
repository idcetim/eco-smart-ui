import '../styles/modal.css'
const BlockchainModal = (props) => {
  const closeModal = props.closeModal
  const fantomExplorer = "https://testnet.ftmscan.com/address/"
  const celulosaSC = "0x0ffbD40722C4C1812fE427c9eF37525EB1de05BE"
  const silicioSC = "0xD4b01159136d6783c5e13fD3C948E4Afa967682B"
  const bateriasSC = "0x5648A0C401093e798f4C3588EF02b28Db99cA4A0"
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="header">
          <span className="modalTitle">Información Blockchain</span>
          <button onClick={() => closeModal(false)} className="close-btn"> X </button>
        </div>
        <section>
          <p><a href={`https://fantom.foundation/`} target="_blank" rel="noreferrer" className="modalLink">Blockchain de Fantom</a></p>
          <p><a href={`${fantomExplorer}${celulosaSC}`} target="_blank" rel="noreferrer" className="modalLink">Smart contract Nanocelulosa 📜</a></p>
          <p><a href={`${fantomExplorer}${silicioSC}`} target="_blank" rel="noreferrer" className="modalLink">Smart contract Nanosilicio 📜</a></p>
          <p><a href={`${fantomExplorer}${bateriasSC}`} target="_blank" rel="noreferrer" className="modalLink">Smart contract Baterías 📜</a></p>
        </section>

      </div>
    </div>
  )
}

export default BlockchainModal