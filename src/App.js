import React, { useCallback, useEffect, useState } from "react";
import AppRouter from "./Router";
import { auth } from './FireBase';



const App = () => {

  const [isInit, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        console.log(user);
      } else {
        setIsLoggedIn(false);
        console.log("LogOut!");

      }
      setInit(true);
      console.log("App init");
    });
  }, []);

  return (
    <>
      {isInit ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing..."}
    </>
  )
}

export default App;
