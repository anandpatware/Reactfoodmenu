import "./card.css";
function Card(props) {
  return (
    <>
      <div
        className="container "
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "50px",
        }}
      >
        <div
          className="card"
          style={{
            width: "20rem",
            height: "170px",

            display: "flex",
            overflow: "hidden",
            borderRadius: "20px",
            boxShadow: "0 0 30px gray",
          }}
        >
          <div
            className="left"
            style={{
              width: "50%",

              backgroundImage: `URL(${props.image})`,
              transition: "transform 0.3s ease-in-out",
              backgroundSize: "100% 100%",
            }}
          ></div>
          <div
            className="right"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "start",
            }}
          >
            <h3 style={{ margin: "0", padding: "0" }}>{props.name}</h3>
            <p
              style={{
                fontSize: ".7rem",
                margin: "1rem 0rem ",
                padding: "0",
                textAlign: "left",
              }}
            >
              {props.desc}
            </p>
            <div
              className="button"
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "1rem",
                width: "100%",
              }}
            >
              <h2 style={{ margin: "0", padding: "0" }} className="price">
                {props.price}
              </h2>
              <button style={{ margin: "0", padding: "0" }}>order now</button>
            </div>
            <p style={{ fontSize: ".6rem" }}>
              * price may vary according to date
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
