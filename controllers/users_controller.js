const Joi = require("joi");
const bcrypt = require("bcrypt");
const { User } = require("../models");

function validateUser(user) {
	const schema = Joi.object({
		email: Joi.string().min(5).max(255).required().email(),
		password: Joi.string().min(5).max(255).required(),
	});

	return schema.validate(user);
}

module.exports = {
	register: async (email, password) => {
		let user = { email, password };
		const { error } = validateUser(user);
		if (error) {
			return Promise.reject(error.details[0].message);
		}
		let userRecord = await User.findOne({ where: { email } });
		if (userRecord) {
			return Promise.reject("User already registered.");
		}
		const salt = await bcrypt.genSalt(10);
  		user.password = await bcrypt.hash(user.password, salt);
		return User.create(user);
	},
	authenticate: async (email, password) => {
		let user = await User.findOne({ where: { email } });
		if (!user) {
			return Promise.reject("Incorrect email or password.");
		}
		const validPassword = await bcrypt.compare(password, user.password);
		if (!validPassword) {
			return Promise.reject("Incorrect email or password.");
		}
		return Promise.resolve(user);
	}
};
