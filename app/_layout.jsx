import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { View} from "react-native";
import { ActivityIndicator} from "react-native";

export default function RootLayout() {

  const [fontsLoaded] = useFonts ({
    "Poppins-Regular": require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins/Poppins-Bold.ttf")
  })

  if (!fontsLoaded) {
    return(
      <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  //return <Stack />;
  return(
    <Stack>
    <Stack.Screen name="index" options={{title: '', headerTransparent: true, headerShown: false}}/>
  </Stack>
  )
}
