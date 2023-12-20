import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import monoplegia from "./pages/monoplegia";
import Paraplegia from "./pages/Paraplegia";
import Diplegia from "./pages/Diplegia";
import Hemiplegia from "./pages/Hemiplegia";
import Quadriplegia from "./pages/Quadriplegia";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/treatment/monoplegia" exact component={monoplegia} />
          <Route path="/treatment/paraplegia" exact component={Paraplegia} />
          <Route path="/treatment/diplegia" exact component={Diplegia} />
          <Route path="/treatment/quadriplegia" exact component={Quadriplegia} />
          <Route path="/treatment/hemiplegia" exact component={Hemiplegia} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
