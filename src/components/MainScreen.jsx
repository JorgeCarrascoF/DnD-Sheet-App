import "../styles/MainScreen.css";
import CombatBox from "./CombatBox";
import FeaturesBox from "./FeaturesBox";
import StatsBox from "./StatsBox";

const MainScreen = () => {
  return (
    <section className="main">
      <StatsBox></StatsBox>
      <CombatBox></CombatBox>
      <FeaturesBox></FeaturesBox>
    </section>
  );
};

export default MainScreen;
