import { useNavigate } from "react-router-dom"

import "../styles/global.css"

const BackCelButton = () => {
    const navigate = useNavigate()
    const backCelHandler = () => {
        navigate('/celulosa/')
    }
    return (
        <button className="button-back-cel" onClick={backCelHandler}>Nanocelulosa🌳</button>
    )
    
}

export default BackCelButton;