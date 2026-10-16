const express = require('express');
const app = express();
app.use(express.json());
let students = [{ id: 1, name: 'Ganesh' }, { id: 2, name: 'Arun' }];

app.get('/students', (req, res) => res.json(students));
app.post('/students', (req, res) => {
  const { id, name } = req.body || {};
  if (!Number.isInteger(id) || typeof name !== 'string' || !name.trim()) return res.status(400).json({ error: 'Provide an integer id and nonempty name' });
  if (students.some(student => student.id === id)) return res.status(409).json({ error: 'ID already exists' });
  students.push({ id, name: name.trim() });
  res.status(201).json(students);
});
app.put('/students/:id', (req, res) => {
  const id = Number(req.params.id);
  const student = students.find(item => item.id === id);
  if (!student) return res.status(404).json({ error: 'Student not found' });
  if (typeof req.body?.name !== 'string' || !req.body.name.trim()) return res.status(400).json({ error: 'Provide a nonempty name' });
  student.name = req.body.name.trim();
  res.json(student);
});
app.delete('/students/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!students.some(student => student.id === id)) return res.status(404).json({ error: 'Student not found' });
  students = students.filter(student => student.id !== id);
  res.json({ message: 'Student Deleted' });
});
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
