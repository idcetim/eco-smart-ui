import '../styles/global.css'
import '../styles/tables.css'

export const TableLote = ({ loteData, type, hashData }) => {
  const fantomExplorer = `https://testnet.ftmscan.com/tx/${hashData}`
  if (type === "Entry") {
    const { Codigo, Fecha, Calidad, Origen, Cantidad, Analisis } = loteData
    return (
      <div style={{"margin-top": "50px"}}>
        <table className="table-celulosa">
          <thead>
            <tr>
              <th colSpan={2} style={{ background: "rgb(164, 197, 198)" }}>Información lote {Codigo}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>Código</b></td>
              <td>{Codigo}</td>
            </tr>
            <tr>
              <td><b>Fecha entrada</b></td>
              <td>{Fecha}</td>
            </tr>
            <tr>
              <td><b>Calidad</b></td>
              <td>{Calidad}</td>
            </tr>
            <tr>
              <td><b>Origen</b></td>
              <td>{Origen}</td>
            </tr>
            <tr>
              <td><b>Cantidad</b></td>
              <td>{Cantidad} kg</td>
            </tr>

            <tr>
              {
                Analisis === "No hay información"
                  ? <>
                    <td><b>Análisis</b></td>
                    <td><span className='color-red'>{Analisis}</span></td>
                  </>
                  :
                  <>
                    <td><b>Análisis</b></td>
                    <td><a className='' href={Analisis} target="_blank" rel="noreferrer">Ver análisis</a></td>
                  </>
              }
            </tr>
            <tr>
              <td><b>Blockchain </b> </td>
              <td><a className='' href={fantomExplorer} target="_blank" rel="noreferrer">Ver transacción</a> </td>
            </tr>

          </tbody>
        </table>

      </div>
    )
  } else {
    const { Codigo, CodigoOrigen, Fecha, Tipo, Calidad, GranulometriaUrl, Cantidad, QuimicoUrl, OrdenUrl } = loteData
    return (
      <div style={{"margin-top": "50px"}}>
        <table className="table-celulosa">
          <thead>
            <tr>
              <th colSpan={2} style={{ background: "rgb(164, 197, 198)" }}>Información lote {Codigo}</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td><b>Código</b></td>
              <td>{Codigo}</td>
            </tr>
            <tr>
              <td><b>Código origen</b></td>
              <td>{CodigoOrigen}</td>
            </tr>
            <tr>
              <td><b>Fecha entrada</b></td>
              <td>{Fecha}</td>
            </tr>
            <tr>
              <td><b>Calidad</b></td>
              <td> {Calidad}</td>
            </tr>
            <tr>
              <td><b>Tipo</b></td>
              <td>{Tipo}</td>
            </tr>
            <tr>
              <td><b>Cantidad</b></td>
              <td>{Cantidad} kg</td>
            </tr>
            <tr>
              {OrdenUrl === 'No hay información'
                ? <>
                  <td><b>Orden trabajo </b></td>
                  <td><span className='color-red'>{OrdenUrl}</span></td>
                </>
                :
                <>
                  <td><b>Orden trabajo </b></td>
                  <td><a className='' href={OrdenUrl} target="_blank" rel="noreferrer">Ver orden de trabajo</a></td>
                </>
              }
            </tr>
            <tr>
              {QuimicoUrl === 'No hay información'
                ?
                <>
                  <td><b>Químico </b></td>
                  <td><span className='color-red'>{QuimicoUrl}</span></td>
                </>
                :
                <>
                  <td><b>Químico </b></td>
                  <td><a className='' href={QuimicoUrl} target="_blank" rel="noreferrer">Ver análisis químico</a></td>
                </>}
            </tr>
            <tr>
              {GranulometriaUrl === 'No hay información'
                ?
                <>
                  <td><b>Granulometría </b></td>
                  <td><span className='color-red'>{GranulometriaUrl}</span></td>
                </>
                :
                <>
                  <td><b>Granulometría </b></td>
                  <td><a className='' href={GranulometriaUrl} target="_blank" rel="noreferrer">Ver granulometría</a></td>
                </>}
            </tr>
            <tr>
              <td><b>Blockchain </b> </td>
              <td><a className='' href={fantomExplorer} target="_blank" rel="noreferrer">Ver transacción</a> </td>
            </tr>

          </tbody>
        </table>
        <br />
      </div>
    )
  }

}