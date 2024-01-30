import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Employee from './Components/Employee';
import EmployeeView from './Components/EmployeeView';
import 'bootstrap/dist/css/bootstrap.min.css';
import Updata from './Components/Updata';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Employee />}></Route>
          <Route path='/view' element={<EmployeeView />}></Route>
          <Route path='/updata' element={<Updata />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
