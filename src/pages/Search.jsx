import React from "react";
import { useLocation } from "react-router-dom";
import TestCard from "../components/TestCard";
import { withUser } from "../context/Context";
import CardsContainer from "../components/CardsContainer";

const API = "https://reqres.in/api/users";

const Search = ({ findUsers, updateUsers }) => {
  const location = useLocation();

  React.useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((users) => updateUsers(users.data));
  }, []);

  const query = location.search.split("query=")[1];

  const users = findUsers(query);

  return (
    <div className="container mb-4">
      <CardsContainer users={users} />
    </div>
  );
};

export default withUser(Search);
