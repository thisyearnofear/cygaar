import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const [isUiHidden, setIsUiHidden] = useState(false);
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    // Create 50 snowflakes with random properties
    const newSnowflakes = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 10 + 5}s`,
      animationDelay: `${Math.random() * 5}s`,
      opacity: Math.random() * 0.5 + 0.1
    }));
    setSnowflakes(newSnowflakes);
  }, []);

  return (
    <main className={`landing-main ${isUiHidden ? 'hidden-ui' : ''}`}>
      <div className="fullscreen-image">
        <img
          src="/images/cygaarhome.jpeg"
          alt="Cygaar appreciation penguins"
        />
        {/* Snow Effect */}
        <div className="snow">
          {snowflakes.map((flake) => (
            <div
              key={flake.id}
              style={{
                left: flake.left,
                animationDuration: flake.animationDuration,
                animationDelay: flake.animationDelay,
                opacity: flake.opacity
              }}
            />
          ))}
        </div>
        <button 
          className="toggle-ui" 
          onClick={() => setIsUiHidden(!isUiHidden)}
          aria-label={isUiHidden ? "Show UI" : "Hide UI"}
        >
          {isUiHidden ? (
            <svg viewBox="0 0 24 24">
              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24">
              <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>
            </svg>
          )}
        </button>
        <div className="button-group">
          <a
            href="https://dexscreener.com/abstract/0xbe01179f2291773d220eae55ee85b417f40342d0"
            target="_blank"
            rel="noopener noreferrer"
            className="buy-button"
          >
            $CYGAAR
          </a>
          <a
            href="https://abs.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="buy-button"
          >
            ABSTRACT
          </a>
          <a
            href="https://flappypenguin.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="buy-button"
          >
            FLAPPY
          </a>
          <a
            href="https://remenguiny.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="buy-button"
          >
            REMENGUINY
          </a>
          <a
            href="https://abstractland-cygaar.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="buy-button"
          >
            ABSTRACTLAND
          </a>
          <a
            href="https://cygaarverse.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="buy-button"
          >
            HOLDERBOARD
          </a>
        </div>
        <div className="description-text">
          {' '}
          <a
            href="https://twitter.com/0xCygaar"
            target="_blank"
            rel="noopener noreferrer"
            className="twitter-link"
          >
            Cygaar
          </a>
          . Buildoor, contributoor, onboardoor, experimentoor, let's make the legend immortal
          through the one and only abstract memecoin $cygaar. LFG!!
        </div>
        <Link
          to="/appreciation"
          className="secret-penguin"
        >
          🐧
        </Link>
      </div>
    </main>
  );
};

export default LandingPage; 