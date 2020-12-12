
import Navbar from './layout/Navbar';
import Users from './components/Users';
import './App.css';
import { UserProvider } from './context';
import AddUser from './forms/AddUser';
import NotFound from './pages/NotFound';
import UpdateUser from "./forms/UpdateUser.js";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


function App() {
  
  return <UserProvider> (
    
      <Router>
    <div className="container">
      <Navbar title="User App"/>
      <hr/>
      <Switch>

      <Route exact path = "/" component = {Users} />
      <Route exact path = "/Add" component ={AddUser} />
      <Route exact path = "/edit/:id" component = {UpdateUser} />
      <Route component ={NotFound} />

      </Switch>
    </div>
    </Router>
   
  );
  </UserProvider>
}

export default App;
