import './App.css'
import Card from './components/Card';
import DataCars from './components/dataCars.js';
function App() {

  return (
    <div className='display'>
      <Card name={DataCars[0].name} type={DataCars[0].type} gasolineLiter={DataCars[0].gasolineLiter} kindOfTransition={DataCars[0].kindOfTransition} people={DataCars[0].people} pricePerDay={DataCars[0].pricePerDay} img={DataCars[0].img} />
      <Card name={DataCars[1].name} type={DataCars[1].type} gasolineLiter={DataCars[1].gasolineLiter} kindOfTransition={DataCars[1].kindOfTransition} people={DataCars[1].people} pricePerDay={DataCars[1].pricePerDay} img={DataCars[1].img} />
      <Card name={DataCars[2].name} type={DataCars[2].type} gasolineLiter={DataCars[2].gasolineLiter} kindOfTransition={DataCars[2].kindOfTransition} people={DataCars[2].people} pricePerDay={DataCars[2].pricePerDay} img={DataCars[2].img} />
      <Card name={DataCars[3].name} type={DataCars[3].type} gasolineLiter={DataCars[3].gasolineLiter} kindOfTransition={DataCars[3].kindOfTransition} people={DataCars[3].people} pricePerDay={DataCars[3].pricePerDay} img={DataCars[3].img} />
      <Card name={DataCars[4].name} type={DataCars[4].type} gasolineLiter={DataCars[4].gasolineLiter} kindOfTransition={DataCars[4].kindOfTransition} people={DataCars[4].people} pricePerDay={DataCars[4].pricePerDay} img={DataCars[4].img} />
      <Card name={DataCars[5].name} type={DataCars[5].type} gasolineLiter={DataCars[5].gasolineLiter} kindOfTransition={DataCars[5].kindOfTransition} people={DataCars[5].people} pricePerDay={DataCars[5].pricePerDay} img={DataCars[5].img} />
      <Card name={DataCars[6].name} type={DataCars[6].type} gasolineLiter={DataCars[6].gasolineLiter} kindOfTransition={DataCars[6].kindOfTransition} people={DataCars[6].people} pricePerDay={DataCars[6].pricePerDay} img={DataCars[6].img} />
      <Card name={DataCars[7].name} type={DataCars[7].type} gasolineLiter={DataCars[7].gasolineLiter} kindOfTransition={DataCars[7].kindOfTransition} people={DataCars[7].people} pricePerDay={DataCars[7].pricePerDay} img={DataCars[7].img} />
    </div>
  )
}
export default App
