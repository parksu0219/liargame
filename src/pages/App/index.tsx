import React from "react"
import { Router } from "@reach/router"
import { AuthProvider } from "../../firebase/Auth"
import Main from "../../components/Main"
import SelectPlayer from "../../components/SelectPlayer"
import Header from "../../components/Header";
import GlobalStyle from "../../theme/globalStyles"




function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Router>
        <Main path="/liargame"/>        
        {/* <Header path="/liargame/select/:category" /> */}
        <SelectPlayer path="/liargame/select/:category" />
      </Router>
    </AuthProvider>
  )
}

export default App
