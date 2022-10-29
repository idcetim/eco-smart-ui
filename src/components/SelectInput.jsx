const SelectInput = (props) => {
    const options = props.options
    const setValueState = props.setter
    const optionValueHandler = (event) => { setValueState(event.target.value) }
    return (
        <div>
            <select onChange={optionValueHandler}>
                {options.map((op, index) => { return (
                  <option value={op} disabled={index ===0 ? true : false} selected ={index ===0 ? true : false}  key={index}>{op}</option> 
                )})
            }
            </select>
        </div>
    )
}
export default SelectInput;