import { useEffect, useRef, useState } from "react";
import { useSearchParams, useNavigate, Navigate } from "react-router-dom";
// import axios from "../../customize/axios";
import { useDispatch, useSelector } from "react-redux";
import { doLogin } from "../../redux/action/accountAction";
const Code = (props) => {
  const [searchParams, setSearchParmas] = useSearchParams();
  // const [message, setMessage] = useState("");
  const firstRunRef = useRef(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const message = useSelector((state) => state.account.errMessage);
  const user = useSelector((state) => state.account.userInfo);
  if (user && user.access_token) {
    navigate("/");
  }
  useEffect(() => {
    const ssoToken = searchParams.get("ssoToken");
    if (ssoToken && firstRunRef.current === false) {
      firstRunRef.current = true;
      dispatch(doLogin(ssoToken));
    }
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 mt-3">
            {message && (
              <span>
                {" "}
                Please do login again. CLick here to
                <a
                  href={`${process.env.REACT_APP_BACKEND_SSO}?serviceURL=${process.env.REACT_APP_SERVICE_URL}`}
                >
                  Login
                </a>
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Code;
