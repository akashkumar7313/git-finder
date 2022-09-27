import { useReducer } from "react";
import { REMOVE_ALERT, SET_ALERT } from "../types";
import alertContext from "./alertContext";
import alertReducer from "./alertReducer";

const AlertState = props => {
    const initialState = {
        alert: null
    };

    const [state, dispatch] = useReducer(alertReducer, initialState);

    /**
   * Initializes Alert state
   * @param msg string
   * @param type String
   */
  const setAlert = (msg, type) => {
    dispatch({
        type: SET_ALERT,
        payload: {
          msg: msg,
          type: type
    }});
    setTimeout(() => {
      dispatch({
        type: REMOVE_ALERT});
    }, 3000);
  }
  return (<alertContext.Provider
    value={{
      alert: state.alert,
      setAlert
    }}
    >
      {props.children}
    </alertContext.Provider>
)}
 
  

export default AlertState;