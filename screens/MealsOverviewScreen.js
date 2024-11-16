import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

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

  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => {
          return (
            <MealItem
              title={itemData.item.title}
              imageUrl={itemData.item.imageUrl}
              complexity={itemData.item.complexity}
              duration={itemData.item.duration}
              affordability={itemData.item.affordability}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
