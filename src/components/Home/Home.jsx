import "./Home.css";
import Leftside from "../Home/Leftside";
import Rightside from "../Home/Rightside";

const Home = () => {
  return (
    <div className="Home">
      <Leftside />
      <Rightside />
    </div>
  );
};

export default Home;
