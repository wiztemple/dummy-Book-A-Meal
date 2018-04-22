import express from 'express';
import logger from 'volleyball';
// import config from 'dotenv';
import bodyParser from 'body-parser';
// import db from './models/index';
import routes from './server/routes';

// config.config();

const port = process.env.PORT || 7000;
const app = express();

// log every request to
app.use(logger);

// parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);
// app.use('/api/v1/users', userRoutes);
// app.use('/api/v1/recipes', recipeRoutes);
app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
// db.sequelize.sync().then(() => {
  
// });

export default app;