const Title = () => {
  return (
    <img
      className="app-logo"
      src="https://cdn.dribbble.com/users/630677/screenshots/3833541/media/201454f743f48c415a38c49419275692.jpg?resize=450x338&vertical=center"
      alt="App Logo"
    />
  );
};

const Header = () => {
  return (
    <div className="app-header">
      <Title />
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Header;
