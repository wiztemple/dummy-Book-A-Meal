import meal from '../controllers/mealController';
import Auth from '../controllers/userController';
import ValidatorHandler from '../middlewares/validation';

const routes = (app) => {
  app.get('/', (req, res) => {
    res.status(200).send('Welcome to Book-A-Meal');
  });
  // add meal
  app.post('/api/v1/meals', meal.addMeal);
  // update meal
  app.put('/api/v1/meals/:mealId', meal.updateMeal);
  // get all meals
  app.get('/api/v1/meals', meal.getAllMeals);
  // remove a meal
  app.delete('/api/v1/meals/:mealId', meal.removeMeal);

  // get a meal
  // app.get('/api/v1/meals/:mealId', meal.getMeal);

  // sign up a user
  app.post('/api/v1/auth/signup', ValidatorHandler.userRequiredInputs, Auth.signupUser);
  // Login a user
  app.post('/api/v1/auth/signin', Auth.signinUser);
};

export default routes;
