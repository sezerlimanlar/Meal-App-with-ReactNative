import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

export default function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealsIds] = useState([]);

  function addFavorite(id) {
    setFavoriteMealsIds((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavorite(id) {
    setFavoriteMealsIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  }

  return (
    <FavoritesContext.Provider
      value={{
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

function useFavoritesContext() {
  const context = useContext(FavoritesContext);
  if (context === undefined)
    throw new Error("Context was used outside of FavoritesContextProvider");
  return context;
}

export { useFavoritesContext, FavoritesContext };
