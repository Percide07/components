import './App.css'
import Card from './components/Card';
import DataCars from './components/dataCars.js';
function App() {

  return (
    <>
      <Card name={DataCars[0].name} type={DataCars[0].type} gasolineLiter={DataCars[0].gasolineLiter} kindOfTransition={DataCars[0].kindOfTransition} people={DataCars[0].people} pricePerDay={DataCars[0].pricePerDay} img={DataCars[0].img} />
    </>
  )
}
export default App
