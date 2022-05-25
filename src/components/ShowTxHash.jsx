const ShowTxHash = (props) => {
    const txHash = props.hash
    const text = props.text
    const fantomExplorer = "https://testnet.ftmscan.com/tx/" + txHash
    return (
       <a href={fantomExplorer}>{text}</a> 
    )
}


export default ShowTxHash;
