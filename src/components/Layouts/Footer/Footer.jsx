import { faInstagram, faLinkedin, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {

  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative  pt-8 pb-6" style={{background: "#222258",}}>
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap text-left lg:text-left">
        <div className="w-full lg:w-6/12 px-4 flex items-center"> 
          <img
            className="w-[10%] object-cover"
            src="/image/whiteLogo.png"
            alt="logo"
          />
          <h5 className="text-lg mt-0 mb-2 text-white ml-2">
            Casatech
          </h5>
        </div>
        <div className="map-container w- lg:w-6/12 px-4"> 
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3904885292955!2d106.80826197460277!3d-6.598296893395508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5935743b7e3%3A0x76074157a5981127!2si7%20Creative%20Community%20Space!5e0!3m2!1sid!2sid!4v1708049118110!5m2!1sid!2sid"
           
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
          <div className="w-full lg:w-6/12 px-4">
            
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">About Us</a>
                  </li>
                  <li>
                    <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Blog</a>
                  </li>
                  <li>
                    <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Github</a>
                  </li>
                  <li>
                    <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="">Free Products</a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">MIT License</a>
                  </li>
                  <li>
                    <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terms & Conditions</a>
                  </li>
                  <li>
                    <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
                  </li>
                  <li>
                    <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
          <div className="mt-6 lg:mb-0 mb-6">
              <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
              <FontAwesomeIcon icon={faWhatsapp} style={{color: "#000000",}} />
              </button>
              <button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
              <FontAwesomeIcon icon={faLinkedin} style={{color: "#000000",}} />
              </button>
              <button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
              <FontAwesomeIcon icon={faInstagram} style={{color: "#000000",}} />
              </button>
              <button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
              <FontAwesomeIcon icon={faLocationDot} style={{color: "#000000",}} />
              </button>
              <button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
              <FontAwesomeIcon icon={faYoutube} style={{color: "#000000",}} />
              </button>
              <button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
              <FontAwesomeIcon icon={faPhone} style={{color: "#000000",}} />
              </button>
              <button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
              <FontAwesomeIcon icon={faEnvelope} style={{color: "#000000",}} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-white mt-4">
          © {currentYear} Casatech. All rights reserved.
        </div>
    </footer>
  );
};

export default Footer;