import React from "react";
import TestCard from "../components/TestCard";
import { withUser } from "../context/Context";
import CardsContainer from "../components/CardsContainer";

const Favorites = ({ favorites }) => {
  return (
    <div className="container mb-4">
      <CardsContainer users={favorites} />
    </div>
  );
};

export default withUser(Favorites);
