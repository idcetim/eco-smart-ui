import React from "react"
const TextInputFile = (props) => {
    const setValueState = props.setter
    const inputValueHandler = (event) => { setValueState(fileInput.current.files[0]) }
    const fileInput = React.createRef()
    return (
        <div>
            <input className="input-text" type="file"  title=" " ref={fileInput} onChange={inputValueHandler} />
            
        </div>
    )
}

export default TextInputFile;