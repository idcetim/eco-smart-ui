import TextInput from '../../components/TextInput'
import { useState } from 'react';
import BackHomeButton from '../../components/BackHomeButton';
import BackCelButton from '../../components/BackCelButton';
import ShowCelulosaData from '../../components/ShowCelulosaData';
import ShowTxHash from '../../components/ShowTxHash';
import { urlCelConsultaOrigen, urlCelConsultaProcesos, urlCelConsultaProductos, urlCelOrigenHash, urlCelProcesosHash, urlCelProductoHash   } from '../../api/endpoints'
import { header} from '../../api/fetchHeader'

import "../../styles/global.css"
import "../../styles/TextInput.css"


const ConsultarCelulosa = () => {
    const [codigo, setCodigo] = useState("")
    const [origenData, setOrigenData] = useState([])
    const [procesosData, setProcesosData] = useState([])
    const [productoData, setProductoData] = useState([])
    const [origenHash, setOrigenHash] = useState("")
    const [procesosHash, setProcesosHash] = useState("")
    const [productoHash, setProductoHash] = useState("")

    const consultarHandler = async () => {
        const urlOrigen = `${urlCelConsultaOrigen}?code=${codigo}`
		const dataOrigen = await fetch(urlOrigen, header)
		const resOrigen = await dataOrigen.json()
        setOrigenData(resOrigen)

        const urlProcesos = `${urlCelConsultaProcesos}?code=${codigo}`
		const dataProcesos = await fetch(urlProcesos, header)
		const resProcesos = await dataProcesos.json()
        setProcesosData(resProcesos)

        const urlProducto = `${urlCelConsultaProductos}?code=${codigo}`
		const dataProducto = await fetch(urlProducto, header)
		const resProducto = await dataProducto.json()
        setProductoData(resProducto)

        const urlHashOrigen = `${urlCelOrigenHash}?code=${codigo}`
		const hashOrigen = await fetch(urlHashOrigen, header)
		const resHashOrigen = await hashOrigen.json()
        setOrigenHash(resHashOrigen)

        const urlHashProcesos = `${urlCelProcesosHash}?code=${codigo}`
		const hashProcesos = await fetch(urlHashProcesos, header)
		const resHashProcesos = await hashProcesos.json()
        setProcesosHash(resHashProcesos)

        const urlHashProducto = `${urlCelProductoHash}?code=${codigo}`
		const hashProducto = await fetch(urlHashProducto, header)
		const resHashProducto = await hashProducto.json()
        setProductoHash(resHashProducto)
    }
   
    console.log(origenHash)
    console.log(productoHash)
    console.log(procesosHash)
    
return (
    <div className='web-wrapper'>
        <h3>Consultar información sobre nanocelulosa</h3>
        <TextInput codigo="Codigo" func={setCodigo}  />
        <button className='button-registrar' onClick={consultarHandler} disabled={!codigo}>Consultar lote {codigo}🔎</button>
        {origenHash.length>0 && procesosHash.length>0 && productoHash.length >0 ? 
        <ShowCelulosaData origenData={origenData} procesosData={procesosData} productoData={productoData} codigo={codigo}/> :
        (codigo !== "" && <h4>No hay información disponible para ese lote</h4> )
    }
     <div className='div-blockchain-info'>
        {origenHash!== "" &&  <span className="span-title"> Información blockchain del lote <span className="span-title-green">{codigo}</span></span> }
        {origenHash!== "" &&  <ShowTxHash hash={origenHash} text={"Transacción origen"}/> }
        {procesosHash!== "" && <ShowTxHash hash={procesosHash} text={"Transacción procesos"} /> }
        {productoHash!== "" && <ShowTxHash hash={productoHash} text={"Transacción producto"} /> }
    </div>
 
        <div className='div-button-back'>
                <BackHomeButton />
                <BackCelButton />
            </div>
    </div>
    
)
}

export default ConsultarCelulosa;