import { useNavigate } from "react-router-dom";
import BackHomeButton from '../components/BackHomeButton';

const HomeCelulosa = () => {
    const navigate = useNavigate();
    const origenHandler = () => {navigate('/celulosa/origen/')}
    const procesosHandler = () => {navigate('/celulosa/procesos/')}
    const productoHandler = () => {navigate('/celulosa/producto/')}

    return(
        <div>
        <button onClick={origenHandler}>Materia primas</button>
        <button onClick={procesosHandler}>Procesos</button>
        <button onClick={productoHandler}>Producto final</button>
        <BackHomeButton />
        </div>
    )
  
}

export default HomeCelulosa;