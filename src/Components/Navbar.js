import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <h1>Order Your favourate food</h1>
      <br />
      <div
        className="buttons"
        style={{
          display: "flex",
          width: "50%",
          margin: "auto",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to="/breakfast" className="btn1">
          Breakfast
        </Link>
        <Link to="/lunch" className="btn2">
          Lunch
        </Link>
        <Link to="/dinner" className="btn3">
          Dinner
        </Link>
        <Link to="/all" className="btn4">
          All
        </Link>
      </div>
    </>
  );
}
export default Navbar;
