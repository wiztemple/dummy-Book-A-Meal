import validator from 'validator';
import db from '../../dummyData';

const { meals } = db;

/*
 * Class representing validator
 *
 * @class Validator
 */
class ValidatorHandler {
  /**
   * Check for all required input fields
   *
   * @param {object} req - The request object
   * @param {object} res - The response object
   * @param {function} next - Calls the next route handler
   * @returns {object} JSON object representing failure message
   */
  static mealRequiredInputs(req, res, next) {
    const {
      title, description, price
    } = req.body;

    if (title === undefined) {
      return res.status(400)
        .json({
          status: 'Fail',
          message: 'No input was received for meal',
        });
    }

    if (description === undefined) {
      return res.status(400)
        .json({
          status: 'Fail',
          message: 'No input was received for description',
        });
    }

    if (price === undefined) {
      return res.status(400)
        .json({
          status: 'Fail',
          message: 'No input was received for price',
        });
    }

    if (validator.isEmpty(title)) {
      return res.status(400)
        .json({
          status: 'Fail',
          message: 'title name cannot be empty',
        });
    }

    if (validator.contains(title, '*') || validator.contains(title, '|')
       || validator.contains(title, '=') || validator.contains(title, '+')
       || validator.contains(title, '/') || validator.contains(title, '\\')
       || validator.contains(title, '#') || validator.contains(title, '%')
       || validator.contains(title, '@') || validator.contains(title, '!')
       || validator.contains(title, '$') || validator.contains(title, '[')
       || validator.contains(title, ']') || validator.contains(title, '(')
       || validator.contains(title, ')') || validator.contains(title, '&&')
       || validator.contains(title, ':') || validator.contains(title, ';')
       || validator.contains(title, '..') || validator.contains(title, ',')
       || validator.contains(title, '?') || validator.contains(title, '"')
       || validator.contains(title, '`') || validator.contains(title, '~')
       || validator.contains(title, '--') || validator.contains(title, '_')
       || validator.contains(title, '>') || validator.contains(title, '<')
       || validator.contains(title, '^') || validator.contains(title, "''")
       || validator.contains(title, '{') || validator.contains(title, '}')) {
      return res.status(400)
        .json({
          status: 'Fail',
          message: 'title contains invalid character',
        });
    }

    if (!validator.isLength(title, { min: 3, max: 20 })) {
      return res.status(406)
        .json({
          status: 'Fail',
          message: 'title should be 3 to 30 characters',
        });
    }

    if (validator.contains(title, '  ')) {
      return res.status(406)
        .json({
          status: 'Fail',
          message: 'Invalid title. Use single whitespace',
        });
    }

    if (title !== validator.trim(title, ' ')) {
      return res.status(406)
        .json({
          status: 'Fail',
          message: 'title cannot end/begin with whitespace',
        });
    }

   
    if (validator.isEmpty(description)) {
      return res.status(404)
        .json({
          status: 'Fail',
          message: 'description cannot be empty',
        });
    }
    if (!validator.isLength(description, { min: 15, max: 300 })) {
      return res.status(404)
        .json({
          status: 'Fail',
          message: 'description should be 30 to 300 characters',
        });
    }
    if (validator.contains(description, '  ')) {
      return res.status(404)
        .json({
          status: 'Fail',
          message: 'Invalid description: Please use single whitespace.',
        });
    }

    if (description !== validator.trim(description, ' ')) {
      return res.status(404)
        .json({
          status: 'Fail',
          message: 'Description cannot end/begin with whitespace',
        });
    }

    if (validator.contains(description, '*') || validator.contains(description, '|')
       || validator.contains(description, '=') || validator.contains(description, '+')
       || validator.contains(description, '/') || validator.contains(description, '\\')
       || validator.contains(description, '#') || validator.contains(description, '%')
       || validator.contains(description, '@') || validator.contains(description, '!')
       || validator.contains(description, '$') || validator.contains(description, '[')
       || validator.contains(description, ']') || validator.contains(description, '((')
       || validator.contains(description, '))') || validator.contains(description, '&&')
       || validator.contains(description, ':') || validator.contains(description, ';')
       || validator.contains(description, '..') || validator.contains(description, '--')
       || validator.contains(description, '()') || validator.contains(description, '""')
       || validator.contains(description, '`') || validator.contains(description, '~')
       || validator.contains(description, ',,') || validator.contains(description, '_')
       || validator.contains(description, '>') || validator.contains(description, '<')
       || validator.contains(description, '^') || validator.contains(description, "''")
       || validator.contains(description, '}') || validator.contains(description, '{')) {
      return res.status(400)
        .json({
          status: 'Fail',
          message: 'Description contains invalid character',
        });
    }

    return next();
  }

