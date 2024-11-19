import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

export default function FavoritesScreen() {
  const { ids } = useFavoritesContext();

  const favoriteMeals = MEALS.filter((meal) => ids.includes(meal.id));

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>Henüz favori yemekleriniz yok.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color:"white",
    textAlign:"center"
  },
});
