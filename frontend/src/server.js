const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:4200', // URL do seu frontend Angular
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
