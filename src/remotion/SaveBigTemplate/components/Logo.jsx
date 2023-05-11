import logoImage from "../assets/images/boat_logo.png";

const logo = {
  position: "absolute",
  top: "5vh",
  right: "5vw",
  zIndex: 9999
};

export const Logo = (props) => {
  return (
    <div>
      <img style={logo} src={logoImage} alt="BrandLogo" />
      {/* <img style={logo} src={props.logoImageUrl} alt='BrandLogo'/> */}
    </div>
  );
};
