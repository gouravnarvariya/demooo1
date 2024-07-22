
import './App.css';
import { Route, Routes, useRoutes } from 'react-router-dom';
import Login from './component/login/Login';
import Signup from './component/signup/Signup';
import MainPage from './component/mainpage/MainPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "react-datepicker/dist/react-datepicker.css";
import VerifyOtp from './component/signup/sub-component/VerifyOtp';
import ProtectedRoute from './utils/ProtectedRoute';
import NotFound from './utils/NotFound';
import Sidebar from './component/common/Sidebar';
function App() {
  const routes = useRoutes([
    {path:'/login' , element:<Login/>},
    {path:'/signup' , element:<Signup/>},
    {path:'/otp' , element:<VerifyOtp/>},

    {
      path:'/*' ,
      element:
      // <ProtectedRoute>
      <div className='grid-container'>
      <Sidebar/>
        <Routes>
          <Route index='/' element=<MainPage/> />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      //  </ProtectedRoute>
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
