import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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
import InformationCenter from "./components/InformationCenter";
import Placements from "./components/Placements";
import Campus from "./components/Campus";
import Contact from "./components/Contact";
import CareerOpenings from "./components/CareerOpenings";
import Faq from "./components/Faq";
import Apply from "./components/Apply";
import OnlineAdmission from "./components/OnlineAdmission";
import OnlinePayment from "./components/OnlinePayment";
import FloatingButtons from "./components/FloatingButtons";
import "./App.css";

let splashAlreadyShown = false;

function SplashScreen() {
  const [visible, setVisible] = useState(!splashAlreadyShown);
  const [fading, setFading] = useState(false);
  useEffect(() => {
    splashAlreadyShown = true;

    const fadeTimer = setTimeout(() => setFading(true), 1800);
    const removeTimer = setTimeout(() => setVisible(false), 2400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      onClick={() => {
        setFading(true);
        setTimeout(() => setVisible(false), 500);
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "radial-gradient(circle at center, #8E1616 0%, #4A0808 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        opacity: fading ? 0 : 1,
        transform: fading ? "scale(1.05)" : "scale(1)",
        transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s ease-out",
        cursor: "pointer",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            width: "100px",
            height: "100px",
            margin: "0 auto 16px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #FFD166 0%, #C41E1E 100%)",
            padding: "3px",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              background: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <img
              src="/assets/images/logonew.png"
              alt="KAP Logo"
              style={{ width: "80%", height: "80%", objectFit: "contain" }}
            />
          </div>
        </div>
        <h2 style={{ color: "#ffffff", fontSize: "28px", fontWeight: 800, margin: "0 0 6px" }}>
          KERALA ACADEMY OF PHARMACY
        </h2>
        <div style={{ color: "#FFD166", fontSize: "12px", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 700 }}>
          Excellence in Healthcare & Research
        </div>
      </div>
    </div>
  );
}

// Helper component to scroll to top on page/route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <SplashScreen />
      <ScrollToTop />
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
        <Route path="/online-admission" element={<OnlineAdmission />} />
        <Route path="/online-payment" element={<OnlinePayment />} />
        <Route path="/approval" element={<Approval />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blogs/:slug" element={<BlogDetail />} />
        <Route path="/information-center" element={<InformationCenter />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/campus" element={<Campus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/career-openings" element={<CareerOpenings />} />
        <Route path="/pharmacy" element={<Pharmacy />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/apply" element={<Apply />} />

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
      <FloatingButtons />
    </div>
  );
}

export default App;