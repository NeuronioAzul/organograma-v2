import './Campo.css'

const Campo = ({type='text', placeholder, aoAlterado, label, valor, required}) => {

    const placeholderModificada = `${placeholder}...`

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className={`campo campo-${type}`}>
            <label>
                {label}
            </label>
            <input
                type={type}
                value={valor}
                onChange={aoDigitado}
                required={required}
                placeholder={placeholderModificada}
            />
        </div>
    )
}

export default Campo