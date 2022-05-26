import { useState } from 'react';
import { urlCelConsultaOrigen, urlCelConsultaProcesos, urlCelConsultaProductos, urlCelOrigenHash, urlCelProcesosHash, urlCelProductoHash   } from '../api/endpoints'
import "../styles/showLotes.css"
import { header} from '../api/fetchHeader'
const ShowCelulosaLotes = (props) => {
 const {lotes } = props
 const [origenData, setOrigenData] = useState([])
 const [procesosData, setProcesosData] = useState([])
 const [productoData, setProductoData] = useState([])
 const [origenHash, setOrigenHash] = useState("")
 const [procesosHash, setProcesosHash] = useState("")
 const [productoHash, setProductoHash] = useState("")
 const searchLoteInfo = async (lote) => {
    const urlOrigen = `${urlCelConsultaOrigen}?code=${lote}`
    const dataOrigen = await fetch(urlOrigen, header)
    const resOrigen = await dataOrigen.json()
    setOrigenData(resOrigen)

    const urlProcesos = `${urlCelConsultaProcesos}?code=${lote}`
    const dataProcesos = await fetch(urlProcesos, header)
    const resProcesos = await dataProcesos.json()
    setProcesosData(resProcesos)

    const urlProducto = `${urlCelConsultaProductos}?code=${lote}`
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
 console.log(origenHash)
 console.log(productoHash)
 console.log(procesosHash)
 console.log(origenData)
 console.log(productoData)
 console.log(procesosData)
return (
    <div className="div-bt-lotes">
        <h3>Lotes registrados</h3>
        {lotes.map((lote, index)=>
        <button className="bt-lotes" key={index} onClick={() => searchLoteInfo(lote)}>{lote}</button>)}
    </div>
)
}

export default ShowCelulosaLotes;