import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const [times, setTimes] = useState([
    {
      nome: 'Azul',
      cor: '#c8ebff',
    },
    {
      nome: 'Branco',
      cor: '#fff4e6',
    },
    {
      nome: 'Incolor',
      cor: '#eeeeee',
    },
    {
      nome: 'Verde',
      cor: '#a6ffd1',
    },
    {
      nome: 'Vermelho',
      cor: '#ffbcb2'
    },
    {
      nome: 'Preto',
      cor: '#515b59',
    }
  ])

  const [colaboradores, setColaborador] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaborador([...colaboradores, colaborador])
  }

  const deletarColaborador = () => {
    console.log("Colaborador excluido")
  }

  const mudarCorDoTime = (cor, nome) => {
    setTimes(times.map(time => {
      if (time.nome === nome) {
        time.cor = cor
      }
      return time
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map(time => time.nome)}
        aoColaboradorCadstrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />
      {
        times.map(
          (time, indice) => (
            <Time
              mudarCor={mudarCorDoTime}
              key={indice}
              time={time}
              colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
              aoDeletar={deletarColaborador}
            />
          )
        )
      }
      <Rodape />
    </div>
  );
}

export default App;
