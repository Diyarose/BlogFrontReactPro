import logo from './logo.svg';
import './App.css';
import BlogLogin from './components/BlogLogin';
import BlogSign from './components/BlogSign';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<BlogLogin/>}/>
    <Route path='/signin' element={<BlogSign/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
