import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { updatePageTitle } from '../utils/pageTitles';

/**
 * Custom hook to update page title based on current route
 * Automatically updates document title when route changes
 */
const usePageTitle = () => {
    const location = useLocation();

    useEffect(() => {
        updatePageTitle(location.pathname);
    }, [location.pathname]);
};

export default usePageTitle;

