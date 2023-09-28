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
import OnlineLaundary from "./pages/works/OnlineLaundary";
import UndergroundMines from "./pages/works/UndergroundMines";
import AIbasedHealth from "./pages/works/AIbasedHealth";
import SolarWebApp from "./pages/works/SolarWebApp";
import OnlineBidding from "./pages/works/OnlineBidding";
import MaterialTesting from "./pages/works/MaterialTesting";
import FarmersConnectApp from "./pages/works/FarmersConnectApp";
import ShippingManagement from "./pages/works/ShippingManagement";
import SportsEcosystem from "./pages/works/SportsEcosystem";
import LogisticSol from "./pages/works/LogisticSol";
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
        <Route path="/works/online-laundry-order-management-system" element={<OnlineLaundary/>} />
        <Route path="/works/underground-mines-erp" element={<UndergroundMines/>} />
        <Route path="/works/ai-based-health-monitoring-system" element={<AIbasedHealth/>} />
        <Route path="/works/solar-web-application" element={<SolarWebApp/>} />
        <Route path="/works/online-bidding-facilitating" element={<OnlineBidding/>} />
        <Route path="/works/material-testing-lab-automation" element={<MaterialTesting/>} />
        <Route path="/works/farmers-connect-application" element={<FarmersConnectApp/>} />
        <Route path="/works/shipping-management-solution" element={<ShippingManagement/>} />
        <Route path="/works/sports-ecosystem" element={<SportsEcosystem/>} />
        <Route path="/works/logistic-solution-erp" element={<LogisticSol/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
