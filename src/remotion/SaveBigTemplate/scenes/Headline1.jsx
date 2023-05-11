import { Logo } from "../components/Logo";
import data from "../../inputData.json";
import { useCurrentFrame, interpolate } from "remotion";

// const heading1 = data["headline1"].toUpperCase().substring(0, 8);
const heading1 = data["headline1"].toUpperCase()
const scene1 = {
  backgroundColor: "black",
  height: "100%",
  width: "100%",
  fontFamily: "arial",
  perspective: "1000px",
};

const item1 = {
  fontSize: "85px",
  color: "#ed3737",
  position: "absolute",
  left: "50px",
  top: "-90px",
};
const item2 = {
  fontSize: "90px",
  color: "#ed3737",
  position: "absolute",
  right: "-250px",
  rotate: "90deg",
  top: "390px",
};
const item3 = {
  fontSize: "80px",
  color: "#ed3737",
  position: "absolute",
  left: "430px",
  rotate: "90deg",
  top: "480px",
};
const item4 = {
  fontSize: "60px",
  color: "white",
  position: "absolute",
  left: "400px",
  rotate: "90deg",
  top: "550px",
};
const item5 = {
  fontSize: "45px",
  color: "white",
  position: "absolute",
  right: "600px",
  top: "380px",
};
const item6 = {
  fontSize: "28px",
  color: "#ed3737",
  position: "absolute",
  left: "470px",
  bottom: "-10px",
};
const item7 = {
  fontSize: "50px",
  color: "white",
  position: "absolute",
  left: "396px",
  top: "125px",
};
const item8 = {
  fontSize: "85px",
  color: "white",
  position: "absolute",
  right: "250px",
  top: "-90px",
};
const item9 = {
  fontSize: "50px",
  color: "#ed3737",
  position: "absolute",
  right: "550px",
  top: "140px",
};
const item10 = {
  fontSize: "50px",
  color: "white",
  position: "absolute",
  right: "280px",
  top: "250px",
};
const item11 = {
  fontSize: "75px",
  color: "white",
  position: "absolute",
  right: "310px",
  bottom: "-50px",
};
const item12 = {
  fontSize: "60px",
  color: "white",
  position: "absolute",
  left: "35px",
  bottom: "30px",
};
const item13 = {
  fontSize: "65px",
  color: "white",
  position: "absolute",
  left: "-190px",
  bottom: "400px",
  rotate: "90deg",
};
const item14 = {
  fontSize: "65px",
  color: "#ed3737",
  position: "absolute",
  left: "-30px",
  bottom: "400px",
  rotate: "90deg",
};
const item15 = {
  fontSize: "40px",
  color: "#ed3737",
  position: "absolute",
  left: "350px",
  top: "250px",
};
const item16 = {
  fontSize: "45px",
  color: "white",
  position: "absolute",
  left: "280px",
  top: "500px",
  rotate: "90deg",
};
const item17 = {
  fontSize: "45px",
  color: "#ed3737",
  position: "absolute",
  left: "25px",
  bottom: "-50px",
};
const item18 = {
  fontSize: "45px",
  color: "#ed3737",
  position: "absolute",
  right: "120px",
  bottom: "315px",
  rotate: "90deg",
};
const item19 = {
  fontSize: "45px",
  color: "white",
  position: "absolute",
  right: "600px",
  bottom: "360px",
};
const item20 = {
  fontSize: "45px",
  color: "white",
  position: "absolute",
  right: "390px",
  bottom: "150px",
};
const item21 = {
  fontSize: "30px",
  color: "#ed3737",
  position: "absolute",
  right: "400px",
  bottom: "290px",
};
const item22 = {
  fontSize: "30px",
  color: "#ed3737",
  position: "absolute",
  right: "720px",
  bottom: "290px",
};

