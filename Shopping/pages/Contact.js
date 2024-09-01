// create contact functional component
import React from 'react';
import { assets } from '../assets/frontend_assets/assets';
import Title from '../components/Title';

const Contact = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center"> <Title text1="Contact" text2="US" /></h2>
          
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-4">
              <img src={assets.contact_img} alt="Contact Us" className="rounded-lg shadow-lg" />
            </div>
            
            <div className="md:w-1/2 p-4">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800">Our Store</h3>
                <p className="text-gray-600 mt-2">
                  54709 Willms Station<br />
                  Suite 350, Washington, USA
                </p>
                <p className="text-gray-600 mt-4">
                  Tel: (415) 555-0132<br />
                  Email: admin@forever.com
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">Careers at Forever</h3>
                <p className="text-gray-600 mt-2">Learn more about our teams and job openings.</p>
                <button className="mt-4 px-6 py-3 border border-gray-800 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition duration-300">
                  Explore Jobs
                </button>
              </div>
            </div>
          </div>
        </div>
      );
        

};

export default Contact;
