import TextInput from "../components/TextInput";
import { useState } from 'react';
import BackHomeButton from '../components/BackHomeButton';

const Consultar = () => {
    const [codigo, setCodigo] = useState("")
    console.log(codigo)
return (
    <div>
        <TextInput codigo="Codigo" func={setCodigo}  />
        <BackHomeButton />
    </div>
    
)
}

export default Consultar;