import logo from "./logo.svg";
import "./App.css";
import Hello from "./screens/Hello";
import Ecommercecard from "./screens/Ecommercecard";
import Loginpage from "./screens/Loginpage";
import { Container } from "@material-ui/core";
import Register from "./screens/Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Helloworld } from "./screens/Helloworld";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/reg">
           <Helloworld/>
          </Route>
          <Register />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
