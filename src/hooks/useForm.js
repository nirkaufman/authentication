import {useReducer} from 'react';

const SET = "SET";

const formReducer = (state, action) => {
  if (action.type === SET) {
    return {...state, [action.field]: action.payload}
  }
};

export function useForm() {
  const [state, dispatch] = useReducer(formReducer, {});

  const updateField = ({target}) => dispatch({
    type: SET,
    field: target.name,
    payload: target.value
  });

  return {formData: state, updateField};
}