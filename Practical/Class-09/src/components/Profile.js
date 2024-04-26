const Profile = (props) => {
  return (
    <div>
      <h1>Functional Component</h1>
      <h2>
        Reading props from functional component <br />
        Name - {props?.name}
      </h2>
    </div>
  );
};

export default Profile;
