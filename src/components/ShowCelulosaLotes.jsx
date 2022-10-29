import { useState } from 'react';
import { urlCelOrigen, urlCelProceso, urlCelProducto, urlCelOrigenHash, urlCelProcesosHash, urlCelProductoHash } from '../api/endpoints'
import { header } from '../api/fetchHeader'
import TableCelulosaData from './TableCelulosaData'

import "../styles/showLotes.css"
import { Loading } from './Loading';

const ShowCelulosaLotes = ({ lotes }) => {
  const [currentCode, setCurrentCode] = useState("")
  const [origenData, setOrigenData] = useState([])
  const [procesosData, setProcesosData] = useState([])
  const [productoData, setProductoData] = useState([])
  const [origenHash, setOrigenHash] = useState(undefined)
  const [procesosHash, setProcesosHash] = useState(undefined)
  const [productoHash, setProductoHash] = useState(undefined)

  const searchLoteInfo = async (lote) => {
    setOrigenData([])
    setProcesosData([])
    setProductoData([])
    setOrigenHash(undefined)
    setProcesosHash(undefined)
    setProductoHash(undefined)
    setCurrentCode(lote)
    const urlOrigen = `${urlCelOrigen}?code=${lote}`
    const dataOrigen = await fetch(urlOrigen, header)
    const resOrigen = await dataOrigen.json()
    setOrigenData(resOrigen)

    const urlProcesos = `${urlCelProceso}?code=${lote}`
    const dataProcesos = await fetch(urlProcesos, header)
    const resProcesos = await dataProcesos.json()
    setProcesosData(resProcesos)

    const urlProducto = `${urlCelProducto}?code=${lote}`
    const dataProducto = await fetch(urlProducto, header)
    const resProducto = await dataProducto.json()
    setProductoData(resProducto)

    const urlHashOrigen = `${urlCelOrigenHash}?code=${lote}`
    const hashOrigen = await fetch(urlHashOrigen, header)
    const resHashOrigen = await hashOrigen.json()
    setOrigenHash(resHashOrigen)

    const urlHashProcesos = `${urlCelProcesosHash}?code=${lote}`
    const hashProcesos = await fetch(urlHashProcesos, header)
    const resHashProcesos = await hashProcesos.json()
    setProcesosHash(resHashProcesos)

    const urlHashProducto = `${urlCelProductoHash}?code=${lote}`
    const hashProducto = await fetch(urlHashProducto, header)
    const resHashProducto = await hashProducto.json()
    setProductoHash(resHashProducto)
  }

  return (
    <div className="div-bt-lotes">
        <section id="vista-lotes-cel">
          {lotes.map((lote, index) =>
            <button className="bt-lotes" key={index} onClick={() => searchLoteInfo(lote)}>{lote}</button>)}
          {lotes.length > 0 && <hr />}
        </section>

        <section id="visto-info-lote-cel">
          {productoHash === undefined && <Loading  text={"Cargando"} />}
          <TableCelulosaData origenData={origenData} procesosData={procesosData} productoData={productoData} codigo={currentCode} origenHash={origenHash} productoHash={productoHash} procesosHash={procesosHash}/>
        </section>
    </div>
  )
}

export default ShowCelulosaLotes;