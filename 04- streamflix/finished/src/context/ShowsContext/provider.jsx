import { useState } from 'react';
import { ShowsContext } from './context';

const ShowsProvider = ({ children }) => {
    const [shows, setShows] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);


    const value = {
        setShows,
        shows,
        page,
        setPage,
        totalResults,
        setTotalResults
    };

    return (
        <ShowsContext.Provider value={value}>{children}</ShowsContext.Provider>
    );
};

export { ShowsProvider };
