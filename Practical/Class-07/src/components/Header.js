import { Title } from "./Title";

export const Header = () => {
  return (
    <div id="header">
      <Title />
      <h1>Chuku's Kitchen</h1>
      <div id="nav-items">
        <ul>
          <li id="home">Home</li>
          <li id="aboutme">About me</li>
          <li id="contactus">Contact Us</li>
        </ul>
      </div>
    </div>
  );
};
