import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Route, Routes } from "react-router-dom";
import OpenRoute from "./components/OpenRoutes";
import Home from "./components/Home";



function App() {
  return (
    <>
      <Routes>
        {/* Public routes */}


        <Route path="/" element={<Home />} />


        <Route
          path="/login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />

        <Route
          path="/signup"
          element={
            <OpenRoute>
              <SignUp />
            </OpenRoute>
          }
        />


        {/* Protected Routes */}


      </Routes>
    </>
  );
}

export default App;
