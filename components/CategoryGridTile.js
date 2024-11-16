import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function CategoryGridTile({ title, color,onPress }) {
  
  return (
    <View style={[styles.gridItem]}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "black",
    marginTop: 30,
    elevation:4
  },
  button: {
    flex: 1,
  },
  
  innerContainer: {
    flex: 1,
    borderRadius: 8,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonPressed: {
    opacity: 0.75,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
