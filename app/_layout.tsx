import "./global.css"
import { Stack } from "expo-router";
import {useFonts, Montserrat_400Regular, Montserrat_700Bold} from "@expo-google-fonts/montserrat"
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen"

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Montserrat_400Regular, Montserrat_700Bold
  })
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null
  }
  
  return <Stack />;
}
