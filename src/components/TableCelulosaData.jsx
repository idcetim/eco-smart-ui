import "../styles/tables.css"
const TableCelulosaData = ({ origenData, procesosData, productoData, codigo, origenHash, productoHash, procesosHash }) => {
  const fantomExplorer = "https://testnet.ftmscan.com/tx/"
  return (
    productoHash !== undefined && <div>
      <table className="table-celulosa">
        <thead>
          <tr>
            <th colSpan={2} style={{ background: "lightgreen" }}>Lote {codigo} - Pasta de celulosa original</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Celulosa (%)</td>
            {origenData[0] !== "" ? <td>{origenData[0]}%</td> : <td></td>}
          </tr>
          <tr>
            <td>Hemicelulosa (%)</td>
            {origenData[1] !== "" ? <td>{origenData[1]}%</td> : <td></td>}
          </tr>
          <tr>
            <td>Lignina (%)</td>
            {origenData[2] !== "" ? <td>{origenData[2]}%</td> : <td></td>}
          </tr>
          <tr>
            <td>Origen</td>
            {origenData[3] !== "" ? <td>{origenData[3]}</td> : <td></td>}
          </tr>

          <tr>
            <td>Transacción blockchain</td>
            {origenHash !== undefined
            ? <td>{<a href={`${fantomExplorer}${origenHash}`} target="_blank" rel="noreferrer">Ver en smart contract</a> }</td>
            : <td></td>}
          </tr>
        </tbody>
      </table>
      <table className="table-celulosa">
        <thead>
          <tr>
            <th colSpan={2} style={{ background: "lightgreen" }}>Lote {codigo} - Procesos realizados</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pretratamiento mecánico</td>
            <td>{procesosData[0] === '1' ? '✅' : ' ❌'}</td>
          </tr>
          <tr>
            <td>Pretratamiento químico</td>
            <td>{procesosData[2] === '1' ? '✅' : ' ❌'}</td>
          </tr>
          <tr>
            <td>Pretratamiento enzimático</td>
            <td>{procesosData[1] === '1' ? '✅' : ' ❌'}</td>
          </tr>
          <tr>
            <td>Homogenización</td>
            <td>{procesosData[3] === '1' ? '✅' : ' ❌'}</td>
          </tr>
          <tr>
            <td>Transacción blockchain</td>
            {procesosHash !== undefined
            ? <td>{<a href={`${fantomExplorer}${procesosHash}`} target="_blank" rel="noreferrer">Ver en smart contract</a> }</td> 
            : <td></td>}
          </tr>
        </tbody>
      </table>
      <table className="table-celulosa">
        <thead>
          <tr>
            <th colSpan={2} style={{ background: "lightgreen" }}> Lote {codigo} - Características nanocelulosa</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Conductividad iónica</td>
            <td>{productoData[0]} S/m</td>
          </tr>
          <tr>
            <td>Ancho medio partícula</td>
            <td>{productoData[2]}</td>
          </tr>
          <tr>
            <td>Formato nanocelulosa</td>
            <td>{productoData[1]}</td>
          </tr>
          <tr>
            <td>Porcensaje en suspensión</td>
            {productoData[3] !== "" ? <td>{productoData[3]}%</td> : <td>------</td>}
          </tr>
          <tr>
            <td>Transacción blockchain</td>
            {productoHash !== undefined
            ? <td>{<a href={`${fantomExplorer}${productoHash}`} target="_blank" rel="noreferrer">Ver en smart contract</a> }</td>
             : <td> </td>}
          </tr>
        </tbody>
      </table>
    </div>
  )
}


export default TableCelulosaData;