  static reviewRequiredInputs(req, res, next) {
    const { username, content } = req.body;

    if (username === undefined) {
      return res.status(400)
        .json({
          status: 'Fail',
          message: 'No input was recieved for content',
        });
    }

    if (content === undefined) {
      return res.status(400)
        .json({
          status: 'Fail',
          message: 'No input was recieved for content',
        });
    }

    if (validator.isEmpty(username)) {
      return res.status(406)
        .json({
          status: 'Fail',
          message: 'username name cannot be empty',
        });
    }

    if (!validator.isLength(username, { min: 3, max: 10 })) {
      return res.status(406)
        .json({
          status: 'Fail',
          message: 'username name should be 3 to 10 characters',
        });
    }

    if (!validator.isAlphanumeric(username)) {
      return res.status(406)
        .json({
          status: 'Fail',
          message: 'Username should be alphanumeric.',
        });
    }

    if (validator.isEmpty(content)) {
      return res.status(406)
        .json({
          status: 'Fail',
          message: 'review content cannot be empty',
        });
    }

    if (!validator.isLength(content, { min: 10, max: 100 })) {
      return res.status(406)
        .json({
          status: 'Fail',
          message: 'review content should have 10 to 100 characters',
        });
    }

    if (validator.contains(content, '  ')) {
      return res.status(406)
        .json({
          status: 'Fail',
          message: 'Invalid content: Use single whitespace.',
        });
    }

    if (validator.contains(content, '*') || validator.contains(content, '|')
       || validator.contains(content, '=') || validator.contains(content, '+')
       || validator.contains(content, '/') || validator.contains(content, '\\')
       || validator.contains(content, '#') || validator.contains(content, '%')
       || validator.contains(content, '@') || validator.contains(content, '!')
       || validator.contains(content, '$') || validator.contains(content, '[')
       || validator.contains(content, ']') || validator.contains(content, '((')
       || validator.contains(content, '))') || validator.contains(content, '&&')
       || validator.contains(content, '::') || validator.contains(content, ';;')
       || validator.contains(content, '..') || validator.contains(content, '--')
       || validator.contains(content, '()') || validator.contains(content, '""')
       || validator.contains(content, '`') || validator.contains(content, '~')
       || validator.contains(content, ',,') || validator.contains(content, '_')
       || validator.contains(content, '>') || validator.contains(content, '<')
       || validator.contains(content, '^') || validator.contains(content, "''")
       || validator.contains(content, '}') || validator.contains(content, '{')) {
      return res.status(400)
        .json({
          status: 'Fail',
          message: 'Content contains invalid character',
        });
    }

    if (content !== validator.trim(content, ' ')) {
      return res.status(406)
        .json({
          status: 'Fail',
          message: 'Content cannot end/begin with whitespace',
        });
    }

    return next();
  }

  static userRequiredInputs(req, res, next) {
    const { username, email, password } = req.body;

    if (username === undefined) {
      return res.status(406)
        .json({
          status: 'Fail',
          message: 'No input was received for username',
        });
    }

    if (password === undefined) {
      return res.status(406)
        .json({
          status: 'Fail',
          message: 'No input was received for password',
        });
    }

    if (email === undefined) {
      return res.status(406)
        .json({
          status: 'Fail',
          message: 'No input was received for email',
        });
    }

    if (validator.isEmpty(username)) {
      return res.status(406)
        .json({
          status: 'Fail',
          message: 'username cannot be empty',
        });
    }

    if (!validator.isLength(username, { min: 2, max: 20 })) {
      return res.status(406)
        .json({
          status: 'Fail',
          message: 'username should have 2 to 20 characters',
        });
    }

    if (!validator.isAlphanumeric(username)) {
      return res.status(406)
        .json({
          status: 'Fail',
          message: 'Only letter characters are allowed.',
        });
    }

    if (!validator.isEmail(email) || validator.contains(email, '-')) {
      return res.status(406)
        .json({
          status: 'Fail',
          message: 'Please use a valid email',
        });
    }

    if (!validator.isLength(email, { min: 10, max: 50 })) {
      return res.status(406)
        .json({
          status: 'Fail',
          message: 'Email should be 10 to 50 characters long',
        });
    }

    if (validator.isEmpty(password)) {
      return res.status(406)
        .json({
          status: 'Fail',
          message: 'Password cannot be empty',
        });
    }

    if (validator.contains(password, ' ')) {
      return res.status(406)
        .json({
          status: 'Fail',
          message: 'Password should not contain whitespace',
        });
    }

    if (!validator.isLength(password, { min: 4, max: 16 })) {
      return res.status(406)
        .json({
          status: 'Fail',
          message: 'Passord should be 4 to 16 characters long',
        });
    }
    return next();
  }
}

export default ValidatorHandler;
