const About = () => {
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold text-center">About Us</h2>
      <div className="mt-4">
        <p>
          HealthHub is dedicated to providing the best healthcare services...
        </p>
        {/* Team members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="p-4 border rounded shadow">
            <img
              src="#"
              alt="Team Member"
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="font-bold mt-2">Dr. John Smith</h3>
            <p>General Practitioner</p>
          </div>
          <div className="p-4 border rounded shadow">
            <img
              src="#"
              alt="Team Member"
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="font-bold mt-2">Dr. Jane Doe</h3>
            <p>Dentist</p>
          </div>
          <div className="p-4 border rounded shadow">
            <img
              src="#"
              alt="Team Member"
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="font-bold mt-2">Dr. Emily Jones</h3>
            <p>Pediatrician</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
