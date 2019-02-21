import {useContext, useState} from "react";
import {apiRequest} from "../services/api";
import {AuthContext} from "../components/shared/Auth";

export function useAuth() {
  const [errors, setErrors] = useState(null);
  const {setCurrentUser, user} = useContext(AuthContext);

  // const authenticate = async () => {
  //   const response = await apiRequest({path: "/auth/validate_token"});
  //   return setCurrentUser(response.data);
  // };

  const signIn = async ({email, password}) => {
    const response = await apiRequest({
      path: "/auth/sign_in",
      method: "POST",
      data: {email, password}
    });

    if (response.status && response.status !== 200) {
      return setErrors(response.data.errors);
    }

    return setCurrentUser(response.data);
  };

  const register = async ({name, email, password}) => {
    const response = await apiRequest({
      path: "/auth",
      method: "POST",
      data: {name, email, password}
    });

    setCurrentUser(response.data);
  };

  const logOut = async () => {
    await apiRequest({
      path: "/auth/sign_out",
      method: "DELETE"
    });

    setCurrentUser(null);
  };

  return {register, signIn, logOut, user, errors};
}
