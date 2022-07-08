import { createContext, useContext } from 'react';

const ShowsContext = createContext(null);
ShowsContext.displayName = 'ShowsContext';

const useShowsContext = () => {
    return useContext(ShowsContext);
};

export { useShowsContext, ShowsContext };
