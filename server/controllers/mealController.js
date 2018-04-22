import db from '../../dummyData';

const { meals } = db;

class mealController {
  static addMeal(req, res) {
    const {
      title, description, price,
    } = req.body;
    const id = meals[meals.length - 1].id + 1;
    const addedMeal = {
      id,
      title,
      description,
      price,
    };
    const foundMeal = meals.find(meal =>
      (meal.title.toLowerCase() === title.toLowerCase()));
    if (!foundMeal) {
      meals.push(addedMeal);
      return res.status(201).json({
        meal: addedMeal,
        status: 'Success',
        message: 'Meal added successfully',
      });
    }
    if (foundMeal) {
      if (foundMeal.id === id) {
        return res.status(409).json({
          message: `A meal with this '${id}' is already in the meal options`,
          status: 'Fail',
        });
      }
    }
    return res.status(409).json({
      message: `The meal '${foundMeal.title}' already exists in the meal option`,
      status: 'Fail',
    });
  }

  static updateMeal(req, res) {
    const foundMeal = meals.find(meal => meal.id = parseInt(req.params.mealId, 10));
    if (foundMeal) {
      foundMeal.title = req.body.title;
      foundMeal.description = req.body.description;
      foundMeal.price = req.body.price;
      return res.status(200).json({
        foundMeal,
        status: 'Success',
        message: 'Meal updated successfully',
      });
    }
    return res.status(404).json({
      status: 'Error',
      message: 'Meal not found',
    });
  }

  static removeMeal(req, res) {
    const foundMeal = meals.find(meal => meal.id === parseInt(req.params.mealId, 10));

    if (foundMeal) {
      meals.splice(foundMeal.id - 1, 1);
      return res.status(200).json({
        meals,
        status: 'Success',
        message: 'Meal was successfully removed from Menu',
      });
    }
    return res.status(404).json({
      status: 'error',
      message: 'Meal not found in menu',
    });
  }

  static getAllMeals(req, res) {
    return res.status(200).json({
      menu: meals,
      status: 'Success',
      message: 'All meals',
    });
  }

  static getmeal(req, res) {
    const { mealId } = req.params;
    const foundMeal = meals.filter(meal => meal.id === parseInt(mealId, 10));
    if (foundMeal.length === 0) {
      return res.status(404).json({
        message: 'meal does not exist in Menu',
        status: 'error',
      });
    }
    return res.status(200).json({
      meal: foundMeal,
      status: 'Success',
    });
  }
}

export default mealController;
