import logo from "assets/images/logo.png"
import { Link } from "react-router-dom";
import { LogoProps } from "types/global";

export const Logo = ({ width, height, navigate = "/" }: LogoProps) => (
  <Link to={navigate}>
    <img src={logo} alt="brand logo" width={width} height={height} />
  </Link>
);
