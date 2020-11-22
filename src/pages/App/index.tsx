import React, { useMemo } from "react"
import { Router } from "@reach/router"
import { AuthProvider } from "../../firebase/Auth"
import Main from "../../components/Main"
import SelectPlayer from "../../components/SelectPlayer"
import Header from "../../components/Header"
import { lightTheme, darkTheme } from "../../theme/theme"
import GlobalStyle from "../../theme/globalStyles"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import useSetting from "../../hooks/Setting"
// createMuiTheme custom props type
declare module "@material-ui/core/styles/createMuiTheme" {
  interface ThemeOptions {
    [key: string]: any
  }
}

function App() {
  const { isDarkMode } = useSetting()
  const themeMode = isDarkMode ? "dark" : "light"
  themeMode
  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: isDarkMode ? "dark" : "light",
        },
        themeMode: isDarkMode ? darkTheme : lightTheme,
      }),
    [isDarkMode]
  )

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle theme={isDarkMode ? darkTheme : lightTheme} />
        <Router>
          <Main path="/liargame" />
          <SelectPlayer path="/liargame/select/:category">
            <Header path="/liargame/select/:category" />
          </SelectPlayer>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
