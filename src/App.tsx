
import DataTable from './components/DataTable';
import UserForm from './components/UserForm';
import {BrowserRouter as Router ,Route ,Routes ,Navigate} from 'react-router-dom';
import Accordian from './components/Accordian';
import { RouteConfig } from './interfaces/RouteConfig';
import React from 'react';

const routeConfig:RouteConfig[]=[
  {path:'/', component:UserForm,exact:true},
  {path:'/table',component:DataTable},
  {path:'/accordian',component:Accordian},
];

const App :React.FC=() => {
  return (

    
      <Routes>
        {routeConfig.map((route,index)=>(
          <Route  key={index}
          path={route.path}
          element={<route.component/>}
          caseSensitive={route.exact??false}/>
        ))}
        <Route path ="*" element={<Navigate to='/'replace/>}/>
      </Routes>
    

  )
}

export default App
