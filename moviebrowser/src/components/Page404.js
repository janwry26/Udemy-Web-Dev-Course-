import { useLocation } from 'react-router-dom';
import Hero from './Hero';


function Page404() {
    const location = useLocation();
  
    if (location.pathname === '/404') {
      return (
        <div className='container text-center'>
          <h1>404: Page not found</h1>
          <p>Sorry, the page you were looking for could not be found.</p>
        </div>
      );
    }
  
    return null;
  }

export default Page404;