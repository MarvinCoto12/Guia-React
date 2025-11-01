import "./App.css"
import { DeportesFav, Nota } from "./components"

const App = () => {

  return (
    <>
      <h2>Marvin Alexander Coto Hernandez</h2>
      <p>La cálida brisa siempre será mi amiga</p>

      <h2>Mis Deportes Favoritos Son:</h2>
      <DeportesFav Deportes={["Baloncesto", "Futbol", "Basquetbol", "Voleibol", "Beisbol"]} />

      <div>
        <h2>Resultado de Notas</h2>
        <Nota nota={5.5} />
        <Nota nota={8.2} />
        <Nota nota={15} />
      </div>
    </>
  )
}

export default App
