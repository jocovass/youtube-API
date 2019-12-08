import { createContext } from 'react';

export const app = {
    error: false,
    errorMessage: null,
    setError: () => {},
    setErrorMessage: () => {},
};

export default createContext(app);