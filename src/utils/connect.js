import React, { useContext } from 'react';
import { StoreContext } from 'store';

const connect = (mapState, mapDispatch) => {
  return WrappedComponent => {
    return () => {
      const [store, dispatch]  = useContext(StoreContext);
      return (
        <WrappedComponent {...mapState(store)} {...mapDispatch(dispatch)} />
      );
    };
  };
};

export default connect;;