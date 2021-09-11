
import './App.css';
import {Getfile} from './Getfile';
import { Postfile } from './Postfile';

import {
  BrowserRouter as Router,
  Link,Switch,Route
} from "react-router-dom";





function App() {
  return (
    <div >
      
      <Postfile/>
      <Router>
      <button ><Link to='/Getfile.js'> Show List</Link></button>
      <Switch>
        <Route path="/Getfile.js">
        <Getfile/>
        </Route>
      </Switch>

      </Router>
      
    </div>
  );
}

export default App;
