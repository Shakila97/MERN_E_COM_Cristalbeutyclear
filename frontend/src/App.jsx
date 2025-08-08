import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NewArrivalsPage from "./pages/NewArrivals"
import ProductPage from "./pages/Product" // Ensure this file exists
import Home from "./pages/Home";


export default function App() {

  return (
    
      <Router>
        <Routes>
          
          {/* New Arrivals route */}
          <Route path="/" element={<NewArrivalsPage />} />
          {/* Product detail route */}
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </Router>
  
  )
}


