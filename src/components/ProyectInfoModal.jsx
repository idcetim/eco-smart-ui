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
          Proyecto que consta de 3 partes:
          <br></br>
          <ul>
            <li>Producción de nanocelulosa</li>
            <li>Producción de nanosilicio</li> 
            <li>Diseño e implementación de baterías</li>
          </ul>
        </section>

      </div>
    </div>
  )
}

export default ProyectInfoModal