import axios from "../../customize/axios";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    setTimeout(() => {
      axios.get("http://localhost:8081/health").then((res) => {
        console.log(res);
      });
    }, 5000);
  }, []);
  return (
    <>
      <div>
        <h1>Example heading</h1>
      </div>
    </>
  );
};
export default About;
