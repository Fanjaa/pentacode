import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Home from "../pages/Home"
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={< Home />} /> 
      </Routes>
      <Footer />
    </Router>
  )
}

export default AppRoutes
