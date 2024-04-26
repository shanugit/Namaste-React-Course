import React from "react";
import ProfileClass from "./ProfileClass";
import Profile from "./Profile";
import UserContext from "../utils/UserContext";

const AboutMe = () => {
  return (
    <div id="about-me">
      <Profile name={"Suman Das"} />
      <ProfileClass name={"Suman"} />
      <div id="display-aboutme">
        About me - I am Suman Das, a software developer, trying to be best at
        what I do
      </div>
      <div id="aboutme"></div>
    </div>
  );
};

class AboutMe2 extends React.Component {
  contructor(props) {
    // super(props);
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  render() {
    return (
      <div id="about-me">
        <UserContext.Consumer>
          {({ user }) => {
            return (
              <h2>
                {user.name} - {user.mail}
              </h2>
            );
          }}
        </UserContext.Consumer>
        <Profile name={"Suman Das"} />
        <ProfileClass name={"Suman"} />
        <div id="display-aboutme">
          About me - I am Suman Dass, a software developer, trying to be best at
          what I do
        </div>
      </div>
    );
  }
}

export default AboutMe2;
