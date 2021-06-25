import React, {useEffect} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {AnimateSharedLayout} from "framer-motion";

import Loadable from "react-loadable";

const AsyncHome = Loadable({
  loader: () => import("./components/home"),
  loading: () => <div>Loading...</div>
})

const AsyncDisplay = Loadable({
  loader: () => import("./components/display"),
  loading: () => <div>Loading...</div>
})

function App() {
  useEffect(() => {
   AsyncDisplay.preload();
  }, [])

  return ( 
    <AnimateSharedLayout>
          <Router>
              <Route exact path="/" component={AsyncHome} />
              <Route exact path="/display" component={AsyncDisplay} />          
          </Router>
    </AnimateSharedLayout>
  );
}

export default App;