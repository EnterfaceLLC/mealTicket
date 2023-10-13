import { StyleSheet, View, Text, Image } from "react-native";

import Colors from "../../constants/Colors";
import products from "@assets/data/products";
import ProductListItem from "@components/ProductListItem";

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <ProductListItem product={products[5]} />
      <ProductListItem product={products[1]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    alignSelf: "center",
  },
  title: {
    fontWeight: "600",
    fontSize: 18,
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
    marginTop: "auto",
  },
});
