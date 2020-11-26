import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

//@desc    Auth User & get a token
//@route   POST /api/users/login
//@access  Public

const authUser = asyncHandler(async (req, res) => {
	const {email, password} = req.body;

	const user = await User.findOne({email});

	if (user && (await user.matchPassword(password))) {
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
			token: generateToken(user._id),
		});
	} else {
		res.status(401);
		throw new Error("invalid Email Or Password");
	}
});

//@desc    GET user profile
//@route   GET /api/users/profile
//@access  Private

const getUserProfile = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id);

	if (user) {
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
		});
	} else {
		res.status(404);
		throw new Error("User not Found");
	}
});

//@desc    Update user profile
//@route   PUT /api/users/profile
//@access  Private

const updateUserProfile = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id);

	if (user) {
		user.name = req.body.name || user.name;
		user.email = req.body.email || user.email;
		if (req.body.password) {
			user.password = req.body.password;
		}

		const updatedUser = await user.save();

		res.json({
			_id: updatedUser._id,
			name: updatedUser.name,
			email: updatedUser.email,
			isAdmin: updatedUser.isAdmin,
			token: generateToken(updatedUser._id),
		});
	} else {
		res.status(404);
		throw new Error("User not Found");
	}
});

//@desc    Register a new user
//@route   POST /api/users
//@access  Public

const registerUser = asyncHandler(async (req, res) => {
	const {name, email, password} = req.body;

	const userExist = await User.findOne({email});

	if (userExist) {
		res.status(400);
		throw new Error("User already exist");
	}

	const user = await User.create({
		name,
		email,
		password,
	});

	if (user) {
		res.status(201).json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
			token: generateToken(user._id),
		});
	} else {
		res.status(400);
		throw new Error("Invalid user data ");
	}
});

export {authUser, getUserProfile, registerUser, updateUserProfile};
