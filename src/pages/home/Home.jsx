import HeroBanner from "./heroBanner/HeroBanner";
import Popular from "./popular/Popular";
import "./style.scss";
import TopRate from "./topRate/TopRate";
import Trending from "./trending/Trending";

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRate />
    </div>
  );
};

export default Home;
