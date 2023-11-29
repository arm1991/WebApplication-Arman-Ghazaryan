import { createStore } from "redux";

function reducer(state, action) {
  if (action.type === "change_details") {
    return {
      ...state,
      clients: state.clients.map((user, idx) => {
        if (action.id === idx)
          return {
            ...user,
            openDetails: !user.openDetails,
          };
        return user;
      }),
    };
  } else if (action.type === "add_clients") {
    return {
      ...state,
      clients: action.data.map((user) => {
        return {
          ...user,
          openDetails: false,
        };
      }),
    };
  }
  return state;
}

const store = createStore(reducer, {
  clients: [],
});

export default store;
