import { Logo } from "../components/Logo";
import data from "../../inputData.json";
import { useCurrentFrame, interpolate } from "remotion";
const headline3 = {
  backgroundColor: "black",
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const save_up_to = {
  color: "white",
  fontFamily: "arial",
  fontSize: "100px",
  fontWeight: "bold",
  transform: "scale(1.3)",
  margin: 0,
  padding: 0,
  textAlign: "center",
};
const reveal_overlay = {
  height: "200px",
  width: "800px",
  position: "relative",
  backgroundColor: "black",
  zIndex: 9,
  top: "15vh",
  boxShadow: "-100px 0 200px black",
};
const offer_percent = {
  color: "#ed3737",
  fontSize: "400px",
  fontWeight: "bold",
  margin: 0,
  padding: 0,
  fontFamily: "arial",
  textAlign: "center",
};
export const Headline3 = () => {
  const brandLogo = "../assets/images/" + data.logo + ".png";
  const headline3Words = data["headline3"].toUpperCase().split("|")
  const frame = useCurrentFrame();
  const moveRight = parseInt(interpolate(frame, [0, 10], [30, 100]));
  const displayOfferPercent = parseInt(interpolate(frame, [0, 13], [0, 1]));
  const displayOn = parseInt(interpolate(frame, [0, 16], [0, 1]));
  const displayEverything = parseInt(interpolate(frame, [0, 20], [0, 1]));
  const displayYouLove = parseInt(interpolate(frame, [0, 25], [0, 1]));
  const scale = interpolate(frame, [0, 36], [1, 1.3], {
    extrapolateRight: "clamp",
  });

  return (
    <div style={headline3}>
      <Logo logoImageUrl={brandLogo} />
      <div>
        <div style={{ ...reveal_overlay, left: `${moveRight}%` }}></div>
        <h1 style={{ ...save_up_to, transform: `scale(${scale})` }}>
         {headline3Words[0]}
        </h1>
        <h1
          style={{
            ...offer_percent,
            opacity: displayOfferPercent,
            transform: `scale(${scale})`,
          }}
        >
          {headline3Words[1]}
        </h1>
        <p
          style={{
            ...save_up_to,
            opacity: displayOn,
            transform: `scale(${scale})`,
          }}
        >
          {headline3Words[2]} <span style={{ opacity: displayEverything }}>{headline3Words[3]}</span>
        </p>
        <p
          style={{
            ...save_up_to,
            opacity: displayYouLove,
            transform: `scale(${scale})`,
          }}
        >
          {headline3Words[4].slice(0, 5)}{headline3Words[4][5]}
          <span
            style={{ color: "red", fontSize: "120px", marginRight: "10px" }}
          >
            {headline3Words[4][6]}
          </span>
          {headline3Words[4].slice(7)}
        </p>
      </div>
    </div>
  );
};
