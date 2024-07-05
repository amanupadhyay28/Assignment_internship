
import DataTable from './components/DataTable';
import UserForm from './components/UserForm';
import { Route ,Routes ,Navigate} from 'react-router-dom';
import Accordian from './components/Accordian';
import { RouteConfig } from './interfaces/RouteConfig';
import Logout from './components/Logout';
import React from 'react';
import { useLocalStorage} from './context/LocalStorageContext';
const routeConfig:RouteConfig[]=[
  {path:'/', component:UserForm,exact:true},
  {path:'/table',component:DataTable},
  {path:'/accordian',component:Accordian},
  {path:'/logout',component:Logout}
];

const App :React.FC=() => {
  const userDetails = localStorage.getItem('userDetails');
  console.log('userDetails' ,userDetails);
const {isAuthenticated} =useLocalStorage();

  return (

    <Routes>
    {routeConfig.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        element={
          route.path === '/table' && !isAuthenticated? (
            <>
              <Navigate to="/" replace state={{ message: 'Please fill out the form first.To access Second Page' }} />
               
            </>
          ) : (
            <route.component />
          )
        }
        caseSensitive={route.exact ?? false}
      />
    ))}
    
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>


  )
}

export default App
