import { useState } from 'react';
import Header from './Header';
import NavTabs from './NavTabs';
import About from '../pages/About'
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';
import projects from '../projects'; 
import '../styles/body.css';

export default function Body() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
   if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio projects= { projects }/>;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div className='HeadNav'>
      <Header/>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      <main className="mx-3">{renderPage()}</main>
    </div>
  );
}