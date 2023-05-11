import { useVideoConfig, useCurrentFrame, spring } from "remotion";
import { Logo } from "../components/Logo";
import data from "../../inputData.json";
import SearchIcon from "@mui/icons-material/Search";
import BrandIcon from "../assets/images/boat_icon.png";
import { loadFont } from "@remotion/google-fonts/OpenSans";
const { fontFamily } = loadFont();
const finalscreen = {
  backgroundColor: "black",
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

export const FinalScreen = () => {
  const brandLogo = "../assets/images/" + data.logo + ".png";
  const { width, height } = useVideoConfig();
  const searchBoxWidth = `${width == 1080 ? width * 0.8 : width * 0.5}px`;
  const searchBoxHeight = `${width == 1080 ? height * 0.05 : height * 0.09}px`;
  const searchBorderRadius = `${
    width == 1080 ? height * 0.02 : height * 0.035
  }px`;
  const searchIconSize = `${width == 1080 ? height * 0.045 : height * 0.08}px`;

  const searchBox = {
    width: searchBoxWidth,
    height: searchBoxHeight,
    border: "3px solid white",
    borderRadius: searchBorderRadius,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  };
  const searchIcon = {
    fontSize: searchIconSize,
    color: "white",
  };
  const url = {
    margin: "0px 0px 0px 50px",
    padding: 0,
    fontSize: "55px",
    textAlign: "center",
    position: "relative",
    top: "59%",
    transform: "translateY(-50%)",
    fontFamily,
    fontWeight: 300,
  };
  const shopNow = {
    backgroundColor: "red",
    height: "150px",
    width: "370px",
    margin: "60px",
    borderRadius: "30px",
    transitionProperty: "background",
  };
  const shopNowText = {
    margin: 0,
    padding: 0,
    color: "white",
    fontSize: "60px",
    fontWeight: "bold",
    textAlign: "center",
    position: "relative",
    fontFamily: "arial",
    top: "50%",
    transform: "translateY(-50%)",
  };
  const brandIcon = {
    width: "500px",
    margin: "70px",
  };

  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity =
    1 -
    spring({
      fps,
      frame,
    });

  const click = {
    height: "200px",
    width: "400px",
    position: "absolute",
    borderRadius: "30px",
    backgroundColor: "black",
    zIndex: 999,
    top: `${width == 1080 ? width * 1.01 : width * 0.35}px`,
    opacity: opacity,
  };

  return (
    <div style={finalscreen}>
      <Logo logoImageUrl={brandLogo} />
      <div>
        <img style={brandIcon} src={BrandIcon} alt="BrandIcon" />
      </div>
      <div style={searchBox}>
        <p style={{ ...url, color: "white" }}>{data.finalUrl}</p>
        <p style={{ ...url, color: "grey" }}> &nbsp;|</p>
        <SearchIcon style={searchIcon} />
      </div>
      <div style={click}></div>
      <div style={shopNow}>
        <p style={shopNowText}>Shop Now</p>
      </div>
    </div>
  );
};
