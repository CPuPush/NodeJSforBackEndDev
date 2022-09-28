const express = require('express');
const cors = require('cors');
const app = express();
const ejs = require('ejs');
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({
  extended:true
}));

app.set('view engine', 'ejs');

app.set('views', 'TODOLIST/views/pages');

app.use('/static', express.static(`${__dirname}/public`));

// Import the routes
const todoRoutes = require('./routes/todos');

// configure the app
app.use(todoRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`app started on port http://localhost:${PORT}`);
});
