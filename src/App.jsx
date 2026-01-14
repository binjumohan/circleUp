import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Events from "./pages/Events";
import Login from "./pages/Login";
import SignUp from "./pages/signUp";
import Calender from "./pages/Calender";
import Map from "./pages/Map";
import EventDetails from "./pages/EventDetails";

import AuthProvider from "./hooks/AuthProvider";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/map" element={<Map />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
