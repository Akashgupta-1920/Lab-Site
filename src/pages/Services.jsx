import { FaStar } from 'react-icons/fa';
import { useState } from 'react';
import servicesImage from '../assets/about/a2.jpeg';

const availableLabs = [
  // Existing Labs
  {
    name: "Centromed Labs",
    address: "Shadipur, Delhi",
    location: "shadipur",
    rating: 4.0,
    reviews: 5,
    tat: "12 - 24 hours",
    testsIncluded: 22,
    price: 632,
    originalPrice: 11360,
    testType: "full_body"
  },
  {
    name: "Genomia Diagnostics",
    address: "Patel Nagar, Delhi",
    location: "patel_nagar",
    rating: 4.0,
    reviews: 5,
    tat: "8 hours",
    testsIncluded: 22,
    price: 732,
    originalPrice: 9720,
    testType: "urine"
  },
  {
    name: "Thyrocare",
    address: "Karol Bagh, Delhi",
    location: "karol_bagh",
    rating: 4.4,
    reviews: 22,
    tat: "24 - 48 hours",
    testsIncluded: 22,
    price: 1032,
    originalPrice: 9790,
    testType: "full_body"
  },
  {
    name: "Dr. Lal PathLabs",
    address: "Karol Bagh, Delhi",
    location: "karol_bagh",
    rating: 4.8,
    reviews: 240,
    tat: "6 - 12 hours",
    testsIncluded: 25,
    price: 1100,
    originalPrice: 14500,
    testType: "blood"
  },
  {
    name: "SRL Diagnostics",
    address: "West Patel Nagar, Delhi",
    location: "west_patel_nagar",
    rating: 4.5,
    reviews: 185,
    tat: "12 hours",
    testsIncluded: 30,
    price: 699,
    originalPrice: 13000,
    testType: "urine"
  },
  {
    name: "BKL Hospital",
    address: "Rajendra Place, Delhi",
    location: "rajendra_place",
    rating: 4.2,
    reviews: 78,
    tat: "10 - 18 hours",
    testsIncluded: 20,
    price: 880,
    originalPrice: 10900,
    testType: "full_body"
  },

  // New Labs near Shadipur and Patel Nagar
  {
    name: "Max Healthcare",
    address: "Shadipur, Delhi",
    location: "shadipur",
    rating: 4.5,
    reviews: 150,
    tat: "4 - 12 hours",
    testsIncluded: 18,
    price: 850,
    originalPrice: 10500,
    testType: "blood"
  },
  {
    name: "Cloudnine Hospital",
    address: "Shadipur, Delhi",
    location: "shadipur",
    rating: 4.3,
    reviews: 95,
    tat: "8 - 16 hours",
    testsIncluded: 21,
    price: 920,
    originalPrice: 12400,
    testType: "full_body"
  },
  {
    name: "PathCare Labs",
    address: "Shadipur, Delhi",
    location: "shadipur",
    rating: 4.2,
    reviews: 60,
    tat: "6 - 10 hours",
    testsIncluded: 20,
    price: 650,
    originalPrice: 10500,
    testType: "urine"
  },
  {
    name: "Medanta",
    address: "Patel Nagar, Delhi",
    location: "patel_nagar",
    rating: 4.6,
    reviews: 320,
    tat: "4 - 8 hours",
    testsIncluded: 24,
    price: 1250,
    originalPrice: 15000,
    testType: "blood"
  },
  {
    name: "Venkatesh Labs",
    address: "Patel Nagar, Delhi",
    location: "patel_nagar",
    rating: 4.4,
    reviews: 200,
    tat: "8 - 12 hours",
    testsIncluded: 23,
    price: 710,
    originalPrice: 10600,
    testType: "urine"
  },
  {
    name: "Fortis Healthcare",
    address: "Patel Nagar, Delhi",
    location: "patel_nagar",
    rating: 4.7,
    reviews: 150,
    tat: "12 hours",
    testsIncluded: 30,
    price: 1150,
    originalPrice: 14500,
    testType: "full_body"
  },
  {
    name: "Care Health Labs",
    address: "Patel Nagar, Delhi",
    location: "patel_nagar",
    rating: 4.3,
    reviews: 120,
    tat: "5 - 10 hours",
    testsIncluded: 20,
    price: 950,
    originalPrice: 11800,
    testType: "biopsy"
  },
];


