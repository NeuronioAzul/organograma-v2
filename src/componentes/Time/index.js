import Colaborador from '../Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba';

const Time = ({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar }) => {
    return (
        colaboradores.length > 0 &&
        <section className='time' style={{ backgroundColor: hexToRgba(time.cor, 0.2) }}>
            <input
                onChange={evento => mudarCor(evento.target.value, time.nome)}
                value={time.cor}
                type='color'
                className='input-cor'
            />
            <h3>
                {time.nome}
            </h3>
            <hr style={{ border: `2px solid ${time.cor}`, width: '50px' }} />
            <div className='colaboradores'>
                {
                    colaboradores.map(
                        (colaborador, indice) => (
                            <Colaborador
                                key={indice}
                                colaborador={colaborador}
                                corDeFundo={time.cor}
                                aoDeletar={aoDeletar}
                                aoFavoritar={aoFavoritar}
                            />
                        )
                    )
                }
            </div>
        </section>
    )
}

export default Time
