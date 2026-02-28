import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
      <Text className="text-blue-600 font-extrabold text-2xl" style={{backgroundColor: "red"}}>
        Why are you not appearing?
      </Text>
    </View>
  );
}
