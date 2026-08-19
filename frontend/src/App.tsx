import WelcomeMessage from './componentes/WelcomeMessage';
import MeusComponentes from './componentes/MeusComponentes';
import TecnologyCard from './componentes/TechnologyCard';

function App() {
  return (
    <main> 
      <h1>devtrack</h1>
      <p>acompanhe sua evolução como desenvolvedora</p>

      <WelcomeMessage />
      <MeusComponentes />
      <TecnologyCard nome="React" descricao="biblioteca para construção de interfaces" idade={5} />
      <TecnologyCard nome="TypeScript" descricao="javascript com tipagem estática" idade={2} />
      <TecnologyCard nome="sla" descricao="num sei" idade={3} />
    </main>
  )
}
export default App
