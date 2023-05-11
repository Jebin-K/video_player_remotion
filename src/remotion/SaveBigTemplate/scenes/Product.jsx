import { Logo } from "../components/Logo";
import data from "../../inputData.json";
import {
  Img,
  staticFile,
  interpolate,
  useVideoConfig,
  useCurrentFrame,
} from "remotion";
const product = {
  backgroundColor: "white",
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const image = {
  height: "850px",
  width: "auto",
  margin: "auto",
  filter: "drop-shadow(90px 90px 110px black)",
};
const bgColors = ["#FCC8D1", "#F8EAD8", "#C0DBEA", "#ECF2FF", "#FF8787"];
export const Product = (props) => {
  const brandLogo = "../assets/images/" + data.logo + ".png";
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = interpolate(frame, [0, 50], [1, 1.1], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        ...product,
        backgroundColor: bgColors[props.index % bgColors.length],
      }}
    >
      <Logo logoImageUrl={brandLogo} />
      <div>
        <Img
          style={{ ...image, transform: `scale(${scale})` }}
          src={staticFile(`/${props.productName}.png`)}
        />
      </div>
    </div>
  );
};
