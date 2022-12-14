import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import PantryPage from "./pages/PantryPage/Pantry";
import CreateItem from "./components/CreateItem/CreateItem";
import CartPage from "./pages/CartPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import RecipePage from "./pages/RecipePage/RecipePage";
// import { AuthProvider } from "./context/AuthContext";

import './index.css';
 

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
            <Navbar />
  
      <Routes>
        <Route path="/" element={
            <PrivateRoute>
              <HomePage />
              {/* <AboutPage/> */}
              {/* <PantryPage/> */}
              {/* <ShoppingListPage/>
              <RecipesPage/> */}


            </PrivateRoute>
          }
          exact
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/pantry" element={<PantryPage/>} />
        <Route path="/create-item" element={<CreateItem/>} />
        <Route path="/shopping-list" element={<CartPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/recipes" element={<RecipePage/>} />



      </Routes>
      <Footer />
       

    </div>
  );
}

export default App;









 






