import React from 'react';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="navbar-brand">Koi | Alex Seidensticker</div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div>|</div>
          <div className="navbar-nav">
            <a className="nav-link active" href="https://github.com/koi-as">GitHub</a>
            <a className="nav-link active" href="https://www.linkedin.com/in/alex-koi-seidensticker">LinkedIn</a>
            <a className="nav-link active" href="">Email</a>
          </div>
          <div>| |</div>
          <div className="navbar-nav">
            <a className="nav-link active" href="#">About Me</a>
            <a className="nav-link active" href="#">Portfolio</a>
            <a className="nav-link active" href="#">Contact Me</a>
          </div>
          <div>|</div>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
