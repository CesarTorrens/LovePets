import React, { useState, useEffect } from "react";
import FavoriteIcon from "./FavoriteIcon";
import SocialsMedias from "./SocialsMedias";
import ComentsSection from "./ComentsSection";
import StarIcon from "./StarIcon";
import { withUser } from "../context/Context";
const API = `https://reqres.in/api`;

const PerfilCard = (props) => {
  const [count, setCount] = useState(0);
  const addStars = () => setCount(count + 1);
  const [user, setUser] = useState([]);
  console.log("TCL: PerfilCard -> user", user);

  const isFavorite = props.isFavorite(user.id);

  useEffect(() => {
    fetch(`${API}${window.location.pathname}`)
      .then((response) => response.json())
      .then((users) => setUser(users.data));
  }, []);

  return (
    <div className="container mt-4 mb-4 rounded">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-12 col-lg-4">
            <img
              id="photo"
              src={user.avatar}
              className="img-fluid rounded-start"
              alt="foto-de-tu-persona-ideal"
            />
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card-body w-100">
              <h5 className="card-title mb-3 text-md-center text-lg-start">
                <b>
                  {" "}
                  {user.first_name} {user.last_name}{" "}
                </b>
              </h5>
              <p className="card-text">
                <b>Edad: </b> 35 años
              </p>
              <p className="card-text">
                <b>Dirección: </b> Tintal
              </p>
              <p className="card-text">
                <b>Estudios: </b> Licenciatura en Bionalisis
              </p>
              <p className="card-text">
                <b>Ocupación: </b> Profesora
              </p>
              <p className="card-text">
                {" "}
                <b>Puntuación:</b> {count}{" "}
              </p>
              <p className="card-text">
                {" "}
                <b>Cantidad de LovePets:</b> 77{" "}
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-5">
            <div className="card-body h-100 d-flex flex-column justify-content-evenly">
              <p className="card-text w-50 align-self-center d-inline-flex flex-column align-items-center">
                {" "}
                <b className="mb-2">Redes Sociales</b> <SocialsMedias />{" "}
              </p>
              <div className="text-center">
                <p className="card-text align-self-center">
                  {" "}
                  <b>Disponibilidad</b>{" "}
                </p>
                <p>Martes-Jueves 2:00pm a 7pm</p>
                <p>Sabados-Domingos 10:00am a 5:00pm</p>
              </div>
              <div className="w-50 mb-3 mb-sm-0 d-flex justify-content-evenly align-self-center">
                <button
                  onClick={addStars}
                  type="button"
                  className="btn btn-outline-warning me-2"
                >
                  {" "}
                  <StarIcon />{" "}
                </button>
                <button
                  onClick={() => {
                    if (!isFavorite) {
                      return props.addToFavorite({
                        first_name: user.first_name,
                        last_name: user.last_name,
                        avatar: user.avatar,
                        id: user.id,
                      });
                    }

                    props.deleteFavorite(user.id);
                  }}
                  type="button"
                  className={`btn btn-outline-danger me-2 ${
                    isFavorite && "is-favorite"
                  }`}
                >
                  {" "}
                  <FavoriteIcon />{" "}
                </button>
                <a href="#" className="btn btn-vortex justify-self-center">
                  Contactar
                </a>
              </div>
            </div>
          </div>
          <div className="col-12">
            <p className="card-text ps-2 pe-2">
              <b>Descripcion: </b> Contrary to popular belief, Lorem Ipsum is
              not simply random text. It has roots in a piece of classical Latin
              literature from 45 BC, making it over 2000 years old. Richard
              McClintock, a Latin professor at Hampden-Sydney College in
              Virginia, looked up one of the more obscure Latin words,
              consectetur, from a Lorem Ipsum passage, and going through the
              cites of the word in classical literature, discovered the
              undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
              1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
              and Evil) by Cicero, written in 45 BC. This book is a treatise on
              the theory of ethics, very popular during the Renaissance. The
              first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
              from a line in section 1.10.32.
            </p>
            <p className="card-text ps-2">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
      <ComentsSection />
    </div>
  );
};

export default withUser(PerfilCard);
