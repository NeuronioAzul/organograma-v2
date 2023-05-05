import Colaborador from '../Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba';

const Time = ({time, colaboradores, aoDeletar}) => {
    return (
        <section className='time' style={{ backgroundColor: hexToRgba(time.cor, 0.2) }}>
            <h3 style={{ borderColor: time.corPrimaria }}>
                {time.nome}
            </h3>
            <div className='colaboradores'>
                {colaboradores.map(colaborador => <Colaborador
                    key={colaborador.nome}
                    nome={colaborador.nome}
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                    corDeFundo={time.corPrimaria}
                    aoDeletar={aoDeletar}
                />)}
            </div>
        </section>
    )
}

export default Time
