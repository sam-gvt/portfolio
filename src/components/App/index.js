import '../../App.css';
import FirstPage from '../FirstPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorPage from '../ErrorPage';
import Contact from '../Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
            <Route path='/' element={ <FirstPage /> }/>
            <Route path='/contact' element={ <Contact/> }/>
            <Route path='*' element={ <ErrorPage/> }/>
      </Routes>
      
      </BrowserRouter>
     
    </div>


  );
}

export default App;
