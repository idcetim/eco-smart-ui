import "../styles/tables.css"

const ShowCelulosaData = (props) => {
 const origenData = props.origenData
 const procesosData = props.procesosData
 const productoData = props.productoData
 const codigo = props.codigo

 let mec, enz, qui, homo;
 
 if(procesosData[0] === '1') mec= 'Realizado'
 else mec = ''
 if(procesosData[1] === '1') enz= 'Realizado'
 else enz = ''
 if(procesosData[2] === '1') qui= 'Realizado'
 else qui = ''
 if(procesosData[3] === '1') homo= 'Realizado'
 else homo = ''
 

    return (
       Object.keys(productoData).length!== 0 && <div>
       <div className="div-title">
        <span className="span-title">Información de producto del lote <span className="span-title-green">{codigo}</span> </span>
        </div> 

        <table className="table-celulosa">
           <thead>
        <tr>
            <th>Características</th>
            <th>Datos</th>
        </tr>
        </thead> 
        <tbody>
            <tr>
                <td>Celulosa (%)</td>
                {origenData[0] !== "" ? <td>{origenData[0]}%</td>: <td></td> }  
            </tr>
            <tr>
                <td>Hemicelulosa (%)</td>
                {origenData[1] !== "" ? <td>{origenData[1]}%</td>: <td></td> }  
            </tr>
            <tr>
                <td>Lignina (%)</td>
                {origenData[2] !== "" ? <td>{origenData[2]}%</td>: <td></td> }  
            </tr>
            <tr>
                <td>Origen</td>
                 {origenData[3] !== "" ? <td>{origenData[3]}</td>: <td></td>}   
            </tr>
            <tr>
                <td>Pretratamiento mecánico</td>
                <td>{mec}</td>
            </tr>
            <tr>
                <td>Pretratamiento químico</td>
                <td>{qui}</td>
            </tr>
            <tr>
                
                <td>Pretratamiento enzimático</td>
                <td>{enz}</td>
            </tr>
            <tr>
                <td>Homogenización</td>
                <td>{homo}</td>
            </tr>
            <tr>
                <td>Conductividad iónica</td>
                <td>{productoData[0]}</td>
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
                {productoData !== "" ? <td>{productoData[3]}%</td> : <td></td>} 
            </tr>
        </tbody>
        </table>
        </div>
    )
}


export default ShowCelulosaData;