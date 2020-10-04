import React, { useEffect, useState } from "react";
import { remoteConfig } from "../../firebase";
import Loader from "../../components/Loader"

export type ContextProps = {
  word: [];
  version: string;
  pending: boolean;
  fetchRemoteConfig: () => void;
};

export type Data = [];

export const AuthContext = React.createContext<Partial<ContextProps>>({});

/**
 * login時、user情報を保存
 */
export const AuthProvider = ({ children }) => {
  const [wordData, setWordData] = useState<Data>([]);
  const [version, setVersion] = useState<string>('');
  const [pending, setPending] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  function fetchRemoteConfig () {
    remoteConfig.fetchAndActivate().then(() => {
      const configData = remoteConfig.getValue("words").asString();
      const wordsVersion = remoteConfig.getValue("words_version").asString();

      setVersion(wordsVersion);
      setWordData(JSON.parse(configData));
      setPending(false);
      console.log('단어 수정');
    }).catch((err) => {
      setError(true);
      console.error(err);
    });
  }


  useEffect(() => {
    fetchRemoteConfig();
  }, []);

  if(pending || error){
    return <Loader />
  }

  return (
    <AuthContext.Provider
      value={{
        word: wordData || [],
        version,
        pending,
        fetchRemoteConfig
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};