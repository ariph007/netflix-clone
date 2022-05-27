import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'
import { AuthContextProvide } from './context/AuthContext.js';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import Account from './pages/Account.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx';


function App() {
  return (
    <>
      <AuthContextProvide>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/account' element={<ProtectedRoute><Account /> </ProtectedRoute>} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </AuthContextProvide>
    </>
  );
}

export default App;
