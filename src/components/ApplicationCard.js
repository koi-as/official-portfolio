import React from 'react';

export default function ApplicationCard() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="..." className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
              </div>
              <img src="..." className="card-img-bottom" alt="..."/>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src="..." className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
              </div>
              <img src="..." className="card-img-bottom" alt="..."/>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src="..." className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
              </div>
              <img src="..." className="card-img-bottom" alt="..."/>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}