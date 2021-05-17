const initialState = {
  detail: "",
  data: [],
  message: "",
  errorMsg: "",
};

const restoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_RESTO": {
      return {
        ...state,
        detail: action.payload,
      };
    }
    case "GET_RESTO_LIST": {
      return {
        ...state,
        data: action.payload,
      };
    }
    case "SET_RESTO_MESSAGE": {
      return {
        ...state,
        errorMsg: action.payload,
        data: [],
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default restoReducer;