const flip_card = {
  backgroundColor: "black",
  width: "100%",
  height: "100%",
  perspective: "1920px",
};
export const Headline1 = () => {
  const brandLogo = "../assets/images/" + data.logo + ".png";
  const frame = useCurrentFrame();
  let rotate_angle = interpolate(frame, [75, 90], [0, 90], {
    extrapolateRight: "clamp",
  });
  rotate_angle = rotate_angle > 0 ? rotate_angle : 0;
  const showItem1 = parseInt(
    interpolate(frame, [0, 5], [0, 1], {
      extrapolateRight: "clamp",
    })
  );
  const showItem2 = parseInt(
    interpolate(frame, [5, 15], [0, 1], {
      extrapolateRight: "clamp",
    })
  );
  const showItem3 = parseInt(
    interpolate(frame, [15, 25], [0, 1], {
      extrapolateRight: "clamp",
    })
  );
  const showItem4 = parseInt(
    interpolate(frame, [25, 35], [0, 1], {
      extrapolateRight: "clamp",
    })
  );
  const showItem5 = parseInt(
    interpolate(frame, [35, 40], [0, 1], {
      extrapolateRight: "clamp",
    })
  );
  const showItem6 = parseInt(
    interpolate(frame, [40, 45], [0, 1], {
      extrapolateRight: "clamp",
    })
  );
  const showItem7 = parseInt(
    interpolate(frame, [45, 50], [0, 1], {
      extrapolateRight: "clamp",
    })
  );
  const showItem8 = parseInt(
    interpolate(frame, [50, 55], [0, 1], {
      extrapolateRight: "clamp",
    })
  );
  const showItem9 = parseInt(
    interpolate(frame, [55, 60], [0, 1], {
      extrapolateRight: "clamp",
    })
  );
  const showItem10 = parseInt(
    interpolate(frame, [65, 70], [0, 1], {
      extrapolateRight: "clamp",
    })
  );

  return (
    <div style={flip_card}>
      <div style={{ ...scene1, transform: `rotateY(${rotate_angle}deg)` }}>
        <Logo logoImageUrl={brandLogo} />
        <div style={{ ...item1, opacity: showItem1 }}>
          <h1>{heading1}</h1>
        </div>
        <div style={{ ...item2, opacity: showItem2 }}>
          <h1>{heading1}</h1>
        </div>
        <div style={{ ...item3, opacity: showItem3 }}>
          <h1>{heading1}</h1>
        </div>
        <div style={{ ...item4, opacity: showItem4 }}>
          <h1>{heading1}</h1>
        </div>
        <div style={{ ...item5, opacity: showItem5 }}>
          <h1>{heading1}</h1>
        </div>
        <div style={{ ...item6, opacity: showItem5 }}>
          <h1>{heading1}</h1>
        </div>
        <div style={{ ...item7, opacity: showItem6 }}>
          <h1>{heading1}</h1>
        </div>
        <div style={{ ...item8, opacity: showItem6 }}>
          <h1>{heading1}</h1>
        </div>
        <div style={{ ...item9, opacity: showItem6 }}>
          <h1>{heading1}</h1>
        </div>
        <div style={{ ...item10, opacity: showItem7 }}>
          <h1>{heading1}</h1>
        </div>
        <div style={{ ...item11, opacity: showItem7 }}>
          <h1>{heading1}</h1>
        </div>
        <div style={{ ...item12, opacity: showItem7 }}>
          <h1>{heading1}</h1>
        </div>
        <div style={{ ...item13, opacity: showItem8 }}>
          <h1>{heading1}</h1>
        </div>
        <div style={{ ...item14, opacity: showItem8 }}>
          <h1>{heading1}</h1>
        </div>
        <div style={{ ...item15, opacity: showItem8 }}>
          <h1>{heading1}</h1>
        </div>
        <div style={{ ...item16, opacity: showItem9 }}>
          <h1>{heading1}</h1>
        </div>
        <div style={{ ...item17, opacity: showItem9 }}>
          <h1>{heading1}</h1>
        </div>
        <div style={{ ...item18, opacity: showItem9 }}>
          <h1>{heading1}</h1>
        </div>
        <div style={{ ...item19, opacity: showItem9 }}>
          <h1>{heading1}</h1>
        </div>
        <div style={{ ...item20, opacity: showItem9 }}>
          <h1>{heading1}</h1>
        </div>
        <div style={{ ...item21, opacity: showItem9 }}>
          <h1>{heading1}</h1>
        </div>
        <div style={{ ...item22, opacity: showItem10 }}>
          <h1>{heading1}</h1>
        </div>
      </div>
    </div>
  );
};
