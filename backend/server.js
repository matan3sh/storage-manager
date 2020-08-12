const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

// App Init
const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

if (process.env.NODE_ENV === 'production') {
  // app.use(express.static('public'));

  app.use(express.static(path.resolve(__dirname, 'public')));
} else {
  const corsOptions = {
    origin: [
      'http://127.0.0.1:5000',
      'http://localhost:5000',
      'http://127.0.0.1:3000',
      'http://localhost:3000',
    ],
    credentials: true,
  };
  app.use(cors(corsOptions));
}

// Routes
app.use('/api/tranim', require('./api/tranim/tranim.routes'));
app.use('/api/sevev', require('./api/sevev/sevev.routes'));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Define Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
