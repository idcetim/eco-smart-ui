import "../styles/tables.css"

const ShowSilicioIndividual = (props) => {
  const loteData = props.loteData
  const productoData = props.productoData
  const codigo = props.codigo

  return (
    Object.keys(productoData).length !== 0 &&
    <div>
      <div className="div-title">
        <span className="span-title">Información  del lote <span className="span-title-green">{codigo}</span> </span>
      </div>

      <table className="table-celulosa">
        <thead>
          <tr>
            <th colSpan={2}>Información de llegada</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fecha de llegada</td>
            {loteData[0] !== "" ? <td>{loteData[0]}</td> : <td></td>}
          </tr>
          <tr>

            <td>Calidad</td>
            {loteData[1] !== "" ? <td>{loteData[1]}</td> : <td></td>}
          </tr>
          <tr>

            <td>Origen</td>
            {loteData[2] !== "" ? <td>{loteData[2]}</td> : <td></td>}
          </tr>
          <tr>
            <td>Cantidad</td>
            {loteData[3] !== "" ? <td>{loteData[3]} kg</td> : <td></td>}
          </tr>
          <tr>

            <td>Análisis químico</td>
            {loteData[4] !== "" ? <td><a href={loteData[4]}>Ver Análisis</a></td> : <td></td>}
          </tr>
        </tbody>
      </table>

      <table className="table-celulosa">
        <thead>
          <tr>
            <th colSpan={2}>Información del producto</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fecha de producción</td>
            <td>{productoData[0]}</td>
          </tr>
          <tr>
            <td>Tipo</td>
            <td>{productoData[1]}</td>
          </tr>
          <tr>
            <td>Cantidad</td>
            <td>{productoData[4]} kg</td>
          </tr>
          <tr>
            <td>Granulometría</td>
            <td><a href={productoData[2]}>Ver Análisis</a></td>
          </tr>
          <tr>
            <td>Análisis Quimico</td>
            <td><a href={productoData[3]}>ver Análisis</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}


export default ShowSilicioIndividual;