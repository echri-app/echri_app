const { check, validationResult } = require("express-validator");

exports.registerRules = () => [
  check("first_name", "This field is required").notEmpty(),
  check("last_name", "This field is required").notEmpty(),
  check("email", "This field is required").notEmpty(),
  check("email", "This is not a valid email").isEmail(),
  check("phone_number", "This field is required").notEmpty(),
  check("phone_number", "This is not a valid phone number").isLength({
    min: 8,
    max: 12,
  }),
];

exports.validator = (req, res, next) => {
  const errors = validationResult(req);

  errors.isEmpty() ? next() : res.status(400).json({ errors: errors.array() });
};