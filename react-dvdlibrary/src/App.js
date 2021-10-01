import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch , Route, Link } from "react-router-dom";

import Library from './components/Library';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <div className="App">
          <Route path="/Library" component={Library} />
          <Route path="/Form" component={Form} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
