import React, { createContext, useReducer, useState, useEffect } from 'react'
import rootReducer from '../reducers'

export const StoreContext = createContext({});

const Provider = ({ children }) => {
  const [state, setState] = useState({ isLoaded: false });
  const [store, dispatch] = useReducer(rootReducer);

  useEffect(() => {
    dispatch({type: '@init'});
    setState({ isLoaded: true });
  }, []);

  return (
    <StoreContext.Provider value={[store, dispatch]}>
      {state.isLoaded ? children : false}
    </StoreContext.Provider>
  ) 
}

export default Provider

