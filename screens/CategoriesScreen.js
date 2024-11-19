import { StyleSheet, FlatList } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

export default function CategoriesScreen({ navigation }) {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => {
        return (
          <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={() =>
              navigation.navigate("MealsOverview", {
                categoryId: itemData.item.id,
              })
            }
            navigation={navigation}
          />
        );
      }}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({});
