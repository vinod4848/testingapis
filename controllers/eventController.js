const Event = require('../schema/eventModel');

const EventController = {
  getAllEvents: async (req, res) => {
    try {
      const events = await Event.find();
      res.json(events);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createEvent: async (req, res) => {
    try {
      const newEvent = await Event.create(req.body);
      res.status(201).json(newEvent);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getEventById: async (req, res) => {
    try {
      const event = await Event.findById(req.params.eventId);
      if (!event) {
        return res.status(404).json({ error: 'Event not found' });
      }
      res.json(event);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  updateEventById: async (req, res) => {
    try {
      const updatedEvent = await Event.findByIdAndUpdate(req.params.eventId, req.body, { new: true });
      if (!updatedEvent) {
        return res.status(404).json({ error: 'Event not found' });
      }
      res.json(updatedEvent);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteEventById: async (req, res) => {
    try {
      const deletedEvent = await Event.findByIdAndDelete(req.params.eventId);
      if (!deletedEvent) {
        return res.status(404).json({ error: 'Event not found' });
      }
      res.json(deletedEvent);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = EventController;
