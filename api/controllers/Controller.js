const asyncHandler = require("express-async-handler");
const { CustomError } = require("../middleware/errorMiddleware");

let services = [
  { id: 1, name: "Service 1", description: "Description of Service 1" },
  { id: 2, name: "Service 2", description: "Description of Service 2" },
  { id: 3, name: "Service 3", description: "Description of Service 3" },
];

let appointments = [];
let contacts = [];

// desc POST the contact
// @routes POST /api/contact
// @access public
const postContact = asyncHandler(async (req, res, next) => {
  try {
    const { name, email, message } = req.body;
    console.log(req.body);

    if (!name || !email || !message) {
      res.status(400);
      throw new CustomError("All fields are required", 1002, false, 400);
    }

    const newContact = { id: contacts.length + 1, name, email, message };
    contacts.push(newContact);

    res.status(201).json(newContact);
  } catch (error) {
    console.error("Signup error:", error);
    const er = new CustomError(
      error.message || "Internal Server Error",
      error.errorCode || 5003,
      error.Success || false,
      error.StatusCode || 500
    );
    next(er);
  }
});

// desc POST appointment data
// @routes POST /api/appointments
// @access public
const postAppointments = asyncHandler(async (req, res, next) => {
  try {
    const { name, email, phone, service, date, time } = req.body;

    if (!name || !email || !phone || !service || !date || !time) {
      res.status(400);
      throw new CustomError("All fields are required", 1002, false, 400);
    }

    const newAppointment = {
      id: appointments.length + 1,
      name,
      email,
      phone,
      service,
      date,
      time,
    };
    appointments.push(newAppointment);

    res.status(201).json(newAppointment);
  } catch (error) {
    console.error("Signup error:", error);
    const er = new CustomError(
      error.message || "Internal Server Error",
      error.errorCode || 5003,
      error.Success || false,
      error.StatusCode || 500
    );
    next(er);
  }
});

// desc Get all the services
// @routes GET /api/service
// @access public
const getServices = asyncHandler(async (req, res, next) => {
  try {
    res.status(200).json(services);
  } catch (error) {
    console.error("Signup error:", error);
    const er = new CustomError(
      error.message || "Internal Server Error",
      error.errorCode || 5003,
      error.Success || false,
      error.StatusCode || 500
    );
    next(er);
  }
});

module.exports = {
  postContact,
  postAppointments,
  getServices,
};
