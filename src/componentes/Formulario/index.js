import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import './Formulario.css'

const Formulario = ({ aoColaboradorCadastrado, times, cadastrarTime, exibir }) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [cor, setCor] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario-container" style={{ display: `${exibir ? 'flex' : 'none'}` }}>
            <form className="formulario" onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Campo
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <Campo
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <Campo
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Times"
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>Criar Card</Botao>
            </form>
            <form
                className='formulario'
                onSubmit={
                    (evento) => {
                        evento.preventDefault()
                        cadastrarTime({ nome: nomeTime, cor: cor })
                    }
                }
            >
                <h2>Preencha os dados para criar um novo Time</h2>
                <Campo
                    obrigatorio
                    label="Nome"
                    placeholder="Digite o nome do time"
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <Campo
                    obrigatorio
                    type="color"
                    label="Cor"
                    placeholder="Digite a cor do timeo"
                    valor={cor}
                    aoAlterado={valor => setCor(valor)}
                />
                <Botao>Criar um novo time</Botao>
            </form>
        </section>
    )
}

export default Formulario
