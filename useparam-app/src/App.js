
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Student from './Components/Student';
import StudentView from './Components/StudentView';
import StudentUpDate from './Components/StudentUpDate';
import Header from './Components/Header';
function App() {
  return (
    <BrowserRouter >
      <Header />
      <Routes>
        <Route path='/' element={<Student />} />
        <Route path='/view' element={<StudentView />} />
        <Route path='/updata/:eid' element={<StudentUpDate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
