import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import MealItem from "../MealItem";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

export default function MealsList({ items }) {
  const navigation = useNavigation();

  return (
      <View style={styles.container}>
        <FlatList
          data={items}
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
    marginBottom:120,
  },
});
