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
import AboutPage from "./pages/AboutPage";

import { AuthProvider } from "./context/AuthContext";

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


      </Routes>
      <Footer />
       

    </div>
  );
}

export default App;









 








// const loginUser = async (e) => {
//     e.preventDefault()
//     try {
//       let response = await axios.post(`${BASE_URL}/token/`,{"username":e.target.username.value,"password":e.target.password.value},{
  
//   }
//   );
//       if (response.status === 200) {
//         console.log(response.json())
//         localStorage.setItem("token", JSON.stringify(response.data.access));
//         setToken(JSON.parse(localStorage.getItem("token")));
//         let loggedInUser = jwtDecode(response.data.access);
//         setUser(setUserObject(loggedInUser));
//         setIsServerError(false);
//         navigate("/pantry");
//       } else {
//         navigate("/register");
//       }
//     } catch (error) {
//       console.log(error.response.data);
//       setIsServerError(true);
//       navigate("/register");
//     }
//   };