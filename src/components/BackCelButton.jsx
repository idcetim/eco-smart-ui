import { useNavigate } from "react-router-dom"

import "../styles/global.css"

const BackCelButton = () => {
    const navigate = useNavigate()
    const backCelHandler = () => {
        navigate('/celulosa/')
    }
    return (
        <div className='div-button-back'>
        <button className="button-back" onClick={backCelHandler}> Atrás</button>
        </div>
    )
    
}

export default BackCelButton;