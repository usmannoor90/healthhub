const asyncHandler = require("express-async-handler");
const { CustomError } = require("../middleware/errorMiddleware");
const { Service, Appointment, Contact } = require("../Models/index");

// desc POST the contact
// @routes POST /api/contact
// @access public
const postContact = asyncHandler(async (req, res, next) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    res.status(400);
    throw new CustomError("All fields are required", 1002, false, 400);
  }

  const newContact = new Contact({ name, email, message });
  await newContact.save();

  res.status(201).json(newContact);
});

// desc POST appointment data
// @routes POST /api/appointments
// @access public
const postAppointments = asyncHandler(async (req, res, next) => {
  const { name, email, phone, service, date, time } = req.body;

  if (!name || !email || !phone || !service || !date || !time) {
    res.status(400);
    throw new CustomError("All fields are required", 1002, false, 400);
  }

  const newAppointment = new Appointment({
    name,
    email,
    phone,
    service,
    date,
    time,
  });
  await newAppointment.save();

  res.status(201).json(newAppointment);
});

// desc Get all the services
// @routes GET /api/service
// @access public
const getServices = asyncHandler(async (req, res, next) => {
  const services = await Service.find();
  res.status(200).json(services);
});

module.exports = {
  postContact,
  postAppointments,
  getServices,
};
