import React, {useContext} from 'react';
import {FormContainer, PageContainer} from "../shared/Layout";
import {signUp} from '../../services/auth';

import {StyledLink} from "../shared/StyledLink";
import {AuthContext} from "../shared/Auth";
import {useForm} from '../../hooks/useForm';

const Register = () => {
  const { formData, updateField } = useForm();
  const {setCurrentUser} = useContext(AuthContext);

  const register = async () => {
    const response = await signUp(formData);
    setCurrentUser(response.data.data);
  };

  return (
      <PageContainer>
        <h1>Register</h1>
        <FormContainer>
          <input type="text"
                 placeholder={"Your full name..."}
                 name="name"
                 onChange={updateField}
          />
          <input type="text"
                 placeholder={"Your email..."}
                 name="email"
                 onChange={updateField}
          />
          <input type="password"
                 placeholder={"Your password..."}
                 name="password"
                 onChange={updateField}
          />
          <button onClick={register}>Register</button>
          <p>Have an account?<StyledLink to={"/login"}>login</StyledLink></p>
        </FormContainer>
      </PageContainer>
  );
};

export default Register;