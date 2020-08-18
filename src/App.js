import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Signin from './Components/auth/Signin';
import Signup from './Components/auth/Signup';
import Dash from './Components/dashboard/Dash';
import NavBar from './Components/layout/NavBar';
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"


function App() {
  return (

<BrowserRouter>

    <ToastContainer/>
    <NavBar/>

    <Switch>
      
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/"  component={Dash} />
    </Switch>


     
</BrowserRouter>



  );
}

export default App;
