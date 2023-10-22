import { NavLink } from "react-router-dom";
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
        <NavLink
          to="/breakfast"
          className="btn1"
          style={{
            padding: "1rem",
            backgroundColor: "lightblue",
            textDecoration: "none",
            fontFamily: "monospace",
          }}
        >
          Breakfast
        </NavLink>
        <NavLink
          to="/lunch"
          className="btn2"
          style={{
            padding: "1rem",
            backgroundColor: "lightblue",
            textDecoration: "none",
            fontFamily: "monospace",
          }}
        >
          Lunch
        </NavLink>
        <NavLink
          to="/dinner"
          className="btn3"
          style={{
            padding: "1rem",
            backgroundColor: "lightblue",
            textDecoration: "none",
            fontFamily: "monospace",
          }}
        >
          Dinner
        </NavLink>
        <NavLink
          to="/all"
          className="btn4"
          style={{
            padding: "1rem",
            backgroundColor: "lightblue",
            textDecoration: "none",
            fontFamily: "monospace",
          }}
        >
          All
        </NavLink>
      </div>
    </>
  );
}
export default Navbar;
