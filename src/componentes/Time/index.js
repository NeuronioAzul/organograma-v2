import Colaborador from '../Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba';

const Time = ({ time, colaboradores, aoDeletar, mudarCor }) => {
    return (
        <section className='time' style={{ backgroundColor: hexToRgba(time.cor, 0.2) }}>
            <input
                onChange={evento => mudarCor(evento.target.value, time.nome)}
                value={time.cor}
                type='color'
                className='input-cor'
            />
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
