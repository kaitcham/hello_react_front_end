import axios from 'axios';

const url = 'http://127.0.0.1:3000/v1/greetings';
const GET_GREETINGS = 'hello_react_front_end/greetings/GET_GREETINGS';

const initialState = [];

export const greetings = (payload) => ({
  type: GET_GREETINGS,
  payload,
});

export const getGreetings = () => async (dispatch) => {
  const { data } = await axios.get(url);
  dispatch(greetings(data));
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_GREETINGS:
      return payload;
    default:
      return state;
  }
};

export default reducer;
