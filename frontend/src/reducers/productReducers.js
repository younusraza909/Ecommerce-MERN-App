import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_ERROR,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_ERROR,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_RESET,
} from "../constants/productConstants";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { ...state, loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { ...state, loading: false, products: action.payload };
    case PRODUCT_LIST_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state };
    case PRODUCT_DETAILS_SUCCESS:
      return { ...state, loading: false, product: action.payload };
    case PRODUCT_DETAILS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return { loading: true };
    case PRODUCT_DELETE_SUCCESS:
      return { ...state, loading: false, success: true };
    case PRODUCT_DELETE_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        product: action.payload,
      };

    case PRODUCT_CREATE_FAIL:
      return { ...state, loading: false, error: action.payload };
    case PRODUCT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};
