import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="header bg-primary text-white py-5 text-center">
        <h1 className="name">CHARISHMA</h1>
        <p className="job-title">Mern Stack Learner</p>
      </header>

      <section className="about py-5">
        <div className="container">
          <h2 className="section-title">Myself Intro</h2>
          <p>
            I'm charishma currently studying CSE in Vellore Institute Of Technology and i'm currently learning Mern stack for my credits score 
          </p>
        </div>
      </section>

      <section className="contact py-5 bg-primary text-white">
        <div className="container">
          <h2 className="section-title text-white">Additional Info</h2>
          <p>Email: charishmamuppuri@gmail.com</p>
          <p>LinkedIn Profile: <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">Link</a></p>
          <p>GitHub Profile: <a href="https://github.com/" target="_blank" rel="noopener noreferrer">Link</a></p>
        </div>
      </section>
    </div>
  );
}

export default App;
