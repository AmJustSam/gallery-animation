import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {motion, AnimateSharedLayout} from "framer-motion";

import Home from "./components/home";
import Display from "./components/display";

function App() {
  return (
    <AnimateSharedLayout>
          <Router>
              <Route exact path="/" component={Home} />
              <Route exact path="/display" component={Display} />          
          </Router>
    </AnimateSharedLayout>
  );
}

export default App;