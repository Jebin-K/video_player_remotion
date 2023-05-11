import { Logo } from "../components/Logo";
import data from "../../inputData.json";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";

const headline2 = {
  backgroundColor: "white",
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const background = {
  backgroundColor: "black",
  height: "100%",
  width: "100%",
};
let heading = {
  color: "black",
  fontFamily: "arial",
  padding: "20px",
};
export const Headline2 = () => {
  const { fps, width } = useVideoConfig();
  const frame = useCurrentFrame() - 15;
  const brandLogo = "../assets/images/" + data.logo + ".png";
  let headLine2 = data["headline2"].toUpperCase().split(" ");
  // headLine2 = headLine2.toUpperCase().split(" ");
  heading = { ...heading, fontSize: `${width*0.092}px` };

  const springDamp = parseInt(
    spring({
      frame,
      fps,
    }) * 100
  );

  const moveDown =
    -20 +
    parseInt(
      interpolate(springDamp, [15, 35], [0, 40], {
        extrapolateLeft: "clamp",
      })
    );
  const rotate_frame = useCurrentFrame();
  const rotate = parseInt(
    interpolate(rotate_frame, [35, 40], [11, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const flickering =
    parseInt(
      interpolate(rotate_frame, [0, 15], [1, 7], {
        extrapolateRight: "clamp",
        extrapolateLeft: "clamp",
      })
    ) % 2;
  return (
    <div style={background}>
      <div style={{ ...headline2, opacity: flickering }}>
        <Logo logoImageUrl={brandLogo} />

        <h1 style={heading}>{headLine2[0]}</h1>
        <div
          style={{
            ...heading,
            fontWeight: "bold",
            rotate: `${rotate}deg`,
            position: "relative",
            top: `${moveDown}px`,
          }}
        >
          {headLine2[1]}
        </div>
        <h1 style={{ ...heading, color: "red" }}> {headLine2[2]}</h1>
      </div>
    </div>
  );
};
