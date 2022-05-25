import React, {createContext, useContext, useState, useEffect} from 'react'

const AppContext = createContext(null);


function AppProvider({children}) {

    var [podaci, setPodaci] = useState([]);

    useEffect(() => {
        fetch("http://localhost:7000/districts")
          .then((response) => {
            if (!response.ok) {
              throw Error("Nešto nije u redu.");
            } else {
              return response.json();
            }
          })
          .then((data) => {
            setPodaci(data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);


const contextValue = {

    podaci,
    setPodaci,

}

  return (
    <AppContext.Provider value = {contextValue}>
        {children}
    </AppContext.Provider>
  )
}


const useGlobalHook = () => {
    return useContext(AppContext);
};

export {useGlobalHook, AppContext, AppProvider};