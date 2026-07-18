import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Placeholder from "./components/Placeholder";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Chairman from "./components/Chairman";
import PrincipalMessage from "./components/PrincipalMessage";
import VisionMission from "./components/VisionMission";
import Pharmacy from "./components/Pharmacy";
import Career from "./components/Career";
import Pinnacle from "./components/Pinnacle";
import Library from "./components/Library";
import BPharm from "./components/BPharm";
import DPharm from "./components/DPharm";
import MPharm from "./components/MPharm";
import Department from "./components/Department";
import Approval from "./components/Approval";
import Events from "./components/Events";
import BlogList from "./components/BlogList";
import BlogDetail from "./components/BlogDetail";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/chairman" element={<Chairman />} />
        <Route path="/about/principal" element={<PrincipalMessage />} />
        <Route path="/about/vision-mission" element={<VisionMission />} />
        <Route path="/why-kap" element={<Placeholder title="Why KAP" />} />
        <Route path="/pinnacle" element={<Pinnacle />} />
        <Route path="/library" element={<Library />} />
        <Route path="/bpharm" element={<BPharm />} />
        <Route path="/dpharm" element={<DPharm />} />
        <Route path="/mpharm" element={<MPharm />} />
        <Route path="/department" element={<Department />} />
        <Route path="/online-admission" element={<Placeholder title="Online Admission Registration" />} />
        <Route path="/online-payment" element={<Placeholder title="Online Payment" />} />
        <Route path="/approval" element={<Approval />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blogs/:slug" element={<BlogDetail />} />
        <Route
          path="/information-center"
          element={<Placeholder title="Information Center" />}
        />
        <Route path="/placements" element={<Placeholder title="Placements" />} />
        <Route path="/campus" element={<Placeholder title="Campus" />} />
        <Route path="/contact" element={<Placeholder title="Contact" />} />
        <Route path="/career" element={<Career />} />
        <Route path="/pharmacy" element={<Pharmacy />} />
        <Route path="/faq" element={<Placeholder title="FAQ" />} />
        <Route
          path="/travel-information"
          element={<Placeholder title="Travel Information" />}
        />
        <Route path="/apply" element={<Placeholder title="Apply Now" />} />

        {/* New routes for footer links */}
        <Route path="/b-pharm" element={<Placeholder title="B Pharmacy" />} />
        <Route path="/d-pharm" element={<Placeholder title="D Pharmacy" />} />
        <Route
          path="/b-pharm-lateral-entry"
          element={<Placeholder title="B Pharm (Lateral Entry)" />}
        />
        <Route path="/fee-structure" element={<Placeholder title="Fee Structure" />} />
        <Route path="/achievements" element={<Placeholder title="Achievements" />} />
        <Route path="/alumni" element={<Placeholder title="Alumni" />} />
        <Route path="/terms" element={<Placeholder title="Terms & Conditions" />} />
        <Route path="/faculty" element={<Placeholder title="Faculty & Staff" />} />
        <Route path="/affidavit" element={<Placeholder title="Affidavit" />} />
        <Route path="/departments" element={<Placeholder title="Departments" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;