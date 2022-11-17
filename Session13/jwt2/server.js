const express = require('express');
const cors = require('cors');
const app = express();
const userController = require('./controller/user');
const ProductController = require('./controller/product');
const authentication = require('./middleware/authentication');
const authorization = require('./middleware/authorization')


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.post('/login', userController.userLogin);
app.post('/register', userController.createUser);
app.use(authentication);
app.get('/products', ProductController.getAllProducts);

// authorization

app.get('/products/:id', authorization, ProductController.getProductById);

app.listen(8080, () => {
  console.log(`RUNNING http://localhost:8080`);
});










// ! npx sequelize init

// ! config.json

// ! npx sequelize db:create

// ! npx sequelize model:generate --name User --attributes username:string password:string
//* membuat model

// ! npx sequelize seed:generate --name "seeding_products_data"
//* generate seed data 

// ! npx sequelize migration:create --name "add column user id fk"

// setting miggration file, seeder and add UserId in product init.

// ! npx sequelize db:migrate

//! npx sequelize db:seed --seed 20221006043705-seeding_products_data
// seed data to db from seeders