import React from 'react';

export default function ApplicationCard() {
  const applications = [
    {
      title: 'Marketing Page Refactor',
      desc: 'This is the first challenge of the GaTech Full Stack coding bootcamp. The goal is to refactor the existing code so that it follows the accessibility standards. y',
      appUrl: 'https://koi-as.github.io/marketing-page-refactor/',
      repoUrl: 'https://github.com/koi-as/marketing-page-refactor',
      imgUrl: './assets/images/MarketingRefactorSS.png'
    },
    {
      title: '2nd repo',
      desc: 'This is the second repository',
      appUrl: 'link to deployed app',
      repoUrl: 'link to repository',
      imgUrl: 'image path'
    },
    {
      title: '3rd repo',
      desc: 'This is the third repository',
      appUrl: 'link to deployed app',
      repoUrl: 'link to repository',
      imgUrl: 'image path'
    },
    {
      title: '4th repo',
      desc: 'This is the fourth repository',
      appUrl: 'link to deployed app',
      repoUrl: 'link to repository',
      imgUrl: 'image path'
    },
    {
      title: '5th repo',
      desc: 'This is the fifth repository',
      appUrl: 'link to deployed app',
      repoUrl: 'link to repository',
      imgUrl: 'image path'
    },
    {
      title: '6th repo',
      desc: 'This is the sixth repository',
      appUrl: 'link to deployed app',
      repoUrl: 'link to repository',
      imgUrl: 'image path'
    },
  ]

  return (
    <ul>
    {applications.map((element) => (
        <li className="card col-5 m-2">
          <div className="card-body">
            <h5 className="card-title">{element.title}</h5>
            <p className="card-text">{element.desc}</p>
          <p className="card-text"><small className="text-body-secondary d-flex justify-content-evenly">
            <a
              href={element.appUrl}
              className='mx-3'
            >
              Deployed App
            </a>
            
            <a
              href={element.repoUrl}
              className='mx-3'
            >
              Repository
            </a></small>
          </p>
          </div>
          <img src={element.imgUrl} className="card-img-bottom" alt="application image" />
        </li>
      )
    )}
    </ul>
  );
};