import { View, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderText from "./components/HeaderText";
import BodyText from "./components/BodyText";
import {Link, useRouter } from "expo-router";
export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 items-center bg-page p-4">
      <View className="bg-warning/80 p-8 rounded-3xl mt-24 mb-12">
        <Image
          source={require("../assets/images/wallet.png")}
          className="w-48 h-48"
          resizeMode="contain"
        />
      </View>
      <View className="mt-8">
        <HeaderText className="text-center text-3xl">
          Track Every Amount
        </HeaderText>
        <BodyText className="text-text-secondary p-4 text-center">
          Keep an eye on every amount you spend and get with ease. Personal
          finance has never been this simple.
        </BodyText>
      </View>
      <Pressable
        onPress={() => router.navigate("/(auth)/signup")}
        className="bg-brand text-text-inverse font rounded-lg active:bg-brand-pressed mt-16 w-full py-4 mb-3"
      >
        <BodyText className="text-center text-text-inverse font-bold">
          Get Started
        </BodyText>
      </Pressable>
      <BodyText>
        Already have an Account?{" "}
        <Link href={"/(auth)/login"} className="text-brand">
          Sign In
        </Link>
      </BodyText>
    </SafeAreaView>
  );
}
