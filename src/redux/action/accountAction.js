import axios from "../../customize/axios";

export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_FAILED = "USER_LOGIN_FAILED";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";

export const doLogin = (ssoToken) => {
  return async (dispatch, getState) => {
    dispatch({ type: USER_LOGIN_REQUEST });
    axios
      .post(
        process.env.REACT_APP_BACKEND_VERIFY_TOKEN,
        { ssoToken },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(">>>> res", res);
        if (res && +res.EC === 0) {
          dispatch({ type: USER_LOGIN_SUCCESS, user: res.DT });
        } else {
          //   setMessage(res.EM);
          dispatch({ type: USER_LOGIN_FAILED, error: res.EM });
        }
      })
      .catch((err) => {
        dispatch({ type: USER_LOGIN_FAILED, error: "Something worng....." });
        console.log(">>>> error", err);
      });
  };
  // logic here that can dispatch actions or read state
};
