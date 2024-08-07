import ReactGA from 'react-ga';
import { useEffect } from 'react';
const usePageView = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
};
export default usePageView;