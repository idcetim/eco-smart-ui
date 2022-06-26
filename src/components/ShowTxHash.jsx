import '../styles/showHash.css'
const ShowTxHash = (props) => {
    const txHash = props.hash
    const text = props.text
    const fantomExplorer = "https://testnet.ftmscan.com/tx/" + txHash

   
    return (
    <div className='div-showTxHash'>
      <span className='span-hashTx'> ✅ Registro completado:</span>   
      <a className='hash-link' href={fantomExplorer} target="_blank" rel="noreferrer">{text}</a> 
    </div>
    )
}


export default ShowTxHash;
