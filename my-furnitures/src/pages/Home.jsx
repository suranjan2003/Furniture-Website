import React from 'react';

const Home = () => {
  return (
    <>
      <div
        className="w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/HomeBGimage.jpg')` }} // Use your image path here
      >
        <div className="flex flex-col items-start justify-center h-full bg-black bg-opacity-40 px-4 mt-14"> {/* Added mt-16 for spacing */}
          <h1 className="text-white text-4xl sm:text-4xl font-bold homepage-font"> {/* Responsive font size for heading */}
            Welcome to Ashirbaad Furnitures
          </h1>
          <p className="text-white text-base mt-4 w-3/4 text-left sm:text-sm md:text-base homepage-font"> {/* Responsive font size for paragraph */}
            At Ashirbaad Furnitures, we believe that your home should reflect your unique style and personality. 
            Our carefully curated selection of exquisite furniture combines timeless elegance with modern design, ensuring that each piece enhances your living space. 
            Whether you're looking for a cozy sofa, a statement dining table, or stylish home decor, we have something to fit every taste and budget. 
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;

