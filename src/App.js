import './App.css';
import Login from './screen/Login';
import Signup from './screen/Signup';
import { Routes, Route } from 'react-router-dom';
import { UserAuthContextProvider } from './context/UserAuthContext';
import Home from './screen/Home';
import ProtectedRoute from './components/ProtectedRoute';
import ResetPassword from './screen/ResetPassword';
import Board from './screen/Board';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (

      <div className="App">
        <UserAuthContextProvider>
        <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/resetpassword' element={<ResetPassword />} />
          <Route 
          path='/home' 
          element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>}
          />
          <Route path='/' element={<Board />}/>
        </Routes>
        </UserAuthContextProvider>
      </div>
    
  );
}

export default App;
