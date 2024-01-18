
import Car from './Components/Car';
import Fruits from './Components/Fruits ';
import './index.css'

function App() {
  let fruits = {
    Name: 'Mango',
    Color: 'Yellow'
  }

  return (
    <>
      <Fruits fruits={fruits} />
      <Car />
    </>
  );
}

export default App;
