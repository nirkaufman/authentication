import React, {useState} from 'react';
import {FormContainer, PageContainer} from "../shared/Layout";
import {StyledLink} from "../shared/StyledLink";
import {useAuth} from "../../hooks/use-auth";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {signIn} = useAuth();

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


          <button onClick={() => signIn({email, password})}>Login</button>
          <p>don't have an account? <StyledLink to={'/register'}>Register</StyledLink></p>
        </FormContainer>
      </PageContainer>
  );
};

export default Login;