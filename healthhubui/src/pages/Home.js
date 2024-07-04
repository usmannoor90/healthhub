import { Link } from "react-router-dom";
// import heroImage from "../assets/hero-image.jpg"; // Example image

const Home = () => {
  return (
    <div>
      <section className="bg-blue-600 text-white p-8 text-center">
        <h1 className="text-4xl font-bold">Welcome to HealthHub</h1>
        <p className="mt-4">
          Your one-stop solution for all healthcare services
        </p>
        <Link
          to="/appointment"
          className="mt-8 inline-block bg-white text-blue-600 px-4 py-2 rounded"
        >
          Book an Appointment
        </Link>
      </section>
      <section className="container mx-auto my-8">
        <h2 className="text-2xl font-bold text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {/* Example services */}
          <div className="p-4 border rounded shadow">
            <h3 className="font-bold">General Consultation</h3>
            <p>Get professional advice and consultations from our experts.</p>
          </div>
          <div className="p-4 border rounded shadow">
            <h3 className="font-bold">Dental Care</h3>
            <p>Comprehensive dental care services for all ages.</p>
          </div>
          <div className="p-4 border rounded shadow">
            <h3 className="font-bold">Pediatrics</h3>
            <p>Specialized care for infants, children, and adolescents.</p>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 p-8">
        <h2 className="text-2xl font-bold text-center">Testimonials</h2>
        <div className="container mx-auto mt-4">
          {/* Example testimonial */}
          <div className="bg-white p-4 rounded shadow my-4">
            <p>
              "HealthHub provided excellent service and care for my family.
              Highly recommend!" - Jane Doe
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
