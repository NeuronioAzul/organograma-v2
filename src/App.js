import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const times = [
    {
      nome: 'Azul',
      corPrimaria: '#1c92c9',
      corSecundaria: '#c8ebff',
    },
    {
      nome: 'Branco',
      corPrimaria: '#ffcb65',
      corSecundaria: '#fff4e6',
    },
    {
      nome: 'Incolor',
      corPrimaria: '#cccccc',
      corSecundaria: '#eeeeee',
    },
    {
      nome: 'Verde',
      corPrimaria: '#1cc940',
      corSecundaria: '#a6ffd1',
    },
    {
      nome: 'Vermelho',
      corPrimaria: '#ff6600',
      corSecundaria: '#ffbcb2'
    },
    {
      nome: 'Preto',
      corPrimaria: '#1d1d1d',
      corSecundaria: '#515b59',
    }
  ]

  const [colaboradores, setColaborador] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaborador([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadstrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {
        times.map(
          time => (
            <Time
              key={time.nome}
              nome={time.nome}
              corPrimaria={time.corPrimaria}
              corSecundaria={time.corSecundaria}
              colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            />
          )
        )
      }
      <Rodape />
    </div>
  );
}

export default App;
