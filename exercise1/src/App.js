//Komponentti josta koko react sovellus käynnistyy
import './App.css';
import HeaderMain from './components/HeaderMain';
import Uutiset from './components/Uutiset'; 
import PaaUutiset from './components/PaaUutiset';
import Luetuimmat from './components/Luetuimmat';
 
function App() {
  //haetaan palvelimelta sisältö
  return (
    <div className = "App">
      <HeaderMain />
      <Uutiset />
      <PaaUutiset />
    </div>
  );
}

 

export default App;
