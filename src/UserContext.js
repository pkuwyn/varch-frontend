import React from "react";

export const initialState = { user: null };

export const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { user: action.data };
    case "logout":
      return { user: null };

    default:
      return state;
  }
};

export const Context = React.createContext("default value");

export const useUserContext = () => {
  return React.useContext(Context);
};
