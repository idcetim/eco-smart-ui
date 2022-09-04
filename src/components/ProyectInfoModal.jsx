import '../styles/modal.css'
const ProyectInfoModal = (props) => {
    const closeModal = props.closeModal
    return (
        <div className="modalBackground">
          <div className="modalContainer">
            <div className="header">
              <span className="modalTitle">Información del proyecto</span>
              <button onClick={() => closeModal(false)} className="close-btn"> X </button>
            </div>
            <section>
              <p><a href={`https://fantom.foundation/`} target="_blank" rel="noreferrer" className="modalLink">Blockchain de Fantom</a></p>
            </section>
    
          </div>
        </div>
      )
}

export  default ProyectInfoModal