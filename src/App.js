import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
    <div>
      <NavBar />
      <Wrapper>
      <Switch>
        <Route exact path="/">
          <Home />
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


    // <Router>
    //   <div>
    //     <NavBar />
    //     <Wrapper>
    //       <Route exact path="/" component={Home} />
    //       <Route exact path="/about" component={About} />
    //       <Route exact path="/portfolio" component={Portfolio} />
    //       <Route exact path="/contact" component={Contact} />
    //     </Wrapper>
    //     <Footer />
    //   </div>
    // </Router>
  );
}



export default App;
