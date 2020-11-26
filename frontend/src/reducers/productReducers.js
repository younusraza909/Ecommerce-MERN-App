import {
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_ERROR,
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_DETAILS_ERROR,
} from "../constants/productConstants";

export const productListReducer = (state = {products: []}, action) => {
	switch (action.type) {
		case PRODUCT_LIST_REQUEST:
			return {...state, loading: true, products: []};
		case PRODUCT_LIST_SUCCESS:
			return {...state, loading: false, products: action.payload};
		case PRODUCT_LIST_ERROR:
			return {...state, loading: false, error: action.payload};
		default:
			return state;
	}
};

export const productDetailsReducer = (
	state = {product: {reviews: []}},
	action
) => {
	switch (action.type) {
		case PRODUCT_DETAILS_REQUEST:
			return {loading: true, ...state};
		case PRODUCT_DETAILS_SUCCESS:
			return {...state, loading: false, product: action.payload};
		case PRODUCT_DETAILS_ERROR:
			return {...state, loading: false, error: action.payload};
		default:
			return state;
	}
};
