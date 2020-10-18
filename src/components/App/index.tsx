import React from "react"
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { Router } from "@reach/router"
import Main from "../Main"
import SelectPlayer from "../SelectPlayer"
import { AuthProvider } from "../../firebase/Auth"
import GlobalStyle from "../../theme/globalStyles"

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Router>
        <Main path="/liargame"/>        
        <SelectPlayer path="/liargame/select/" />
      </Router>
    </AuthProvider>
  )
}

export default App
