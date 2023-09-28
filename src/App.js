import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import CloudTransformation from "./pages/services/CloudTransformation";
import DedicatedDevelopers from "./pages/services/DedicatedDevelopers";
import CustomSoftware from "./pages/services/CustomSoftware";
import ProductDevelopment from "./pages/services/ProductDevelopment";
import DataAnalytics from "./pages/services/DataAnalytics";
function App() {
  return (
    <>
    
    <Router>
   
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services/cloud-and-digital-transformation-service" element={<CloudTransformation/>}/>
        <Route path="/services/dedicated-developers" element={<DedicatedDevelopers/>}/>
        <Route path="/services/custom-software-development" element={<CustomSoftware/>}/>
        <Route path="/services/product-development-services" element={<ProductDevelopment/>} />
        <Route path="/services/data-analytics-services" element={<DataAnalytics/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
