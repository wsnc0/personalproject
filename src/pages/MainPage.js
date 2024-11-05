// import React from 'react';
// import './MainPage.css';

// const MainPage = () => {
//   const events = [
//     {
//       date: '13.09.2022',
//       title: 'Fixing my Laptop',
//       description: "Look at you volunteering to help me fix something on my laptop... I don't even know what you were fixing to be honest HHAHA I think it was the DaVinci editing software thing.",
//       imgSrc: '/13.09.2022.png',
//     },
//     {
//       date: '18.09.2022',
//       title: 'Our First Night Out',
//       description: "Do you remember? Heheheh... I keep bringing up this photo LOL (we went to eat supper together and went grocery shopping heh)... I don't really remember how this happened, but I think you went to my room to hang out with me after this trip? Your infamous green shirt that I remember hehe.",
//       imgSrc: '/18.09.2022.png',
//     },
//     {
//       date: '23.09.2022 & 24.09.2022',
//       title: 'First Time Room Visit',
//       description: "The first time you came to my room during the weekend to chill/hang out/do work. Look at you tying my hair in a braid and laying on me hehehehe making the first move all HAHAHA.",
//       imgSrc: '/23.09.2022.png',
//     },
//     {
//       date: '30.09.2022',
//       title: 'First CCP Grocery Run',
//       description: "We hid in the corner after seeing some familiar faces from SUTD in the same NTUC as us LOL. Was it Clarence or something? I can't remember... hehe.",
//       imgSrc: '/30.09.2022.png',
//     },
//     {
//       date: '08.10.2022',
//       title: 'Painting Your Toenails',
//       description: "You let me paint your toenails with my white nail polish hehe... I took this the morning after when we slept in my room by accident and I woke up first (if I remember it correctly AAHAHA).",
//       imgSrc: '/08.10.2022.png',
//     },
//     {
//       date: '09.10.2022',
//       title: 'Your First Cooking',
//       description: "Yippie!!!!!!!!!! I remember this so clearly. You cooked porridge for me with spam and peanuts and soy sauce HAAHAH. I don't really remember if I was sick or what but you even washed the pans and cleaned up after I ate hehehe.",
//       imgSrc: '/09.10.2022.png',
//     },
//   ];

//   return (
//     <div className="main-container">
//       <header className="header">
//         <h1 className="anniversary-title">Happy Anniversary</h1>
//         <img src="/korea_han_river.png" alt="Main Anniversary Image" className="main-image" />
//         <h2 className="section-title">How We Started</h2>
//       </header>
      
//       <div className="timeline">
//         <div className="timeline-line"></div>
//         <div className="dotted-line"></div>
//         {events.map((event, index) => (
//           <div className="timeline-item" key={index}>
//             <div className="timeline-content">
//               <div className="text-content">
//                 <h3>{event.title}</h3>
//                 <p>{event.description}</p>
//                 <small>{event.date}</small>
//               </div>
//               <img src={event.imgSrc} alt={event.title} className="timeline-image" />
//             </div>
//             <img src="/heart.png" alt="Heart Icon" className="heart-icon" />
//           </div>
//         ))}
//         <img src="/bee.png" alt="Bee" className="bee" />
//       </div>

//       <div className="bottom-section">
//         <div className="image-grid">
//           <img src="/HowWeAreGoingwithplushies.png" alt="Plushies Grid Layout" className="plushies-image" />
//         </div>
//         <div className="honeypot-container">
//           <img src="/honeypot.png" alt="Honeypot" className="honeypot-image" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainPage;


import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './MainPage.css';

const MainPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const audioRef = useRef(null);

  const sleepingImages = Array.from({ length: 8 }, (_, i) => `/Sleeping${i + 1}.png`);

  const events = [
    {
      date: '13.09.2022',
      title: 'Fixing my Laptop',
      description: "Look at you volunteering to help me fix something on my laptop... I don't even know what you were fixing to be honest HHAHA I think it was the DaVinci editing software thing.",
      imgSrc: '/13.09.2022.png',
    },
    {
      date: '18.09.2022',
      title: 'Our First Night Out',
      description: "Do you remember? Heheheh... I keep bringing up this photo LOL (we went to eat supper together and went grocery shopping heh)... I don't really remember how this happened, but I think you went to my room to hang out with me after this trip? Your infamous green shirt that I remember hehe.",
      imgSrc: '/18.09.2022.png',
    },
    {
      date: '23.09.2022 & 24.09.2022',
      title: 'First Time Room Visit',
      description: "The first time you came to my room during the weekend to chill/hang out/do work. Look at you tying my hair in a braid and laying on me hehehehe making the first move all HAHAHA.",
      imgSrc: '/23.09.2022.png',
    },
    {
      date: '30.09.2022',
      title: 'First CCP Grocery Run',
      description: "We hid in the corner after seeing some familiar faces from SUTD in the same NTUC as us LOL. Was it Clarence or something? I can't remember... hehe.",
      imgSrc: '/30.09.2022.png',
    },
    {
      date: '08.10.2022',
      title: 'Painting Your Toenails',
      description: "You let me paint your toenails with my white nail polish hehe... I took this the morning after when we slept in my room by accident and I woke up first (if I remember it correctly AAHAHA).",
      imgSrc: '/08.10.2022.png',
    },
    {
      date: '09.10.2022',
      title: 'Your First Cooking',
      description: "Yippie!!!!!!!!!! I remember this so clearly. You cooked porridge for me with spam and peanuts and soy sauce HAAHAH. I don't really remember if I was sick or what but you even washed the pans and cleaned up after I ate hehehe.",
      imgSrc: '/09.10.2022.png',
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prev) => (prev === 0 ? sleepingImages.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prev) => (prev === sleepingImages.length - 1 ? 0 : prev + 1));
  };

  const getImageIndex = (index) => {
    return (index + sleepingImages.length) % sleepingImages.length;
  };

  const handleBeeClick = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Reset audio to start
      audioRef.current.play(); // Play the audio
    }
  };

  return (
    <div className="main-container">
      <header className="header">
        <h1 className="anniversary-title">Happy Anniversary</h1>
        <Link to="/PhotoBook">
          <img src="/korea_han_river.png" alt="Main Anniversary Image" className="main-image" />
        </Link>
        <h2 className="section-title">How We Started</h2>
      </header>

      <div className="timeline">
        <div className="timeline-line"></div>
        <div className="dotted-line"></div>
        {events.map((event, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-content">
              <div className="text-content">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <small>{event.date}</small>
              </div>
              <img src={event.imgSrc} alt={event.title} className="timeline-image" />
            </div>
            <img src="/heart.png" alt="Heart Icon" className="heart-icon" />
          </div>
        ))}
        <img src="/bee.png" alt="Bee" className="bee" onClick={handleBeeClick} />
      </div>

      <div className="bottom-section">
        <div className="image-grid">
          <img src="/HowWeAreGoingwithplushies.png" alt="Plushies Grid Layout" className="plushies-image" />
        </div>
        <Link to="/HoneyPotEgg"> {/* Wrap honeypot image with Link */}
          <div className="honeypot-container">
            <img src="/honeypot.png" alt="Honeypot" className="honeypot-image" />
          </div>
        </Link>
      </div>

      <div className="sleeping-beauty-section">
        <h2 className="sleeping-title">Happy Anniversary<br />My Sleeping Beauty</h2>

        <div className="carousel-container">
          <button className="carousel-button carousel-button--prev" onClick={handlePrevClick}>
            <ChevronLeft size={32} />
          </button>

          <div className="carousel-track">
            {[-2, -1, 0, 1, 2].map((offset) => {
              const imageIndex = getImageIndex(currentIndex + offset);
              return (
                <motion.div
                  key={imageIndex}
                  className={`carousel-slide ${offset === 0 ? 'active' : ''}`}
                  initial={{ scale: 0.8, opacity: 0.6 }}
                  animate={{
                    scale: offset === 0 ? 1 : 0.8,
                    opacity: offset === 0 ? 1 : 0.6,
                    x: `${offset * 100}%`
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={sleepingImages[imageIndex]}
                    alt={`Sleeping ${imageIndex + 1}`}
                    className="carousel-image"
                  />
                </motion.div>
              );
            })}
          </div>

          <button className="carousel-button carousel-button--next" onClick={handleNextClick}>
            <ChevronRight size={32} />
          </button>

          <div className="carousel-dots">
            {sleepingImages.map((_, index) => (
              <div
                key={index}
                className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <audio ref={audioRef} src="/bee_recording.mp3" />
    </div>
  );
};

export default MainPage;
