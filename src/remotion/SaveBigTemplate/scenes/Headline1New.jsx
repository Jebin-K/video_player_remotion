import { Logo } from "../components/Logo";
import SLWordCloud from "../components/SLWordCloud";
import data from "../../inputData.json";
import { useCurrentFrame, interpolate } from "remotion";
export const Headline1 = () => {
  const brandLogo = "../assets/images/" + data.logo + ".png";
  const scene1 = {
    backgroundColor: "black",
    height: "100%",
    width: "100%",
    fontFamily: "arial",
    perspective: "1920px",

  };
  const flip_card = {
    backgroundColor: "black",
    width: "100%",
    height: "100%",
    perspective: "1920px",
    
  };
  const frame = useCurrentFrame();
  let rotate_angle = interpolate(frame, [75, 90], [0, 90], {
    extrapolateRight: "clamp",
  });
  rotate_angle = rotate_angle > 0 ? rotate_angle : 0;
  return (
    <div style={flip_card}>
      <div style={{ ...scene1, transform: `rotateY(${rotate_angle}deg)` }}>
        <Logo logoImageUrl={brandLogo} />
        <SLWordCloud headline={data["headline1"]} />
      </div>
    </div>
  );
};
