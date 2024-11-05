// import React from 'react';
// import MainPage from './pages/MainPage'; // Ensure this path matches your structure

// const App = () => {
//   return (
//     <div>
//       <MainPage />
//     </div>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PhotoBook from './pages/PhotoBook'; // Import the new PhotoBook page
import HoneyPotEgg from './pages/HoneyPotEgg'; // Import the HoneyPotEgg page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/PhotoBook" element={<PhotoBook />} />
        <Route path="/HoneyPotEgg" element={<HoneyPotEgg />} /> {/* Add this line for HoneyPotEgg */}
      </Routes>
    </Router>
  );
};

export default App;

