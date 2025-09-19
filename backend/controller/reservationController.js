const Reservation = require("../models/Reservation");

// @desc    Create new reservation
// @route   POST /api/reservations/:roomId
// @access  Public
const createReservation = async (req, res) => {
  try {
    const { name, email, months, price } = req.body;
    const { roomId } = req.params;

    if (!name || !email || !months || !price) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const totalPrice = price * months + 500; // Adding service fee

    const reservation = await Reservation.create({
      name,
      email,
      roomId,
      months,
      totalPrice,
    });

    res.status(201).json({
      success: true,
      message: "Reservation created successfully",
      data: reservation,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const getReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: reservations.length,
      data: reservations,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = { createReservation, getReservations };
