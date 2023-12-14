import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import "./fonts.scss";
import SignIn from "./pages/SignIn/SignIn";
import Home from "./pages/Home/Home";
import Register from "./components/Register/Register";
import PrivateZone from "./guards/PrivateZone";
import NotFound from "./components/NotFound/NotFound";
import Profile from "./pages/Profile/Profile";
import Explore from "./pages/Explore/Explore";
import Paella from "./components/Paella/Paella";

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
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/explore" element={<Explore />}></Route>
          <Route path="/paella" element={<Paella />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
