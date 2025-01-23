import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Category from "../pages/Category";
import { useEffect } from "react";

const AppRoutes = () => {
  
  const ScrollToTop = () => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0); 
    }, [location]);
    return null;
  };

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
