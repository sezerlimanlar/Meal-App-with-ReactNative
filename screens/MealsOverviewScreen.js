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
            //Eğer bir bileşen, başka bir bileşenin alt bileşeni olarak tanımlandıysa,
            //(MealsOverviewScreen altında MealItem renderlanması gibi) navigation ve
            //route prop'ları otomatik olarak bu bileşene geçilmez. Alt bileşenler doğrudan
            //bir navigatör tarafından yönetilmediği için, bu prop'ları üst bileşenden manuel
            //olarak geçirmen gerekir. Alternatif olarak, useNavigation hook'u kullanılabilir.
            <MealItem
              id={itemData.item.id}
              title={itemData.item.title}
              imageUrl={itemData.item.imageUrl}
              complexity={itemData.item.complexity}
              duration={itemData.item.duration}
              affordability={itemData.item.affordability}
              navigation={navigation}
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
