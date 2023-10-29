import Login from './components/Login/Login';
import Homepage from './components/Homepage/Homepage';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register/Register';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='' element={<Homepage />} />
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
