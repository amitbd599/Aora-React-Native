import { View, Text, SafeAreaView, FlatList, Image } from "react-native";
import React from "react";
import { images } from "../../assets/constants";
import SearchInput from "../../components/SearchInput";
import Trading from "../../components/Trading";
import EmptyState from "../../components/EmptyState";
const Home = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={[]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text className="text-[20px] text-white mb-2">Item {item.id}</Text>
          </View>
        )}
        ListHeaderComponent={() => (
          <View className="pt-[40px] my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-semibold text-sm text-gray-300">
                  Welcome Back
                </Text>
                <Text className="text-2xl font-semibold text-white mt-2">
                  React Native
                </Text>
              </View>
              <View className="mt-2">
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>
            <SearchInput />
            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-gray-100 text-lg font-medium mb-3">
                Latest Videos
              </Text>
            </View>
            <Trading post={[] ?? []} />
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos found!"
            subTitle="No video create yet."
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
