import { useState } from 'react';
import TextInput from '../../components/TextInput'
import BackSilButton from '../../components/BackSilButton'
import { header } from '../../api/fetchHeader'
import ShowTxHash from '../../components/ShowTxHash';
import ShowSilicioIndividual from '../../components/ShowSilicioIndividual';
import { urlSilLotes, urlSilProducto, urlSilLotesHash, urlSilProductoHash } from '../../api/endpoints';
import "../..//styles/global.css"


const ConsultarLoteSilicio = () => {
  const [codigo, setCodigo] = useState("")
  const [loteData, setLoteData] = useState([])
  const [productoData, setProductoData] = useState([])
  const [loteHash, setLoteHash] = useState("")
  const [productoHash, setProductoHash] = useState("")

  const consultarHandler = async () => {
    const urlOrigen = `${urlSilLotes}?code=${codigo}`
    const dataLote = await fetch(urlOrigen, header)
    setLoteData(await dataLote.json())

    const urlProducto = `${urlSilProducto}?code=${codigo}`
    const dataProducto = await fetch(urlProducto, header)
    setProductoData(await dataProducto.json())

    const urlHashLote = `${urlSilLotesHash}?code=${codigo}`
    const hashLote = await fetch(urlHashLote, header)
    setLoteHash(await hashLote.json())

    const urlHashProducto = `${urlSilProductoHash}?code=${codigo}`
    const hashProducto = await fetch(urlHashProducto, header)
    setProductoHash(await hashProducto.json())
  }

  return (
    <div className='web-wrapper'>
      <div className='div-button-back'>
        <BackSilButton />
      </div>
      <div className='div-button-back'>
        <h3>Consultar información sobre nanosilicio</h3>
        <div className='div-consultar-1lote'>
          <TextInput codigo="Codigo" func={setCodigo} />
          <button className='button-registrar-inline' onClick={consultarHandler} disabled={!codigo}>Consultar lote 🔎</button>
        </div>
        <ShowSilicioIndividual loteData={loteData} productoData={productoData} codigo={codigo} />
        <div className='div-blockchain-info'>
          {loteHash !== "" && <span className="span-title"> Información blockchain del lote <span className="span-title-green">{codigo}</span></span>}
          {loteHash !== "" && <ShowTxHash hash={loteHash} text={"Transacción del lote"} />}
          {productoHash !== "" && <ShowTxHash hash={productoHash} text={"Transacción producto"} />}
        </div>
      </div>
    </div>
  )

}

export default ConsultarLoteSilicio;