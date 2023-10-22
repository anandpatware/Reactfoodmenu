import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import { Route, Routes } from "react-router-dom";
import foodData from "./Components/fooddata";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Card />} />
        <Route
          path="/breakfast"
          element={
            <div
              className="card-container"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              {foodData.map((ele, index) => (
                <Card
                  name={ele.name}
                  image={ele.imageUrl}
                  desc={ele.description}
                  price={ele.price}
                  key={index}
                />
              ))}
            </div>
          }
        />
        <Route path="/lunch" element={<Card />} />
      </Routes>
    </div>
  );
}

export default App;
