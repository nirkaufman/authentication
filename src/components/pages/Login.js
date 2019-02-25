import React, {useState, useContext} from 'react';
import {FormContainer, PageContainer} from "../shared/Layout";
import {StyledLink} from "../shared/StyledLink";
import {AuthContext} from '../shared/Auth';
import {signIn} from '../../services/auth';


const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {setCurrentUser} = useContext(AuthContext);

  const login = async () => {
    const response = await signIn({ email, password });
    return setCurrentUser(response.data.data);
  };

  return (
      <PageContainer>
        <h1>Login</h1>
        <FormContainer>
          <input type="text"
                 placeholder={"Your email..."}
                 onChange={({target}) => setEmail(target.value)}/>

          <input type="password"
                 placeholder={"Your password..."}
                 onChange={({target}) => setPassword(target.value)}/>


          <button onClick={login}>Login</button>
          <p>don't have an account? <StyledLink to={'/register'}>Register</StyledLink></p>
        </FormContainer>
      </PageContainer>
  );
};

export default Login;