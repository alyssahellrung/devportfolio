import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";


function App() {
    return (
      <Router basename="/">
        <NavBar />
          <div>
          <Wrapper>
          <Switch>
            <Route exact path="/">
              <About />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
          </Wrapper>
          </div>
        <Footer />
        </Router>
    );
  }



export default App;
