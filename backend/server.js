const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const snippets = [];

app.get('/api/snippets', (req, res) => {
  res.json(snippets);
});

app.post('/api/snippets', (req, res) => {
  const snippet = req.body;
  snippets.push(snippet);
  res.status(201).json(snippet);
});

app.put('/api/snippets/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const snippet = req.body;
  snippets[id] = snippet;
  res.json(snippet);
});

app.delete('/api/snippets/:id', (req, res) => {
  const id = parseInt(req.params.id);
  snippets.splice(id, 1);
  res.status(204).send();
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));