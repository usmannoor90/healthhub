import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitContact } from "../store/slices/formSlice";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const dispatch = useDispatch();
  const { contactStatus, contactError } = useSelector((state) => state.form);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitContact(formData));
  };

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded p-2"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Send
        </button>
        {contactStatus === "loading" && <p>Loading...</p>}
        {contactStatus === "failed" && <p>{contactError}</p>}
        {contactStatus === "succeeded" && <p>Message sent successfully!</p>}
      </form>
      <div className="mt-8">
        <h3 className="text-xl font-bold">Our Location</h3>
        <p>123 Health St, Wellness City, WH 12345</p>
      </div>
    </div>
  );
};

export default Contact;
