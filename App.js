import Navbar from './Project/Navbar';
import Home from './Project/Home';
import About from './Project/About';
import Register from './Project/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, Link} from 'react-router-dom';



function App() {
  return (
    <div className="App">
    
        <Navbar/>
        <br/>
        <Routes>
          <Route path='/' element={<Home/>}/>
         
          <Route path='/about' element={<About/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
        <br/><br/>
   

       

    </div>
  );
}

export default App;

