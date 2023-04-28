import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserRegistrationForm from './pages/Userregisteration';
import LoginForm from './pages/Userlogin';
import BrokerRegistrationForm from './pages/Brokerregisteration';
import BrokerLoginForm from './pages/Brokerlogin';
import Final from './pages/dashboard';
import Update from './pages/Updatepassword';
import AllUsers from './pages/new';
import Leader from './pages/userleadershipboard';
import Brokerleaders from './pages/brokerleadership';
import Sidebar from './pages/sidebar';
import AdminLogin from './pages/adminLogin';
import AdminUpdate from './pages/adminUpdate';
import PriceChange from './pages/priceChange';
import Landtypedetail from './pages/landtypedetail';
import CreateAdmin from './pages/createAdmin';
import Showdata from './pages/Showdataa';
import AddLand from './pages/addland';
import ErrorPage from './pages/404';
import Showland from './pages/showland';
import Market from './pages/marketplace';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route> 
         <Route index element = {<App/>}/>
         <Route  path = "Userregisteration" element={<UserRegistrationForm/>}/>
         <Route  path = "Brokerregisteration"  element={<BrokerRegistrationForm/>}/>
         <Route path = "Brokerlogin" element={<BrokerLoginForm/>}/>
         <Route path= "Userlogin" element={<LoginForm/>}/>
         <Route path= "dashboard" element={<Final/>}/>
         <Route  path= "Updatepassword" element={<Update/>}/>
         <Route path = "new"  element={<AllUsers/>}/>
         <Route path = "userleadershipboard" element={<Leader/>}/>
         <Route path = "brokerleadership" element={<Brokerleaders/>}/>
         <Route path = "sidebar" element={<Sidebar/>}/>
         <Route path = "adminLogin" element={<AdminLogin/>}/>
         <Route path = "adminUpdate" element={<AdminUpdate/>}/>
         <Route path = "priceChange" element={<PriceChange/>}/>
         <Route path = "createAdmin" element={<CreateAdmin/>}/>
         <Route path = "showdataa" element={<Showdata/>}/>
         <Route path = "addland"   element={<AddLand/>}/>
        <Route path = "errorPage"   element={<ErrorPage/>}/>
        <Route path = "landtypedetail" element={<Landtypedetail/>}/>
        <Route path = "showland" element={<Showland/>}/>
        <Route path = "marketplace" element={<Market/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
)