import React from 'react';

export default function ApplicationCard() {
  const applications = [
    {
      title: '1st repo',
      desc: 'This is the first repository',
      appUrl: 'link to deployed app',
      repoUrl: 'link to repository',
      imgUrl: 'image path'
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
        <li className="card">
          <div className="card-body">
            <h5 className="card-title">{element.title}</h5>
            <p className="card-text">{element.desc}</p>
            <p className="card-text"><small className="text-body-secondary">{element.appUrl} {element.repoUrl}</small></p>
          </div>
          <img src="" className="card-img-bottom" alt="application image" />
        </li>
      )
    )}
    </ul>
  );
};