function Services({ addToCart }) {
  const [location, setLocation] = useState('');
  const [testType, setTestType] = useState('');
  const [sortOption, setSortOption] = useState('default');

  const filteredLabs = availableLabs.filter(lab => {
    const matchesLocation = location ? lab.location === location : true;
    const matchesTest = testType ? lab.testType === testType : true;
    return matchesLocation && matchesTest;
  });

  return (
    <div className="w-full py-8 mt-20">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center object-cover bg-no-repeat h-[55vh] text-white"
        style={{ backgroundImage: `url(${servicesImage})` }}
      >
        <div className="container-custom h-full flex flex-col justify-center items-start pl-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services on MediLab</h1>
          <p className="text-xl w-[600px] mb-4">
            Your Trusted Partner in Healthcare Diagnostics. We bring cutting-edge technology and expert care together to ensure timely and accurate test results.
          </p>
          <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-full shadow-md hover:bg-blue-100 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Main Content */}
      <h2 className="text-3xl font-bold text-primary mb-8 px-6 mt-8">Nearby Medical Labs</h2>

      <div className="flex flex-col lg:flex-row gap-10 items-start px-6 mt-8">
        {/* Left Column - Labs Listing */}
        <div className="w-full lg:w-[65%] space-y-8">
          {/* Sort Dropdown */}
          <div className="mb-4 flex justify-end">
            <label className="mr-2 font-medium">Sort By:</label>
            <select
              className="border border-gray-300 rounded px-3 py-1.5"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </select>
          </div>

          {/* Lab Cards */}
          <section className="bg-white py-4">
            <div className="space-y-6">
              {[...filteredLabs]
                .sort((a, b) => {
                  if (sortOption === 'lowToHigh') return a.price - b.price;
                  if (sortOption === 'highToLow') return b.price - a.price;
                  return 0;
                })
                .map((lab, i) => (
                  <div
                    key={i}
                    className="flex flex-col md:flex-row justify-between items-start md:items-center border rounded-lg p-4 shadow-sm hover:shadow-md transition duration-300"
                  >
                    <div className="w-full md:w-[70%]">
                      <h3 className="text-lg font-semibold text-primary">{lab.name}</h3>
                      <p className="text-gray-600 text-sm">{lab.address}</p>

                      <div className="flex gap-6 text-sm mt-2 flex-wrap">
                        <div className="flex items-center gap-1 text-yellow-500">
                          <FaStar className="text-sm" />
                          <span>{lab.rating}</span>
                          <span className="text-gray-500 ml-1">({lab.reviews} Reviews)</span>
                        </div>
                        <div>
                          <strong className="text-gray-700">TAT:</strong> {lab.tat}
                        </div>
                        <div>
                          <strong className="text-gray-700">Tests Included:</strong> {lab.testsIncluded}{" "}
                          <a href="#" className="text-blue-600 hover:underline text-sm">(View More)</a>
                        </div>
                      </div>
                    </div>

                    <div className="text-right mt-4 md:mt-0">
                      <div className="text-sm text-gray-400 line-through">₹{lab.originalPrice}</div>
                      <div className="text-2xl text-primary font-bold mb-2">₹{lab.price}</div>
                      <button
                        onClick={() => {
                          addToCart(lab);
                          alert(`${lab.name} added to cart!`);
                        }}
                        className="bg-primary text-white px-5 py-2 rounded-md hover:bg-primary-dark transition"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        </div>

        {/* Right Column - Filters */}
        <div className="w-full lg:w-[35%] bg-white shadow-lg rounded-xl p-6 sticky top-24 self-start">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Find Labs in Your Area</h3>

          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Select Location</label>
              <select
                className="w-full border rounded-md px-4 py-2"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">-- Select Area In Delhi--</option>
                <option value="shadipur">Shadipur</option>
                <option value="patel_nagar">Patel Nagar</option>
                <option value="karol_bagh">Karol Bagh</option>
                <option value="rajendra_place">Rajendra Place</option>
                <option value="rameer_marg">Rameer Marg</option>
                <option value="naraina">Naraina</option>
                <option value="west_patel_nagar">West Patel Nagar</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium">Test Type</label>
              <div className="space-y-1">
                {["blood", "urine", "full_body", "biopsy"].map((type) => (
                  <label key={type} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="testType"
                      value={type}
                      checked={testType === type}
                      onChange={(e) => setTestType(e.target.value)}
                    />
                    {type === "blood" && "Blood Test"}
                    {type === "urine" && "Urine Test"}
                    {type === "full_body" && "Full Body Checkup"}
                    {type === "biopsy" && "Biopsy & Specialized"}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input type="text" className="w-full border rounded-md px-4 py-2" placeholder="Enter your name" />
            </div>

            <div>
              <label className="block mb-1 font-medium">Phone</label>
              <input type="tel" className="w-full border rounded-md px-4 py-2" placeholder="Enter your phone" />
            </div>

            <div>
              <label className="block mb-1 font-medium">Address</label>
              <textarea rows={2} className="w-full border rounded-md px-4 py-2" placeholder="Enter your address" />
            </div>

            <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white py-2 rounded-md transition">
              Get Best Deal
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Services;
