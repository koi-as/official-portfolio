import React from 'react';

export default function AboutMe() {
  const styles = {
    cardWidth: {
      maxWidth: '1040px'
    }
  }

  return (
    <div className="card mb-3" style={styles.cardWidth}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src="..." className="img-fluid rounded-start" alt="Profile Picture" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">About Me</h5>
            <p className="card-text">
              Hi! My name is Alex Seidensticker, although most people call me by my username: Koi. I like video games, manga and anime, and I have gotten really into web developement! Although I am still new to developing web apps, I am always open to learning and trying out new technologies!
            </p>
            <p className="card-text">
              I am currently planning on going to college and diving deeper into the field of development. I am open to smaller projects and jobs as I got to school so that I can keep my skills fresh and up to date. I look forward to the projects to come!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
