import './TituloTime.css'
import { BiAddToQueue } from 'react-icons/bi'

const TituloTime = () => {
    return (
        <div className='titulo-time'>
            <BiAddToQueue size={40} className='adicionar' />
            <h2>Times por Cor de Mana:</h2>
            <hr />
        </div>
    )
}

export default TituloTime