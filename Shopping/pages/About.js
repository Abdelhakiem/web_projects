import React from 'react';
import { assets } from '../assets/frontend_assets/assets';
import Title from '../components/Title';

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">  <Title text1="About" text2="US" /></h2>
      
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 p-4">
          <img src={assets.about_img} alt="About Us" className="rounded-lg shadow-lg" />
        </div>
        
        <div className="md:w-1/2 p-4">
          <p className="text-gray-600">
            Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.
          </p>
          
          <p className="text-gray-600 mt-4">
            Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.
          </p>
          
          <h3 className="text-2xl font-semibold text-gray-800 mt-8">Our Mission</h3>
          <p className="text-gray-600 mt-2">
            Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.
          </p>
        </div>
      </div>
    </div>
  );
  }

  export default AboutUs;
