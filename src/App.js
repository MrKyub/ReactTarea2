import TarjetaItem from "./components/TarjetaItem";
import TarjetasList from "./components/TarjetasList";
import zombie from './img/zombieMinecraft.jpg';
import esqueleto from './img/esqueletoMinecraft.jpg';
import pollo from './img/polloMinecraft.jpg';

function App() {
  return (
    <div className="App">
      <TarjetasList>

        <TarjetaItem url = {zombie} descripcion = "Este es un zombi de minecraft" 
        texto = "El zombie uno de los enemigos mas comines que se pueden encontrar en el mundo de Minecraft pero no te dejes engañar una holeada de estos seres podria terminar rapido con tu vida, y CORRE!! si ve a los zombies enanos"/>
        <TarjetaItem url = {esqueleto} descripcion = "Este es un esqueleto de minecraft" texto = "El Esqueleto un enemigo inteligente que utiliza un arco y el siguiloso para atacarte, asegurate de siempre tener tu escudo cuando escuches un esqueleto"/>
        <TarjetaItem url = {pollo} descripcion = "Este es un pollo de minecraft" texto = "El malvado Pollo, su simple presencia infunde terror a los jugadores solo mira sus obscuros y profundos ojos, imaginar lo que este ser puede estar pensando es simplemente inimaginable para el jugador"/>

      </TarjetasList>

    </div>
  );
}

export default App;
