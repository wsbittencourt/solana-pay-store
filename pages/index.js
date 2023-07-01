import React from "react";
import HeadComponent from '../components/Head';

// Constants
const PROFILE_HANDLE = "Wagner Bittencourt";
const PROFILE_LINK = "https://wsbittencourt.github.io/";

const App = () => {
  
  
  return (
    <div className="App">
      <HeadComponent/>
      <div className="container">
        <header className="header-container">
          <p className="header"> Workshops de Dança 💃🏽</p>
          <p className="sub-text">Adquira treinamentos de Bellydance ou Fusion Bellydance, através de seus cryptos.</p>
        </header>

        <main>
          <div className='video'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/eV7lpOkzkww" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </main>

        <div className="footer-container">
          <a
            className="footer-text"
            href={PROFILE_LINK}
            target="_blank"
            rel="noreferrer"
          >
            <img className="github-logo" src="github-mark-white.png" />
            {`construido por ${PROFILE_HANDLE}`}
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
