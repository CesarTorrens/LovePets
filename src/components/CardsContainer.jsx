import React from "react";
import TestCard from "./TestCard";

export default function CardsContainer(props) {
  return (
    <div className="container mt-4 mb-4">
      <div className="row">
        {props.users.map((user) => (
          <TestCard
            id={user.id}
            img={user.avatar}
            name={user.first_name}
            lastName={user.last_name}
          />
        ))}
      </div>
    </div>
  );
}
