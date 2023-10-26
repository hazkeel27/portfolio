import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <nav className="navbar navbar-expand-sm bg-dark border-bottom border-body fixed-top" data-bs-theme="dark">
    <div className="container-fluid">
      <span className="navbar-brand">Hazkeel A. Qureshi</span>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon">
        

        </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
            to="/"
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            aria-current={currentPage === '/Contact' ? 'page' : 'false'} 
            >
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link
            to="/Portfolio"
            className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
            aria-current={currentPage === '/Contact' ? 'page' : 'false'} 
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
            to="/Resume"
            className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
            aria-current={currentPage === '/Contact' ? 'page' : 'false'} 
            >
              Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link
            to="/Contact"
            className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
            aria-current={currentPage === '/Contact' ? 'page' : 'false'} 
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
    </nav>
  );
}

export default NavTabs;
