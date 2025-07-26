import { useState, useEffect } from 'react';
import {
  FaSearch,
  FaHospital,
  FaUserMd,
  FaFlask,
  FaVial,
  FaSatelliteDish,
  FaCheckCircle,
  FaUsers,
  FaGlobe,
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';


import heroImage from '../assets/home/f1.jpeg';
import labImage1 from '../assets/home/box/b1.jpeg';
import labImage2 from '../assets/home/box/b2.jpeg';
import labImage3 from '../assets/home/box/b3.jpeg';
import labImage4 from '../assets/home/box/b4.jpeg';
import Features from '../assets/home/f3.jpeg';

function Home() {
  const [location, setLocation] = useState('');
  const [country, setCountry] = useState('India');
  const [state, setState] = useState('Delhi');
  const [city, setCity] = useState('New Delhi');
  const [language, setLanguage] = useState('English');



  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const featureIcons = [
    <FaHospital className="text-primary text-4xl mx-auto mb-4" />,
    <FaSearch className="text-primary text-4xl mx-auto mb-4" />,
    <FaCheckCircle className="text-primary text-4xl mx-auto mb-4" />,
    <FaUsers className="text-primary text-4xl mx-auto mb-4" />,
    <FaVial className="text-primary text-4xl mx-auto mb-4" />,
    <FaFlask className="text-primary text-4xl mx-auto mb-4" />
  ];

  const featureList = [
    ["Find Nearby Labs", "Locate the closest medical laboratories in your area"],
    ["Compare Prices", "Get the best rates for medical tests and procedures"],
    ["Book Tests", "Schedule your medical tests with ease"],
    ["Ratings & Reviews", "See what others say about the lab experience"],
    ["Download Reports", "Get your reports digitally from the platform"],
    ["Cold Chain Logistics", "Rest assured, your collected samples are securely delivered "]
  ];


  const stats = [
    {
      icon: <FaVial className="text-3xl text-primary" />,
      value: '50M+',
      label: 'Samples Collected',
    },
    {
      icon: <FaSatelliteDish className="text-3xl text-primary" />,
      value: '280+',
      label: 'Satellite Labs',
    },
    {
      icon: <FaCheckCircle className="text-3xl text-primary" />,
      value: '50+',
      label: 'Quality Checks',
    },
    {
      icon: <FaUsers className="text-3xl text-primary" />,
      value: '800M+',
      label: 'Visitors',
    },
    {
      icon: <FaUserMd className="text-3xl text-primary" />,
      value: '250+',
      label: 'Doctors',
    },
    {
      icon: <FaGlobe className="text-3xl text-primary" />,
      value: '23+',
      label: 'Countries We Operate',
    },
  ];

  const clinics = [
    {
      id: 1,
      name: "Apollo One Pusa Road",
      address: "Plot No. 3, Block No. 34, Pusa Road, Opposite Metro Pillar No. 77, Karol Bagh, New Delhi",
      call: "1860-500-7788",
      email: "apolloonepusaroad@apolloclinic.com",
      rating: 4.9,
      image: "https://via.placeholder.com/200x150"
    },
    {
      id: 2,
      name: "East of Kailash",
      address: "E 11, Basement, East of Kailash, New Delhi",
      call: "7807050555",
      email: "eastofkailash@apolloclinic.com",
      rating: 4.9
    },
    {
      id: 3,
      name: "Gujranwala Town",
      address: "Orbit Plaza Mall, Gujranwala Town, New Delhi",
      call: "8287663284",
      email: "gujranwalatown@apolloclinic.com",
      rating: 4.9
    },
    {
      id: 4,
      name: "Rajouri Garden",
      address: "Major Sudesh Kumar Marg, Rajouri Garden, New Delhi",
      call: "011-25918222",
      email: "rajourigarden@apolloclinic.com",
      rating: 4.3
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-gray-50 mt-20">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[80vh] text-white"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        <div className="relative h-full flex items-center justify-start px-4 sm:px-6">
          <div className="w-full lg:w-[50%]">
            <div className="container-custom text-center w-full md:w-[80%] lg:w-[60%] mx-auto">
              <h1 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                Find the Best Medical Labs Near You
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-8">
                Compare prices and book appointments at top-rated facilities
              </p>

              <div className="bg-white rounded-lg p-2 max-w-full md:max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                <input
                  type="text"
                  placeholder="Enter your location"
                  className="w-full flex-1 p-2 sm:p-3 text-gray-800 outline-none rounded text-sm sm:text-base"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <button className="btn-primary w-full sm:w-auto px-4 py-2 sm:py-3 flex items-center justify-center gap-2 text-sm sm:text-base">
                  <FaSearch /> Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 md:px-20 flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-600 mb-8">
              We enable healthy lives through unmatched diagnostic expertise and new-age technology.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {stats.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center">
                  {item.icon}
                  <div className="text-xl font-bold text-primary mt-2">{item.value}</div>
                  <p className="text-sm text-gray-600 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="container">
              <div className="box-card">
                <div className="face front">
                  <img src={labImage1} alt="Lab Technician" className="w-full h-full object-cover" />
                </div>
                <div className="face back">
                  <img src={labImage2} alt="Lab Technician" className="w-full h-full object-cover" />
                </div>
                <div className="face right">
                  <img src={labImage3} alt="Lab Technician" className="w-full h-full object-cover" />
                </div>
                <div className="face left">
                  <img src={labImage4} alt="Lab Technician" className="w-full h-full object-cover" />
                </div>
                <div className="face top">
                  <img src={labImage2} alt="Lab Technician" className="w-full h-full object-cover" />
                </div>
                <div className="face bottom">
                  <img src={labImage1} alt="Lab Technician" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat min-h-[65vh] text-white flex items-center justify-center"
        style={{ backgroundImage: `url(${Features})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative w-full max-w-6xl px-6 z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featureList.map(([title, desc], i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                {featureIcons[i % featureIcons.length]}
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Clinics Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8">Nearby Medical Facilities</h2>
        </div>

        <div className="w-[90%] max-w-[1440px] bg-gray-50 mx-auto py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <select value={country} onChange={(e) => setCountry(e.target.value)} className="p-2 border rounded">
              <option>India</option>
            </select>
            <select value={state} onChange={(e) => setState(e.target.value)} className="p-2 border rounded">
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Punjab</option>
              <option>Chandigarh</option>
              <option>Haryana</option>
            </select>
            <select value={city} onChange={(e) => setCity(e.target.value)} className="p-2 border rounded">
              <option>New Delhi</option>
              <option>Central Delhi</option>
              <option>East Delhi</option>
              <option>North Delhi</option>
              <option>North East Delhi</option>
              <option>North West Delhi</option>
              <option>South Delhi</option>
              <option>South East Delhi</option>
              <option>South West Delhi</option>
              <option>West Delhi</option>
            </select>
            <select value={language} onChange={(e) => setLanguage(e.target.value)} className="p-2 border rounded">
              <option>English</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clinics.map(clinic => (
              <div key={clinic.id} className="bg-white p-6 rounded-lg shadow-md flex gap-4 items-start">
                {clinic.image && (
                  <img src={clinic.image} alt={clinic.name} className="w-32 h-32 object-cover rounded" />
                )}
                <div>
                  <h2 className="text-xl font-semibold text-primary mb-2">{clinic.name}</h2>
                  <p className="text-gray-600 text-sm mb-1">{clinic.address}</p>
                  <p>
                    <strong>Call:</strong> {clinic.call}
                    <span className="text-blue-600 cursor-pointer ml-2">Directions</span>
                  </p>
                  <p className="mb-3">
                    <strong>Email:</strong>{' '}
                    <a href={`mailto:${clinic.email}`} className="text-blue-600">
                      {clinic.email}
                    </a>
                  </p>
                  <button className="border border-blue-600 text-blue-600 px-4 py-1 rounded hover:bg-blue-50 mb-2">
                    Get Appointment →
                  </button>
                  <div className="text-yellow-500 font-bold">★ {clinic.rating}/5</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
