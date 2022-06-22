import logo from "../../assets/img/logo.jpg";
import discord from "../../assets/img/discord.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="container display-flex">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="discord-connect">
          <div className="discord-block">
            <img src={discord} alt="discord" />
            <p>CONNECT DISCORD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
