import React from 'react';

function Nav({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="navbar-brand">koi-as | Alex Seidensticker</div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a
              className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
              onClick={() => handlePageChange('Home')}
              href='#home'>
              Home
            </a>
            <a
              className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
              onClick={() => handlePageChange('AboutMe')}
              href="#aboutme">
              About Me
            </a>
            <a
              className={currentPage === 'Repository' ? 'nav-link active' : 'nav-link'}
              onClick={() => handlePageChange('Repository')}
              href="#repository">
              Repositories
            </a>
            <a
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              onClick={() => handlePageChange('Contact')}
              href="#contact">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
