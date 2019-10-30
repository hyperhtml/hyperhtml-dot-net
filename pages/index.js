import React from 'react';
import Head from 'next/head';

function Home() {
  return (
    <React.Fragment>
      <Head>
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.11.2/css/all.css" integrity="sha384-zrnmn8R8KkWl12rAZFt4yKjxplaDaT7/EUkKm7AovijfrQItFWR7O/JJn4DAa/gx" crossOrigin="anonymous" />
      </Head>
      <style jsx global>{`
        body {
          padding-top: 40px;
          padding-bottom: 40px;
          background-color: #f3f4f7;
          margin-bottom: 30px;
          font-family: 'Helvetica Neue', 'Proxima Nova Soft', sans-serif;
        }
      `}</style>
      <style jsx>{`
        h1, h2 {
          font-family: inherit;
          margin: 0;
        }
        h1 {
          color: #4880ff;
          font-size: 2.5rem;
          margin-bottom: 8px;
        }
        h2 {
          color: #a1a9b8;
          font-size: 2rem;
        }
        .row {
          display: flex;
          width: 100%;
          justify-content: center;
        }

        .title {
          padding-bottom: 15px;
        }
        .main {
          padding: 15px 25px;
          background-color: #fff;
          text-align: center;
          width: 33%;
          box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
          border-radius: .25rem;
        }
        .main a {
          color: #007bff;
          text-decoration: none;
        }
        .main a:hover {
          text-decoration: underline;
        }
        .socials {
          padding: 25px;
        }
        .socials a {
          color: #343a40;
          margin: 0 5px;
        }
        .socials a:hover {
          color: #4880ff;
        }
        .footer {
          height: 30px;
          line-height: 30px;
          background-color: #fff;
          position: absolute;
          bottom: 0;
          width: 100%;
          text-align: center;
        }
        .text-muted { 
          color: #6c757d!important;
          font-size: 14px;
        }
      `}  
      </style>
      <div className="grid">
      <div className="row">
          <div className="col title">
              <h2>Hyperhtml</h2>
          </div>
        </div>
        <div className="row">
          <div className="col main">
              <h1>Bryce Carr</h1>
              <a className="email" href="mailto:bryce@hyperhtml.net" id="emailLink">bryce@hyperhtml.net</a>
          </div>
        </div>
        <div className="row" style={{alignSelf: 'flex-end'}}>
          <div className="col socials">
              <a href="https://github.com/hyperhtml" target="_blank"><i className="fab fa-github fa-2x mr-2"></i></a>
              <a href="https://www.linkedin.com/in/brycecarr/" target="_blank"><i className="fab fa-linkedin fa-2x"></i></a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col footer">
          <span className="text-muted">{(new Date()).getFullYear()}</span>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home