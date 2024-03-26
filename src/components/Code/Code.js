import { useEffect, useRef, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "../../customize/axios";

const Code = (props) => {
  const [searchParams, setSearchParmas] = useSearchParams();
  const [message, setMessage] = useState("");
  const firstRunRef = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    const ssoToken = searchParams.get("ssoToken");
    if (ssoToken && firstRunRef.current === false) {
      firstRunRef.current = true;
      axios
        .post(
          process.env.REACT_APP_BACKEND_VERIFY_TOKEN,
          { ssoToken },
          { withCredentials: true }
        )
        .then((res) => {
          console.log(">>>> res", res);
          if (res && +res.EC === 0) {
            navigate("/");
          } else {
            setMessage(res.EM);
          }
        })
        .catch((err) => {
          console.log(">>>> error", err);
        });
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
