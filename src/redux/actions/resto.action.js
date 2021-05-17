import http from "../../helpers/http";

export const restoList = (search) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "SET_RESTO_MESSAGE",
        payload: "",
        message: "",
      });
      const response = await http().get(`resto?search=${search ? search : ""}`);
      dispatch({
        type: "GET_RESTO_LIST",
        payload: response.data.results,
      });
    } catch (err) {
      const { message } = err.response.data;
      dispatch({
        type: "SET_RESTO_MESSAGE",
        payload: message,
      });
    }
  };
};

export const selectResto = (resto) => ({
  type: "SELECT_RESTO",
  payload: resto,
});
