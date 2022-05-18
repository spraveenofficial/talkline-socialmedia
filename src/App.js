import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Signup } from "./Pages";
import { Navbar } from "./Components";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
