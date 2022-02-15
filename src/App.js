import React from 'react'
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Login from './components/Login';
import RandomRecipe from './components/RandomRecipe';
import Dashboard from './components/Dashboard';
import ErrorPage from './components/ErrorPage';
// import SelectedRecipe from './components/SelectedRecipe';
import ProtectedRoutes from './components/ProtectedRoutes';
// import SelectedProduct from './Components/SelectedProduct';
// import ProtectRoute from './ProtectedRoute/ProtectRoute';


function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/"  element={<RandomRecipe/>} />
    <Route path='/login'  element={<Login/>} />
    <Route path="*" element={<ErrorPage />} />
    <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
    {/* <Route element={<ProtectRoute/>}> */}
    {/* <Route path='/dashboard'  element={<SelectedProduct/>} /> */}
    {/* </Route> */}
   
    </Routes>  
    </div>
  );
}
export default App;
