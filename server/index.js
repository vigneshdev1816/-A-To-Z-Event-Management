import express from 'express';
import cors from 'cors';
import { writeFileSync, existsSync, readFileSync } from 'fs';

const app = express();
const PORT = 5000;
const DATA_FILE = './server/data.json';

app.use(cors());
app.use(express.json());

const loadData = () => {
  if (existsSync(DATA_FILE)) {
    return JSON.parse(readFileSync(DATA_FILE, 'utf8'));
  }
  return { enquiries: [], events: [] };
};

const saveData = (data) => {
  writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};

// POST /api/enquiry - Create new enquiry
app.post('/api/enquiry', (req, res) => {
  const data = loadData();
  const enquiry = {
    id: Date.now().toString(),
    ...req.body,
    createdAt: new Date().toISOString()
  };
  data.enquiries.push(enquiry);
  saveData(data);
  res.status(201).json({ message: 'Enquiry submitted successfully', enquiry });
});

// GET /api/enquiries - Get all enquiries
app.get('/api/enquiries', (req, res) => {
  const data = loadData();
  res.json(data.enquiries);
});

// POST /api/events - Add portfolio event
app.post('/api/events', (req, res) => {
  const data = loadData();
  const event = {
    id: Date.now().toString(),
    ...req.body,
    createdAt: new Date().toISOString()
  };
  data.events.push(event);
  saveData(data);
  res.status(201).json({ message: 'Event added successfully', event });
});

// GET /api/events - Get all portfolio events
app.get('/api/events', (req, res) => {
  const data = loadData();
  res.json(data.events);
});

// DELETE /api/events/:id - Delete event
app.delete('/api/events/:id', (req, res) => {
  const data = loadData();
  data.events = data.events.filter(e => e.id !== req.params.id);
  saveData(data);
  res.json({ message: 'Event deleted successfully' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});