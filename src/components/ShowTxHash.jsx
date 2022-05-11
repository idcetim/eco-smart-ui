const ShowTxHash = (hash) => {
    const txHash = hash.hash
    const fantomExplorer = "https://testnet.ftmscan.com/tx/" + txHash
    return (
       <a href={fantomExplorer}>Ver transacción</a> 
    )
}


export default ShowTxHash;
