import axios from 'axios';

const GET_GREETING = 'helloRailsReact/GET_GREETING';

const greetingFetched = (text) => ({
  type: GET_GREETING,
  payload: {
    text,
  },
});

export const getGreeting = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3000/greetings');
    dispatch(greetingFetched(response.data));
  } catch (e) {
    console.log(e);
  }
};

export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_GREETING:
      return action.payload.text;
    default:
      return state;
  }
}
