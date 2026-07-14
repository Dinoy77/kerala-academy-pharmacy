import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Placeholder from "./components/Placeholder";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Placeholder title="Home" />} />
        <Route path="/about" element={<Placeholder title="About" />} />
        <Route path="/why-kap" element={<Placeholder title="Why KAP" />} />
        <Route path="/academics" element={<Placeholder title="Academics" />} />
        <Route path="/admission" element={<Placeholder title="Admission" />} />
        <Route path="/approval" element={<Placeholder title="Approval" />} />
        <Route path="/events" element={<Placeholder title="Events" />} />
        <Route path="/blogs" element={<Placeholder title="Blogs" />} />
        <Route
          path="/information-center"
          element={<Placeholder title="Information Center" />}
        />
        <Route path="/placements" element={<Placeholder title="Placements" />} />
        <Route path="/campus" element={<Placeholder title="Campus" />} />
        <Route path="/contact" element={<Placeholder title="Contact" />} />
        <Route path="/career" element={<Placeholder title="Career" />} />
        <Route path="/faq" element={<Placeholder title="FAQ" />} />
        <Route path="/apply" element={<Placeholder title="Apply Now" />} />
      </Routes>
    </div>
  );
}

export default App;