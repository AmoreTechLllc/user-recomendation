const express = require('express');
const app = express();
const data = require('./data.json'); // Assuming the instances data is in instances.json

app.get('/api/filter-instances', (req, res) => {
  const categories = req.query.categories;
  if (!categories || !Array.isArray(categories.split(',')) || categories.split(',').length === 0) {
    return res.status(400).json({ error: 'Invalid or missing categories parameter.' });
  }

  const categoryArray = categories.split(',');

  const filteredInstances = data.filter((instance) => {
    for (const category of categoryArray) {
      if (instance.cat.includes(category)) {
        return true;
      }
    }
    return false;
  });

  res.json(filteredInstances);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
