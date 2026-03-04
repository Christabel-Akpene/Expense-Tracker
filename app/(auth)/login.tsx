import { Pressable, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BodyText from "../components/BodyText";
import {Link, useRouter} from "expo-router"
const Login = () => {
  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      extraScrollHeight={20}
      keyboardShouldPersistTaps="handled"
      className="flex-1 bg-page"
    >
      <View className=" items-center">
        <View className="p-4 rounded-md bg-brand/80 mt-8 mb-4">
          <Ionicons name="wallet-outline" size={20} color="white" />
        </View>
        <BodyText className="font-bold text-3xl">Welcome Back</BodyText>
        <BodyText className="my-2">
            Continue Tracking Your Expenses
        </BodyText>
        <View className="bg-card shadow-md w-[90%] p-8 rounded-md mt-8">
          <View className="my-2">
            <BodyText className="font-bold text-lg">Email</BodyText>
            <TextInput
              autoCapitalize="none"
              placeholder="adjoa@gmail.com"
              className="border border-border-strong rounded-md my-2 bg-border/30 px-2 focus:border-brand"
            />
          </View>
          <View className="my-2">
            <BodyText className="font-bold text-lg">Password</BodyText>
            <TextInput
              autoComplete="off"
              secureTextEntry
              placeholder=".................."
              className="border border-border-strong rounded-md my-2 bg-border/30 px-2 focus:border-brand"
            />
          </View>
          <Pressable className="bg-brand rounded-md mt-4 active:bg-brand-pressed">
            <BodyText className="p-3 m-auto text-white font-bold">
              Sign In
            </BodyText>
          </Pressable>
        </View>
        <BodyText className="mt-8">
          Don&apos;t have an Account?{" "}
          <Link href={"/(auth)/signup"} className="text-brand">Sign Up</Link>
        </BodyText>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;
