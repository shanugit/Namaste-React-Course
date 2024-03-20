import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="header-component">
      <img
        src="https://t4.ftcdn.net/jpg/05/90/45/35/360_F_590453560_ugMuPncnGYB6XnJqmC8xiPQx4eg3jmMD.jpg"
        alt="logo"
        id="logo"
      />
      <h2 id="kitchen-name">Suman - Software Developer</h2>
      <div id="nav-items">
        <ul>
          <li>
            <Link to="/" style={{ color: "lightblue" }}>
              Home{" "}
            </Link>
          </li>
          <li>
            <Link to="/aboutme" style={{ color: "lightblue" }}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="/contactus" style={{ color: "lightblue" }}>
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
