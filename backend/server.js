const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Import routes
const callRoutes = require('./routes/callRoutes');
const userRoutes = require('./routes/userRoutes');
const reportRoutes = require('./routes/reportRoutes');

// Use routes
app.use('/api/calls', callRoutes);
app.use('/api/users', userRoutes);
app.use('/api/reports', reportRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
