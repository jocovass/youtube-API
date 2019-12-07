import { createContext } from 'react';

export const app = {
    error: false,
    errorMessage: null,
};

export default createContext(app);