import "./Hero.css";
import arrow_btn from "../../assets/arrow_btn.png";
import play_icon from "../../assets/play_icon.png";
import pause_icon from "../../assets/pause_icon.png";

const Hero = ({
  heroData,
  setHeroCount,
  heroCount,
  setPlayStatus,
  playStatus,
  totalCount,
}) => {
  return (
    <div className="hero">
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div
        className="hero-explore"
        onClick={() => {
          const exploresection = document.getElementById("about");
          if (exploresection) {
            exploresection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <p>Explore the Features</p>
        <img src={arrow_btn} alt="" />
      </div>

      <div className="hero-dot-play">
        <ul className="hero-dots">
          {[...Array(totalCount)].map((_, idx) => (
            <li
              key={idx}
              onClick={() => setHeroCount(idx)}
              className={heroCount === idx ? "hero-dot orange" : "hero-dot"}
            ></li>
          ))}
        </ul>
        <div className="hero-play">
          <img
            onClick={() => setPlayStatus(!playStatus)}
            src={playStatus ? pause_icon : play_icon}
            alt=""
          />
          <p>See the Video</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
