import { StyleSheet } from "react-native";
import React, { useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

//Stack.Screen'den otomatik olarak route ve navigation propsları alır
export default function MealsOverviewScreen({ route, navigation }) {
  //Alternatifi useRoot
  const { categoryId } = route.params;

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  return <MealsList items={displayMeals} navigation={navigation} />;
}
