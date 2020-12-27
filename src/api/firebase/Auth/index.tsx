import React, { useEffect, useState } from "react"
import firebase from "gatsby-plugin-firebase"
import "firebase/remote-config"
import Loader from "../../../components/Loader"

export type ContextProps = {
  word: []
  version: string
  pending: boolean
  fetchRemoteConfig: () => void
}

export type Data = []

export const AuthContext = React.createContext<Partial<ContextProps>>({})

/**
 * login時、user情報を保存
 */
export function AuthProvider({ children }) {
  const [wordData, setWordData] = useState<Data>([])
  const [version, setVersion] = useState<string>("")
  const [pending, setPending] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  function fetchRemoteConfig() {
    const remoteConfig = firebase.remoteConfig()
    firebase.analytics()

    remoteConfig.settings.minimumFetchIntervalMillis = 3600000

    remoteConfig
      .fetchAndActivate()
      .then(() => {
        const configData = remoteConfig.getValue("words").asString()
        const wordsVersion = remoteConfig.getValue("words_version").asString()

        setVersion(wordsVersion)
        setWordData(JSON.parse(configData))
        setPending(false)
      })
      .catch(err => {
        setError(true)
        console.error(err)
      })
  }

  useEffect(() => {
    fetchRemoteConfig()
  }, [])

  if (pending || error) {
    return <Loader />
  }

  return (
    <AuthContext.Provider
      value={{
        word: wordData || [],
        version,
        pending,
        fetchRemoteConfig,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
