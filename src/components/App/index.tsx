import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from "../Main";
import SelectPlayer from "../SelectPlayer";
import { AuthProvider } from "../../firebase/Auth";
import GlobalStyle from "../../theme/globalStyles";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <GlobalStyle />
          <Route exact path="/" component={Main} />
          <Route exact={true} path="/select/:category" component={SelectPlayer}/>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;