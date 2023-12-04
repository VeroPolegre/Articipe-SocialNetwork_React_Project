import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./fonts.scss";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
