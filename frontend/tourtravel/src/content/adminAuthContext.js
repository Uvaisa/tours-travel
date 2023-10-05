import { createContext, useEffect, useReducer } from "react";
const i_state = {
  admin:
    localStorage.getItem("admin") !== undefined
      ? JSON.parse(localStorage.getItem("admin"))
      : null,
  loading: true,
  error: null,
};
export const AdminAuthContext = createContext(i_state);
const AdminAuthReducer = (state, action) => {
  switch (action.type) {
    case "ADMIN_LOGIN_START":
      return {
        admin: null,
        loading: false,
        error: null,
      };
    case "ADMIN_LOGIN_SUCCESS":
      return {
        admin: action.payload,
        loading: false,
        error: null,
      };
    case "ADMIN_LOGIN_FAILURE":
      return {
        admin: null,
        loading: false,
        error: action.payload,
      };
    // case "REGISTER_SUCCESS":
    //   return {
    //     user: null,
    //     loading: false,
    //     error: null,
    //   };
    case "ADMIN_LOGOUT":
      return {
        admin: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
export const AdminAuthContextProvider = ({ children }) => {
  const [state, dispatched] = useReducer(AdminAuthReducer, i_state);
  useEffect(() => {
    localStorage.setItem("admin", JSON.stringify(state.admin));
  }, [state.admin]);
  return (
    <AdminAuthContext.Provider
      value={{
        admin: state.admin,
        loading: state.loading,
        error: state.error,
        dispatched,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
};
