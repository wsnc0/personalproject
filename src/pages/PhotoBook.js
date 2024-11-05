import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './PhotoBook.css';

const PhotoBook = () => {
  const audioRefs = useRef(Array(16).fill(null)); // Create an array of refs for audio elements
  const [isLoading, setIsLoading] = useState(false); // State to manage loading pop-up

  const photos = Array.from({ length: 16 }, (_, index) => ({
    id: index + 1,
    src: `/Pooh${index + 1}.png`,
    alt: `Pooh ${index + 1}`,
    audioSrc: `/Pooh${index + 1}_Recording.mp3`, // Path to the audio file
  }));

  const handleImageClick = (index) => {
    const audio = audioRefs.current[index];

    // Check if any audio is currently playing
    const currentlyPlaying = audioRefs.current.some(ref => ref && !ref.paused);
    if (currentlyPlaying) {
      setIsLoading(true); // Show the loading pop-up
      return; // Prevent the click if audio is already playing
    }

    // Play the audio if no other audio is playing
    if (audio) {
      audio.currentTime = 0; // Reset to the beginning
      audio.play(); // Play the audio
    }
  };

  const handleAudioEnd = () => {
    setIsLoading(false); // Hide the loading pop-up when audio ends
  };

  return (
    <div className="photo-book-container">
      <Link to="/" className="back-button">← Back</Link>
      <h1 className="title">Easter Egg!</h1>
      <p className="message">
        Thank you for always playing with my soft toys (especially my poohs) and feeding into my pooh delusion by buying me pooh gifts 
        and printing cute little ;D prints out hehe. Even though I know you find it stupid and have obvious biasness towards some of them 
        LOL (so here is a compilation of you playing with my unalive fur babies)
      </p>
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div key={photo.id} onClick={() => handleImageClick(index)} className="photo-wrapper">
            <img src={photo.src} alt={photo.alt} className="photo" />
            <audio
              ref={el => audioRefs.current[index] = el}
              src={photo.audioSrc}
              onEnded={handleAudioEnd} // Call handleAudioEnd when audio ends
            />
          </div>
        ))}
      </div>

      {isLoading && (
        <div className="popup">
          <p>Please Wait!</p>
        </div>
      )}

      <p className="click-message">pst... try clicking on the pictures and turn up your volume hehe</p> {/* New message added */}
    </div>
  );
};

export default PhotoBook;
