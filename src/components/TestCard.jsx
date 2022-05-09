import React from "react";
import { Link } from "react-router-dom";
import FavoriteIcon from "./FavoriteIcon";
import { withUser } from "../context/Context";

const TestCard = (props) => {
  const isFavorite = props.isFavorite(props.id);

  return (
    <>
      <div className="shadow-box col-sm-4 col-md-3 mt-4">
        <div className="card h-100">
          <img
            id="photo"
            src={props.img}
            className="card-img-top"
            alt="foto-persona"
          />
          <div className="card-body text-center">
            <h5 className="card-title">
              {props.name} {props.lastName}
            </h5>
            <button
              onClick={() => {
                if (!isFavorite) {
                  return props.addToFavorite({
                    first_name: props.name,
                    last_name: props.lastName,
                    avatar: props.img,
                    id: props.id,
                  });
                }

                props.deleteFavorite(props.id);
              }}
              type="button"
              className={`btn btn-outline-danger me-2 ${
                isFavorite && "is-favorite"
              }`}
            >
              {" "}
              <FavoriteIcon />{" "}
            </button>
            <Link className="btn btn-primary" to={`/users/${props.id}`}>
              Contactar
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default withUser(TestCard);
