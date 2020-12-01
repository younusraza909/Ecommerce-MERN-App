import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";

//@desc   Create new order
//@route  GET /api/orders
//@access  Private
const addOrderItem = asyncHandler(async (req, res) => {
	const {
		orderItems,
		shippingAddress,
		paymentMethod,
		itemsPrice,
		taxPrice,
		shippingPrice,
		totalPrice,
	} = req.body;

	if (orderItems && orderItems.length === 0) {
		res.status(400);
		throw new Error("No Order Items");
	} else {
		const order = new Order({
			orderItems,
			shippingAddress,
			paymentMethod,
			itemsPrice,
			taxPrice,
			shippingPrice,
			totalPrice,
			user: req.user._id,
		});

		const createdOrder = await order.save();

		res.status(201).json(createdOrder);
	}
});


//@desc   To get order by id
//@route  GET /api/orders/:id
//@access  Private
const getOrderById = asyncHandler(async (req, res) => {
	const order=await Order.findById(req.params.id).populate('user', 'name email')

	if(order){
		res.json(order)
	}else{
		res.status(404)
		throw new Error("Order Not Found")
	}
});

export {addOrderItem,getOrderById};
