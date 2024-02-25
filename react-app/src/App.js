import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { authenticate } from "./store/session";
import Homepage from "./components/Homepage";
import MembersPage from "./components/Members";
import Wallets from "./components/Wallets";
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {isLoaded && (
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/members" component={MembersPage} /> 
          <Route path="/wallets" component={Wallets} />
        </Switch>
      )}
    </>
  );
}

export default App;
