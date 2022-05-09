import React, { useState, useEffect } from "react";
import CardsContainer from "../components/CardsContainer";
import Carrousel from "../components/Carrousel";
import { withUser } from "../context/Context";

const API = "https://reqres.in/api/users";

const Home = ({ users: userList, updateUsers }) => {
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((users) => updateUsers(users.data));
  }, []);

  return (
    <section>
      <Carrousel />
      <CardsContainer users={userList} />
    </section>
  );
};

export default withUser(Home);
