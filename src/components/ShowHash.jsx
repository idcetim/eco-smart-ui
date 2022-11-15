
import '../styles/showHash.css'

export const ShowHash = ({ txHash }) => {
  const fantomExplorer = `https://testnet.ftmscan.com/tx/${txHash}`
  return (
    <div className='div-showTxHash'>
     <span className='span-hashTx'> ✅ Completado: <a className='hash-link' href={fantomExplorer} target="_blank" rel="noreferrer">Ver transacción</a> </span>
    </div>

  )
}