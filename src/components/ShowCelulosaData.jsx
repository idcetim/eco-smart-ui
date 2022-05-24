import "../styles/tables.css"

const ShowCelulosaData = (props) => {
 const origenData = props.origenData
 const procesosData = props.procesosData
 const productoData = props.productoData
 const codigo = props.codigo
 console.log(origenData)
 console.log(procesosData)
 console.log(productoData)
    return (
       Object.keys(productoData).length!== 0 && <div>
       <div className="div-title">
        <span className="span-title">Información sobre el lote <span className="span-title-green">{codigo}</span> </span>
        </div> 

        <table className="table-celulosa">
        <tr>
           
            <th>Características</th>
            <th>Valores</th>
        </tr>
        <tr>
            
            <td>Celulosa (%)</td>
            <td>{origenData[0]}</td>
         </tr>
        <tr>
           
            <td>Hemicelulosa (%)</td>
            <td>{origenData[1]}</td>
        </tr>
        <tr>
            
            <td>Lignina (%)</td>
            <td>{origenData[2]}</td>
        </tr>
        <tr>
            
            <td>Origen</td>
            <td>{origenData[3]}</td>
        </tr>
        <tr>
            
            <td>Pretratamiento mecánico</td>
            <td>{procesosData[0]}</td>
         </tr>
        <tr>
            
            <td>Pretratamiento químico</td>
            <td>{procesosData[1]}</td>
        </tr>
        <tr>
            
            <td>Pretratamiento enzimático</td>
            <td>{procesosData[2]}</td>
        </tr>
        <tr>
           
            <td>Homogenización</td>
            <td>{procesosData[3]}</td>
        </tr>
        <tr>
           
            <td>Conductividad iónica</td>
            <td>{productoData[0]}</td>
         </tr>
        <tr>
            
            <td>Ancho medio partícula</td>
            <td>{productoData[1]}</td>
        </tr>
        <tr>
          
            <td>Formato nanocelulosa</td>
            <td>{productoData[2]}</td>
        </tr>
        <tr>
        
            <td>Porcensaje en suspensión</td>
            <td>{productoData[3]}</td>
        </tr>
        </table>
        </div>
    )
}


export default ShowCelulosaData;