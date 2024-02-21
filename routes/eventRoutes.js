const express = require('express');
const EventController = require("../controllers/eventController");

const router = express.Router();

router.get('/events', EventController.getAllEvents);
router.post('/events', EventController.createEvent);
router.get('/events/:eventId', EventController.getEventById);
router.put('/events/:eventId', EventController.updateEventById);
router.delete('/events/:eventId', EventController.deleteEventById);

module.exports = router;
