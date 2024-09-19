import { View, Text, FlatList } from "react-native";
import React from "react";

const Trading = ({ post }) => {
  return (
    <FlatList
      data={post}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View>
          <Text className="text-white">{item.id}</Text>
        </View>
      )}
      horizontal
    />
  );
};

export default Trading;
