import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HoneyPotEgg.css';

const HoneyPotEgg = () => {
  const [flipped, setFlipped] = useState([false, false, false, false, false, false, false, false]);
  const navigate = useNavigate();

  const coupleImages = [
    { src: '/couple1.png', isHorizontal: true, text: "Our first picture we took together (and the first picture ever taken on my - at the time, new laptop" },
    { src: '/couple2.png', isHorizontal: false, text: "Our super cute Korea mirror selfie hehe" },
    { src: '/couple3.png', isHorizontal: true, text: "Another than river date selfie... and you not looking at the camera again..." },
    { src: '/couple4.png', isHorizontal: false, text: "I think this is from that time you bought ice cream from the vending machine hehe" },
    { src: '/couple5.png', isHorizontal: false, text: "Ewwww a selfie we took very early on of our \"situationship\" LOLLL" },
    { src: '/couple6.png', isHorizontal: true, text: "Bye this is so cute i love this picture but I'm shy HHAHHA" },
    { src: '/couple7.png', isHorizontal: false, text: "Ditto! Ditto!" },
    { src: '/couple8.png', isHorizontal: false, text: "Our IKEA date where you bought the bolster... why u look so grumpy all.." },
  ];

  const handleFlip = (index) => {
    setFlipped((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="collage-container">
      <button className="back-button" onClick={handleGoBack}>
      ← Back
      </button>
      <h1 className="collage-title">My Favourite Pictures of Us</h1>
      <div className="collage">
        <div className="top-row">
          {coupleImages
            .filter(image => image.isHorizontal)
            .map((image, index) => (
              <div key={index} className={`collage-card ${flipped[index] ? 'flipped' : ''}`} onClick={() => handleFlip(index)}>
                <div className="card-front">
                  <img src={image.src} alt={`Couple ${index + 1}`} className="collage-image" />
                </div>
                <div className="card-back">
                  <div className="card-content">
                    <h3 className="card-text">{image.text}</h3>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="bottom-row">
          {coupleImages
            .filter(image => !image.isHorizontal)
            .map((image, index) => (
              <div key={index + 4} className={`collage-card ${flipped[index + 4] ? 'flipped' : ''}`} onClick={() => handleFlip(index + 4)}>
                <div className="card-front">
                  <img src={image.src} alt={`Couple ${index + 5}`} className="collage-image" />
                </div>
                <div className="card-back">
                  <div className="card-content">
                    <h3 className="card-text">{image.text}</h3>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="lazy-text">
        As you can tell, I'm getting a bit lazy with coding this whole things AHAHA
      </div>
    </div>
  );
};

export default HoneyPotEgg;