import { useState } from 'react';

export const useForm = (initialState = {}) => {
  const [formState, setFormState] = useState(initialState);

  const handleInputChange = ({ target: { name, value } }) =>
    setFormState({ ...formState, [name]: value });

  const resetForm = () => setFormState(initialState);

  return {
    ...formState,
    formState,
    handleInputChange,
    resetForm
  };
};
