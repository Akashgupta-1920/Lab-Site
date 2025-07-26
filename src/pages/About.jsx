import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import aboutImage from '../assets/about/a1.jpeg';

function About() {
  const testimonials = [
    {
      id: 1,
      name: "John Smith",
      role: "Patient",
      content: "The service was excellent! Quick results and professional staff.",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Regular Customer",
      content: "Best medical lab I've ever visited. Very organized and efficient.",
      rating: 5
    },
    {
      id: 3,
      name: "Michael Brown",
      role: "Patient",
      content: "Affordable prices and great customer service. Highly recommended!",
      rating: 4
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 mt-20">
      {/* About Hero Section */}
      <section
  className="relative bg-cover bg-center object-cover bg-no-repeat h-[55vh] text-white"
  style={{ backgroundImage: `url(${aboutImage})` }}
>
  <div className="container-custom h-full flex flex-col justify-center items-start pl-8">
    <h1 className="text-4xl md:text-5xl font-bold mb-6">About MediLab</h1>
    <p className="text-xl w-[600px] mb-4">Your Trusted Partner in Healthcare Diagnostics. At MediLab, we bring cutting-edge technology and expert care together to ensure timely and accurate test results.</p>
    <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-full shadow-md hover:bg-blue-100 transition">
      Learn More
    </button>
  </div>
</section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2020, MediLab has been at the forefront of medical diagnostics,
              providing accurate and reliable laboratory services to patients and healthcare
              providers across the country.
            </p>
            <p className="text-gray-600">
              Our mission is to make quality healthcare accessible to everyone by offering
              transparent pricing, state-of-the-art facilities, and exceptional customer service.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Accurate Results</h3>
              <p className="text-gray-600">State-of-the-art equipment and qualified professionals</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Turnaround</h3>
              <p className="text-gray-600">Fast and efficient service with minimal waiting time</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
              <p className="text-gray-600">Competitive rates and transparent pricing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                <FaQuoteLeft className="text-primary text-3xl mb-4" />
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;