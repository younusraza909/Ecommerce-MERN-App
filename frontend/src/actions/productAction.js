import {
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_ERROR,
	PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";

import axios from "axios";

//we can  add a function in function due to redux thunk
export const listProducts = () => async (dispatch) => {
	try {
		dispatch({type: PRODUCT_LIST_REQUEST});

		const {data} = await axios.get("/api/products");

		dispatch({type: PRODUCT_LIST_SUCCESS, payload: data});
	} catch (error) {
		dispatch({
			type: PRODUCT_LIST_ERROR,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
