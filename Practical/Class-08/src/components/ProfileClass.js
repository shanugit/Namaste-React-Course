import React from "react";

class Profile extends React.Component {
  constructor(props) {
    console.log(1);
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    // API call we need to do here
    console.log(3);
  }

  render() {
    console.log(2);
    return (
      <div>
        <h1>Class component</h1>
        <h2>Reading props from class based component</h2>
        <h2>Name - {this.props?.name}</h2>
        <h2>Count {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: 6,
            });
          }}
        >
          Set Count
        </button>
      </div>
    );
  }
}

export default Profile;
