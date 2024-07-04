import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchServices } from "../store/slices/servicesSlice";

const Services = () => {
  const dispatch = useDispatch();
  const { services, status, error } = useSelector((state) => state.services);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchServices());
    }
  }, [status, dispatch]);

  let content;

  if (status === "loading") {
    content = <p>Loading...</p>;
  } else if (status === "succeeded") {
    content = services.map((service) => (
      <div key={service.id} className="p-4 border rounded shadow">
        <h3 className="font-bold">{service.name}</h3>
        <p>{service.description}</p>
      </div>
    ));
  } else if (status === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {content}
      </div>
    </div>
  );
};

export default Services;
