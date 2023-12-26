import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Routes>
          {/* <div> */}

          {/* <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/contact' component={Contact} /> */}
          {/* <Route path='' Component={} />
          <Route path='/home' Component={Header} /> */}
          <Route path='' Component={Home} />
          {/* </div> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
