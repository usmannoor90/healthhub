const express = require("express");
const {
  postContact,
  postAppointments,
  getServices,
} = require("../controllers/Controller");

const router = express.Router();

router.post("/appointments", postAppointments);
router.post("/contact", postContact);
router.get("/service", getServices);

module.exports = router;
