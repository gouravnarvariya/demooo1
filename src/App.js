
import './App.css';
import { Route, Routes, useRoutes } from 'react-router-dom';
import Login from './component/login/Login';
import Signup from './component/signup/Signup';
import MainPage from './component/mainpage/MainPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "react-datepicker/dist/react-datepicker.css";
import VerifyOtp from './component/signup/sub-component/VerifyOtp';
function App() {
  const routes = useRoutes([
    {path:'/login' , element:<Login/>},
    {path:'/signup' , element:<Signup/>},
    {path:'/otp' , element:<VerifyOtp/>},

    {
      path:'/*' ,
      element:
      <div>
        <Routes>
          <Route index='/' element=<MainPage/> />
        </Routes>
      </div>
    }

  ])
  return (
  <div>
    {routes}
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
      />
  </div>
  );
}

export default App;
