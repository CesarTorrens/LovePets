import React from "react";
import FavoriteIcon from "../components/FavoriteIcon";

const UserContext = React.createContext(null);

export const UserProvider = ({ children }) => {
  const [users, setUsers] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);

  const updateUsers = (users) => {
    setUsers(users);
  };

  const findUsers = (query) =>
    users.filter((user) => {
      return (
        user.first_name.toLowerCase().indexOf(query.toLowerCase()) >= 0 ||
        user.last_name.toLowerCase().indexOf(query.toLowerCase()) >= 0
      );
    });

  const addToFavorite = (user) => setFavorites([...favorites, user]);

  const isFavorite = (id) => favorites.some((user) => user.id === id);

  const deleteFavorite = (id) =>
    setFavorites(favorites.filter((user) => user.id !== id));

  return (
    <UserContext.Provider
      value={{
        users,
        updateUsers,
        favorites,
        addToFavorite,
        isFavorite,
        deleteFavorite,
        findUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const withUser = (Component) => (props) => (
  <UserContext.Consumer>
    {(context) => <Component {...props} {...context} />}
  </UserContext.Consumer>
);
