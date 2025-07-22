//Import other REACT Components
import Header from './my-components/Header';
import Navbar from './my-components/Navbar';
import Main from './my-components/Main';
import Footer from './my-components/Footer';
import React from 'react';
import {HashRouter as HashRouter, Routes, Route } from 'react-router-dom';
import EmployeeManager from './my-components/employees-manager/EmployeeManager';
import EmployeeCreate from './my-components/employees-manager/EmployeeCreate';
import EmployeeDetail from './my-components/employees-manager/EmployeeDetail';
import EmployeeEdit from './my-components/employees-manager/EmployeeEdit';

function App() {  
  //UI
  return (
    <>
      <HashRouter>
        <div className="App">
            <Header />       

            <Routes>
              <Route path="/" 
                     element={
                      <React.Fragment>
                        <Navbar />  
                        <h1>THIS IS HOME PAGE</h1>   
                        <Main />                   
                      </React.Fragment>
                     }
              />

               <Route path="/employee-manager" 
                     element={
                      <>
                        <Navbar />
                        <h1>THIS IS Employee Manager</h1>
                        <EmployeeManager />
                      </>
                     }
              />   

               <Route path="/employee/create" 
                     element={
                      <>
                        <Navbar />
                        <h1>Create a New Employee</h1>
                        <EmployeeCreate />
                      </>
                     }
              />  

               <Route path="/employee/detail/:employeeID" 
                     element={
                      <>
                        <Navbar />
                        <h1>Employee Detail: </h1>
                        <EmployeeDetail />
                      </>
                     }
              />  

               <Route path="/employee/edit/:employeeID" 
                     element={
                      <>
                        <Navbar />
                        <h1>Edit Employee:</h1>
                        <EmployeeEdit />
                      </>
                     }
              />  

               <Route path="/contact-us" 
                     element={
                      <React.Fragment>
                        <Navbar />
                        <h1>THIS IS CONTACT US PAGE</h1>
                      </React.Fragment>
                     }
              />  
            </Routes>    

            <Footer />
            
        </div>
      </HashRouter>    
    </>
  )
}
export default App;
