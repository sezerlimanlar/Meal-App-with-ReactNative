import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";

export default function MealsOverviewScreen({ route }) {
  //Alternatifi useRoot
  const { categoryId } = route.params;
  console.log(categoryId);
  return (
    <View style={styles.container}>
      <Text>MEALS = {categoryId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
