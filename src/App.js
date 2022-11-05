
import './App.css';
import Contact from './Contact';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Links from './Links';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Links/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
