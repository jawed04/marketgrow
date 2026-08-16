import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/theme";
import { AuthProvider, useAuth } from "./context/AuthContext";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LearningHub from "./pages/LearningHub";
import Tools from "./pages/Tools";
import Login from "./pages/Auth/Login";
import DashboardOverview from "./pages/Dashboard/DashboardOverview";
import Footer from "./components/Footer";
import DigitalMarketing from "./pages/DigitalMarketing";
import SmallBusiness from "./pages/SmallBusiness";
import Register from "./pages/Auth/Register";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Strategies from "./pages/Strategies";
import Cookies from "./pages/Cookies";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ScrollToTop from "./pages/ScrollToTop";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Router>
          <ScrollToTop /> {/* 2. Placed here to reset scroll on route change */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/learning-hub" element={<LearningHub />} />
            <Route path="/small-business" element={<SmallBusiness />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/strategies" element={<Strategies />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route
              path="/dashboard-Overview"
              element={
                <ProtectedRoute>
                  <DashboardOverview />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;