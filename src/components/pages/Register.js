import React, {useReducer} from 'react';
import {FormContainer, PageContainer} from "../shared/Layout";
import {useAuth} from "../../hooks/use-auth";
import {StyledLink} from "../shared/StyledLink";

const registerReducer = (newUser, action) => {
  switch (action.type) {
    case "SET":
      return {...newUser, [action.field]: action.payload};
    case "RESET":
      return {};
    default:
      return newUser;
  }
};

const Register = () => {
  const {register} = useAuth();
  const [newUser, dispatch] = useReducer(registerReducer, {});

  const setField = ({target}) => {

    dispatch({
      type: "SET",
      field: target.name,
      payload: target.value
    });
  };

  return (
      <PageContainer>
        <h1>Register</h1>
        <FormContainer>
          <input type="text"
                 placeholder={"Your full name..."}
                 name="name"
                 onChange={setField}
          />
          <input type="text"
                 placeholder={"Your email..."}
                 name="email"
                 onChange={setField}
          />
          <input type="password"
                 placeholder={"Your password..."}
                 name="password"
                 onChange={setField}
          />
          <button onClick={() => register(newUser)}>Register</button>
          <p>Have an account?<StyledLink to={"/login"}>login</StyledLink></p>
        </FormContainer>
      </PageContainer>
  );
};

export default Register;