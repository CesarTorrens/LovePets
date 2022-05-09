import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import PerfilCard from "./components/PerfilCard";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Search from "./pages/Search";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:id" element={<PerfilCard />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/search" element={<Search />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
