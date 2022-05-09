import React from "react";
import { Link } from "react-router-dom";
import Dog from "../assets/icons/dog.svg";
import { withUser } from "../context//Context";

const Header = (props) => {
  const timer = React.useRef();

  const search = (event) => {
    const value = event.target.value;

    clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      window.location.href = `search?query=${value}`;
    }, 1000);
  };

  return (
    <header id="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={Dog} alt="logo-lovepets" />
            </a>
            <form className="d-flex ms-md-5 w-50 justify-content-center">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Busca tu persona ideal"
                aria-label="Search"
                onKeyDown={search}
              />
            </form>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-sm-end"
              id="navbarTogglerDemo03"
            >
              <ul className="navbar-nav mb-2 mb-lg-0 text-end">
                <li className="nav-item">
                  <a
                    className="nav-link active text-white"
                    aria-current="page"
                    href="#"
                  >
                    <Link className="nav-link active text-white" to="/">
                      {" "}
                      Home{" "}
                    </Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-white" href="#">
                    <Link
                      className="nav-link active text-white"
                      to="/favorites"
                    >
                      {" "}
                      Favoritos{" "}
                    </Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active text-white"
                    href="#"
                    tabIndex="-1"
                    aria-disabled="true"
                  >
                    <Link className="nav-link active text-white" to="/Aboutus">
                      {" "}
                      Acerca de nosotros{" "}
                    </Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default withUser(Header);
