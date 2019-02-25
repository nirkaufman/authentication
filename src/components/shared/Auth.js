import React, {useState, useEffect} from "react";
import {apiRequest} from "../../services/api";

export const AuthContext = React.createContext();
export const LOCAL_STORAGE_KEY = `${process.env.REACT_APP_STORAGE_KEY}`;

const Auth = ({children}) => {
  const [initialLoading, setInitialLoading] = useState(true);
  const [user, setUser] = useState(null);

  const setCurrentUser = newUser => {
    setUser(newUser);

    if (!newUser) {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
  };

  const authenticate = async () => {
    try {
      const response = await apiRequest({path: "/auth/validate_token"});

      if (response.status === 200) {
        setCurrentUser(response.data.data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setInitialLoading(false);
    }
  };

  useEffect(() => {
    authenticate();
  }, []);

  if(initialLoading) {
    return <h4>Loading...</h4>;
  }

  const context = {user, setCurrentUser};

  return (
      <AuthContext.Provider value={context}>
        {children(context.user)}
      </AuthContext.Provider>
  )
};

export default Auth;
