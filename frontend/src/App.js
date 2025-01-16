import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./Components/Login"
import Signup from './Components/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' exact element={<Login/>} />
          <Route path='/signup' element={<Signup/>}/>
          <Route path="/" />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;