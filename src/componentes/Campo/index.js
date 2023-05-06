import './Campo.css'

const Campo = (props) => {

    const placeholderModificada = `${props.placeholder}...`

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo">
            <label>
                {props.label}
            </label>
            <input
            type="text"
                value={props.valor}
                onChange={aoDigitado}
                required={props.required}
                placeholder={placeholderModificada}
            />
        </div>
    )
}

export default Campo