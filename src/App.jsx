import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./fonts.scss";
import SignIn from "./pages/SignIn/SignIn";
import Home from "./pages/Home/Home";
import Register from "./components/Register/Register";
import PrivateZone from "./guards/PrivateZone";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateZone>
                <Home />
              </PrivateZone>
            }
          ></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
