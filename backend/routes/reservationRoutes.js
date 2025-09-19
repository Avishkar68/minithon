const express = require("express");
const { createReservation ,getReservations } = require("../controller/reservationController");
const router = express.Router();

router.post("/:roomId", createReservation);
router.get("/", getReservations); 

module.exports = router;