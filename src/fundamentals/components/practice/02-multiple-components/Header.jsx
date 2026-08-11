const Header = () => {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <h1>My React Website</h1>
      <ul style={{ display: "flex", listStyle: "none" }}>
        <li>Home</li>
        <li style={{ margin: "0px 10px" }}>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};
export default Header;
