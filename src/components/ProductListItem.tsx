import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Colors from "../../src/constants/Colors";
import { Product } from "../types";

type ProductListItemProps = {
  product: Product;
};

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product.image || 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png' }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
    </View>
  );
};

export default ProductListItem;

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