import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header/Header";
import { useEffect } from "react";
import { doGetAccount } from "./redux/action/accountAction";
import HashLoader from "react-spinners/HashLoader";
import axios from "./customize/axios";
const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.account.userInfo);
  const isLoading = useSelector((state) => state.account.isLoading);

  useEffect(() => {
    if (user && !user.access_token) {
      dispatch(doGetAccount());
    }
  }, []);

  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50% -50%)",
  };
  return (
    <>
      {isLoading === true ? (
        <div style={style}>
          <HashLoader color={"#36d7b7"} loading={true} size={150} />
        </div>
      ) : (
        <div className="App">
          <Header />
        </div>
      )}
    </>
  );
};

export default App;
